export interface SeasonArchive {
  readonly archive: Archive[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

export interface Archive {
  readonly year: number;
  readonly seasons: Season[];
}

export enum Season {
  Fall = 'Fall',
  Spring = 'Spring',
  Summer = 'Summer',
  Winter = 'Winter'
}
