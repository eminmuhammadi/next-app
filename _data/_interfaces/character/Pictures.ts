export interface Pictures {
  readonly pictures: Picture[];
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
}

export interface Picture {
  readonly large: string;
  readonly small: string;
}
