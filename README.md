# OpenAthletics

**OpenAthletics** is an open-source advanced analytics engine for runners. Built by developers for performance-driven athletes, it bridges the gap between raw GPS data and physiological insights.

## The Mission

While most platforms focus on social features and basic summaries, OpenAthletics processes second-by-second **Data Streams** (HR, Pace, Cadence, Grade) to calculate metrics typically hidden behind paywalls or complex coaching software.

## Tech Stack

-**Framework:** Next.js 15 (App router) -**Languaje:** Typescript -**Auth:** Strava OAuth 2.0 (NextAuth.js) -**Data Visualization:** Recharts / D3.js -**Math & Stats:** simple-statistics

## Planned Features (Roadmap)

-**Aerobic Decoupling (Pa:HR):** Analyze cardiac drift by comparing efficiency factor (EF) between the first and second half of steady-state runs. -**Grade-Adjusted Analysis:** Correlation betwene slope, vertical oscillation (if available), and cadence. -**Pace Variability Index:** Measuring the stability of efforts during interval training. -**Data Integrity Check:** Automated sensor of anomalies (GPS drift of HR spikes).

## Development setup

1. **Clone the repository:**

```bash
git clone [https://github.com/MenachoIvan/open-athletics.git] (https://github.com/MenachoIvan/open-athletics.git)
cd open-athletics
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Enviornment Variables:**
   Create a `.env.local` file with your Stava API credentials:

```bash
STRAVA_CLIENT_ID=your_id
STRAVA_CLIENT_SECRET=your_secret
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000
```

4. **Run the development server:**

```bash
npm run dev
```

_Developed by engineers who run_
