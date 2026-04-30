'use client';

import React, { useMemo } from 'react';
import { StravaActivity } from '@/types/strava';

interface StatsGridProps {
  activities: StravaActivity[];
}

export default function StatsGrid({ activities }: StatsGridProps) {
  const stats = useMemo(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const startOfWeek = new Date(now);
    const day = now.getDay();
    const diff = day === 0 ? 6 : day - 1;
    startOfWeek.setDate(now.getDate() - diff);
    startOfWeek.setHours(0, 0, 0, 0);

    const startOfMonth = new Date(currentYear, currentMonth, 1);
    const startOfYear = new Date(currentYear, 0, 1);

    return activities.reduce(
      (acc, activity) => {
        const activityDate = new Date(activity.start_date);
        const distanceKm = activity.distance / 1000;

        if (activityDate >= startOfYear) acc.year += distanceKm;
        if (activityDate >= startOfMonth) acc.month += distanceKm;
        if (activityDate >= startOfWeek) acc.week += distanceKm;

        return acc;
      },
      { week: 0, month: 0, year: 0 },
    );
  }, [activities]);

  const cardClass =
    'bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm transition-all hover:shadow-md hover:border-gray-200 flex flex-col justify-center';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div className={cardClass}>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          This Week
        </span>
        <div className="text-5xl font-black text-gray-900 mt-2 tabular-nums tracking-tighter">
          {stats.week.toFixed(1)} <span className="text-lg font-medium text-gray-300">km</span>
        </div>
      </div>

      <div className={`${cardClass} border-orange-100 bg-orange-50/30`}>
        <span className="text-[10px] font-bold text-[#FC6100] uppercase tracking-[0.2em]">
          This Month
        </span>
        <div className="text-5xl font-black text-gray-900 mt-2 tabular-nums tracking-tighter">
          {stats.month.toFixed(1)} <span className="text-lg font-medium text-gray-300">km</span>
        </div>
      </div>

      <div className={cardClass}>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          This Year
        </span>
        <div className="text-5xl font-black text-gray-900 mt-2 tabular-nums tracking-tighter">
          {stats.year.toFixed(0)} <span className="text-lg font-medium text-gray-300">km</span>
        </div>
      </div>
    </div>
  );
}
