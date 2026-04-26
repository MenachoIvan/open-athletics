'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">OpenAthletics 🏃‍♂️</h1>

      {session ? (
        <div className="text-center">
          <p className="mb-4">Welcome, {session.user?.name}</p>
          <button 
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Log out
          </button>
        </div>
      ) : (
        <button 
          onClick={() => signIn('strava')}
          className="bg-[#FC6100] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e55a00] transition-colors"
        >
          Connect with Strava
        </button>
      )}
    </main>
  );
}