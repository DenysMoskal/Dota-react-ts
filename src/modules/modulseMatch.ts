export interface Match {
  id?: number;
  type?: string;
  timestamp?: Date;
  attempts?: number;
  data?: Data;
  next_attempt_time?: Date;
  priority?: number;
  jobId?: number;
}

export interface Data {
  match_id?: number;
  game_mode?: number;
  radiant_win?: boolean;
  start_time?: number;
  duration?: number;
  pgroup?: { [key: string]: Pgroup };
  doLogParse?: boolean;
  ability_upgrades?: any[];
}

export interface Pgroup {
  account_id?: number;
  hero_id?: number;
  player_slot?: number;
}
