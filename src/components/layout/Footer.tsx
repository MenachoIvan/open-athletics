import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/50 bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-900 font-bold text-lg">OpenAthletics</p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} - Built for athletes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src="https://developers.strava.com/images/api_logo_pwrdBy_strava_horiz_light.png"
            alt="Powered by Strava"
            width={160}
            height={32}
            className="h-8 w-auto"
            style={{ width: 'auto' }}
          />
        </div>
      </div>
    </footer>
  );
}
