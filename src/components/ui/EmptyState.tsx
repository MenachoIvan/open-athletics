import { Activity, ExternalLink } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
      <div className="rounded-full bg-orange-100 dark:bg-orange-900/20 p-6">
        <Activity className="h-12 w-12 text-orange-500" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          No activities yet this year
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
          Time to hit the road! Record your first activity on Strava and it will show up here automatically.
        </p>
      </div>
      <a href="https://www.strava.com/activities/new" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-orange-600 transition-colors">
        Record on Strava
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
