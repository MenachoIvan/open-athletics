import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getAthleteActivities } from '@/lib/strava';
import Hero from '@/components/layout/Hero';
import Mission from '@/components/layout/Mission';
import LogoutButton from '@/components/auth/LogOutButton';
import { EmptyState } from '@/components/ui/EmptyState';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <>
        <Hero />
        <Mission />
      </>
    );
  }

  const activities = await getAthleteActivities(session.accessToken as string);

  return (
    <main className="min-h-screen bg-gray-50 p-10 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-black tracking-tighter text-gray-900">
          Your Dashboard
        </h1>
        <LogoutButton />
      </div>

      <div className="grid gap-4">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-md hover:border-gray-200 transition-all"
            >
              <h2 className="font-black tracking-tighter text-xl text-gray-900 mb-2">
                {activity.name}
              </h2>
              <div className="flex gap-4 text-gray-400/50 text-sm font-medium">
                <span>Dist: {(activity.distance / 1000).toFixed(2)} km</span>
                {activity.has_heartrate && (
                  <span className="text-[#FC6100] font-semibold">
                    Avg HR: {activity.average_heartrate} bpm
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  );
}
