import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/route';
import { getAthleteActivities } from '@/lib/strava';
import Hero from '@/components/layout/Hero';
import Mission from '@/components/layout/Mission';
import LogoutButton from '@/components/auth/LogOutButton';
import StatsGrid from '@/components/dashboard/StatsGrid';
import { StravaActivity } from '@/types/strava';

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

  const activities: StravaActivity[] = await getAthleteActivities(session.accessToken as string);

  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FC6100] rounded-lg" />
            <h1 className="text-xl font-black tracking-tighter uppercase">
              Open<span className="text-[#FC6100]">Athletics</span>
            </h1>
          </div>
          <LogoutButton />
        </nav>

        <header className="mb-12">
          <h2 className="text-7xl font-black tracking-tighter leading-[0.9] text-gray-900 uppercase">
            Your <br />
            <span className="text-[#FC6100]">Activity</span>
          </h2>
        </header>

        <section className="mb-16">
          <StatsGrid activities={activities} />
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-black tracking-[0.3em] uppercase text-gray-400">
              Recent Sessions
            </h3>
            <div className="h-[1px] flex-grow mx-8 bg-gray-100" />
          </div>

          <div className="grid gap-3">
            {activities.length > 0 ? (
              activities.slice(0, 5).map((activity: StravaActivity) => (
                <div
                  key={activity.id}
                  className="group bg-gray-50 border border-transparent p-6 rounded-[1.5rem] hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/40 transition-all flex justify-between items-center"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FC6100]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 group-hover:text-[#FC6100] transition-colors tracking-tight">
                        {activity.name}
                      </h4>
                      <div className="flex gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                        <span className="text-gray-900">
                          {(activity.distance / 1000).toFixed(2)} KM
                        </span>
                        <span>{activity.type}</span>
                        {activity.has_heartrate && activity.average_heartrate && (
                          <span className="text-red-500 italic">
                            {Math.round(activity.average_heartrate)} BPM
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-xs font-bold text-gray-300">
                    {new Date(activity.start_date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                    })}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-20 text-gray-300 uppercase font-bold tracking-widest">
                No sessions found
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
