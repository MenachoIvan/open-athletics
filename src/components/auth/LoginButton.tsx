'use client';
import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn('strava')}
      className="bg-[#FC6100] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e55a00] transition-colors"
    >
      Connect with Strava
    </button>
  );
}
