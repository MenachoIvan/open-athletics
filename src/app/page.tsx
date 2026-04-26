import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getAthleteActivities } from '@/lib/strava';
import { StravaActivity } from '@/types/strava';
import LoginButton from '@/components/auth/LoginButton';
import LogoutButton from '@/components/auth/LogOutButton';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">Welcome to OpenAthletics 🏃‍♂️</h1>
        <p>Log in to see your activities</p>
        <LoginButton />
      </main>
    );
  }

  const activities: StravaActivity[] = await getAthleteActivities(session.accessToken as string);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Last activities 📊</h1>

      <div className="grid gap-4">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div key={activity.id} className="border p-4 rounded shadow-sm">
              <h2 className="font-semibold text-lg">{activity.name}</h2>
              <p className="text-gray-600">Distance: {(activity.distance / 1000).toFixed(2)} km</p>
              {activity.has_heartrate && (
                <p className="text-red-500">HR: {activity.average_heartrate} bpm</p>
              )}
            </div>
          ))
        ) : (
          <p>Not found recent activities</p>
        )}
      </div>
      <LogoutButton />
    </main>
  );
}
