"use client";

import { useState, useEffect } from "react";
import { StatsGridSkeleton } from "@/components/StatsGridSkeleton";
import { EmptyState } from "@/components/EmptyState";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<unknown[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-16 px-8">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-8">
          Dashboard
        </h1>
        {loading ? (
          <StatsGridSkeleton />
        ) : activities.length === 0 ? (
          <EmptyState />
        ) : null}
      </main>
    </div>
  );
}
