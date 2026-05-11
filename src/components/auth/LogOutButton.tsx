'use client';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-[#FC6100] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e55a00] transition-colors"
    >
      Log out
    </button>
  );
}
