export interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  type: string;
  start_date: string;
  average_heartrate?: number;
  max_heartrate?: number;
  average_speed: number;
  has_heartrate: boolean;
}
