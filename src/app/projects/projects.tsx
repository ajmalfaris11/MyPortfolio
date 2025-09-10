"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { projects } from "@/data/sections/projects";
import ProjectCard from "@/components/Projects/ProjectCard";
import Controls from "@/components/Projects/Controls";
import EmptyState from "./EmptyState";
import TagRail from "./TagRail";

// ---------------------------------------------
// Types
// ---------------------------------------------

type Complexity = "beginner" | "intermediate" | "advanced" | "expert";

export interface Project {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  tech: string[];
  stars: number;
  updatedAt: string;
  thumbnail: string;
  live: string;
  repo?: string;
  complexity?: Complexity;
}

// ---------------------------------------------
// Constants
// ---------------------------------------------

const ALL_TECH = [...new Set(projects.flatMap((p) => p.tech))].sort();
const ALL_TAGS = [...new Set(projects.flatMap((p) => p.tags))].sort();

const COMPLEXITY_ORDER: Record<Complexity, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
  expert: 3,
};

// ---------------------------------------------
// Component
// ---------------------------------------------

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState<"featured" | "stars" | "recent" | "complexity">("featured");
  const [view, setView] = useState<"grid" | "list">("grid");

  // Reset filters (memoized to avoid re-renders)
  const resetFilters = useCallback(() => {
    setQuery("");
    setSelectedTech([]);
    setSelectedTags([]);
  }, []);

  // Keyboard shortcut for quick search focus
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/") {
        const el = document.getElementById("project-search") as HTMLInputElement | null;
        if (el) {
          e.preventDefault();
          el.focus();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Filter + sort projects
  const filteredProjects = useMemo(() => {
    let out = [...projects];

    // Apply query filter
    if (query.trim()) {
      const q = query.toLowerCase();
      out = out.filter((p) =>
        [p.title, p.blurb, ...p.tags, ...p.tech].some((x) =>
          x.toLowerCase().includes(q)
        )
      );
    }

    // Apply tech filter
    if (selectedTech.length) {
      out = out.filter((p) => selectedTech.every((t) => p.tech.includes(t)));
    }

    // Apply tags filter
    if (selectedTags.length) {
      out = out.filter((p) => selectedTags.every((t) => p.tags.includes(t)));
    }

    // Apply sorting
    switch (sort) {
      case "stars":
        out.sort((a, b) => b.stars - a.stars);
        break;
      case "recent":
        out.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));
        break;
      case "complexity":
        out.sort(
          (a, b) =>
            COMPLEXITY_ORDER[b.complexity as Complexity] -
            COMPLEXITY_ORDER[a.complexity as Complexity]
        );
        break;
      // "featured" keeps default order
    }

    return out;
  }, [query, selectedTech, selectedTags, sort]);

  // ---------------------------------------------
  // Render
  // ---------------------------------------------

  return (
    <div className="min-h-screen z-10">
      <section className="mx-auto w-full max-w-7xl">
        {/* Filters Section */}
        <div className="mt-4 grid md:grid-cols-12 gap-4 border-2 border-blue-600 bg-black overflow-hidden rounded-2xl py-2">
          <div className="md:col-span-5">
            <Controls
              query={query}
              setQuery={setQuery}
              sort={sort}
              setSort={setSort}
              view={view}
              setView={setView}
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
              onReset={resetFilters}
            />
          </div>
          <div className="md:col-span-7">
            <TagRail
              tags={ALL_TAGS}
              selectedTags={selectedTags}
              onToggle={(tag: string) =>
                setSelectedTags((prev) =>
                  prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
                )
              }
              onClear={resetFilters}
            />
          </div>
        </div>

        {/* Projects Section */}
        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredProjects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        ) : (
          <EmptyState onReset={resetFilters} />
        )}
      </section>
    </div>
  );
}
