# OpenAthletics

OpenAthletics is an open-source performance dashboard designed for athletes who want a clean, fast, and high-contrast view of their training data. Built with **Next.js**, **Tailwind CSS**, and the **Strava API**.

The goal is to provide a "zero-bloat" alternative to heavy fitness apps, focusing on raw performance metrics and aerobic efficiency.

## Features

- **Fast Synchronization**: Direct integration with Strava API using Server Components.
- **Modern Dashboard**: High-impact UI inspired by technical sports gear.
- **Optimized Metrics**: Custom logic to calculate weekly, monthly, and yearly volume without heavy external libraries.
- **Privacy Focused**: Secure server-side token handling.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js 18+
- A Strava Developer Account (to get your Client ID and Secret)

### Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/MenachoIvan/open-athletics.git
   cd open-athletics
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Variables:**
   Create a `.env.local` file in the root and add:
   ```env
   STRAVA_CLIENT_ID=your_id
   STRAVA_CLIENT_SECRET=your_secret
   NEXTAUTH_SECRET=your_random_string
   NEXTAUTH_URL=http://localhost:3000
   ```
4. **Run development server:**
   ```bash
   npm run dev
   ```

## Roadmap

- [ ] Implement Heart Rate Zones analysis.
- [ ] Add Loading Skeletons for better UX.
- [ ] Create specialized views for Cycling vs Running.
- [ ] Exportable training reports (PDF/CSV).

## Contributing

We love contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License.
