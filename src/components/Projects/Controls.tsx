import React from "react";
import { Search } from "lucide-react";

export default function Controls(props: any) {
  const { query, setQuery } = props;

  return (
    <div className="flex w-full rounded-r-full bg-blue-600">
      <div className="flex flex-wrap items-center gap-3 w-full">
        <div className="relative flex-1 min-w-[240px] rounded-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />
          <input
            id="project-search"
            type="text"
            placeholder="Search projects, tech, tags… "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-md border-none px-3 py-2 pl-12 text-[16px] text-black placeholder-black focus:outline-none "
          />
        </div>
      </div>
    </div>
  );
}
