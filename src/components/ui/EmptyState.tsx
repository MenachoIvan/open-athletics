import { Activity, ExternalLink } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-6 bg-white rounded-[2rem] border border-gray-100 p-10">
      <div className="rounded-full bg-gray-50 border border-gray-100 p-6">
        <Activity className="h-12 w-12 text-[#FC6100]" />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-black tracking-tighter text-gray-900">
          No activities yet this year
        </h3>
        <p className="text-base text-gray-400/50 max-w-sm">
          Time to hit the road! Record your first activity on Strava and it will show up here automatically.
        </p>
      </div>
      <a href="https://www.strava.com/activities/new" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-[#FC6100] px-6 py-3 text-sm font-semibold text-white hover:shadow-md hover:border hover:border-gray-100 transition-all">
        Record on Strava
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
