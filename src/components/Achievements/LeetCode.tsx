import React from "react";
import { SparklesText } from "@/components/ui/effects/SparklesText";
import { CometCard } from "@/components/ui/animations";

export default function LeetCode() {
  return (
    <div className="bg-transparent p-10">
      <SparklesText text="Leet Code" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 pb-10 -mt-15">
        <CometCard className="w-full h-full text-white flex items-center justify-center font-bold text-xl">
          <img src="./leetCode/500days.png" alt="500 Days Badge" width={220} />
        </CometCard>

        <CometCard className="w-full h-full text-white flex items-center justify-center font-bold text-xl">
          <img src="./leetCode/365days.png" alt="365 Days Badge" width={220} />
        </CometCard>

        <CometCard className="w-full h-full text-white flex items-center justify-center font-bold text-xl">
          <img src="./leetCode/200days.png" alt="200 Days Badge" width={220} />
        </CometCard>

        <CometCard className="w-full h-full text-white flex items-center justify-center font-bold text-xl">
          <img src="./leetCode/100days.png" alt="100 Days Badge" width={220} />
        </CometCard>

          <CometCard className="w-full h-full text-white flex items-center justify-center font-bold text-xl">
          <img src="./leetCode/100days_2024.png" alt="100 Days Badge" width={220} />
        </CometCard>
      </div>
    </div>
  );
}
