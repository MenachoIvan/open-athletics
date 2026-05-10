export function StatsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-xl bg-gray-100 dark:bg-zinc-800 p-6 animate-pulse">
          <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-700 rounded mb-4" />
          <div className="h-8 w-32 bg-gray-200 dark:bg-zinc-700 rounded mb-2" />
          <div className="h-3 w-16 bg-gray-200 dark:bg-zinc-700 rounded" />
        </div>
      ))}
    </div>
  );
}
