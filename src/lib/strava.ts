export async function getAthleteActivities(accessToken: string) {
  const currentYear = new Date().getFullYear();
  const after = Math.floor(new Date(currentYear, 0, 1).getTime() / 1000);

  const response = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=200`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch activities from Strava');
  }

  return response.json();
}
export async function getYearlyActivities(accessToken: string) {
  const currentYear = new Date().getFullYear();
  const after = Math.floor(new Date(currentYear, 0, 1).getTime() / 1000);

  const response = await fetch(
    `https://www.strava.com/api/v3/athlete/activities?after=${after}&per_page=200`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch activities from Strava');
  }

  return response.json();
}
