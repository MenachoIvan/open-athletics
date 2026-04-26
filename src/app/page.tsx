import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getAthleteActivities } from '@/lib/strava';
import Hero from '@/components/layout/Hero';
import LogoutButton from '@/components/auth/LogOutButton';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Hero />;
  }

  const activities = await getAthleteActivities(session.accessToken as string);

  return (
    <main className="p-10 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Your Dashboard 📊</h1>
        <LogoutButton />
      </div>

      <div className="grid gap-6">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="font-bold text-xl mb-2">{activity.name}</h2>
              <div className="flex gap-4 text-gray-600">
                <span>Dist: {(activity.distance / 1000).toFixed(2)} km</span>
                {activity.has_heartrate && (
                  <span className="text-red-500 font-medium">
                    Avg HR: {activity.average_heartrate} bpm
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-20 text-gray-500">No recent activities found.</p>
        )}
      </div>
    </main>
  );
}
