import { StravaActivity } from '@/types/strava';

export async function getAthleteActivities(accessToken: string): Promise<StravaActivity[]> {
  try {
    const response = await fetch('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching activities');
    }

    const data = await response.json();
    return data as StravaActivity[];
  } catch (error) {
    console.error('Strava API Error:', error);
    return [];
  }
}
