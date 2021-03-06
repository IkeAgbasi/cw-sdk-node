export interface RESTAllowance {
  cost: number;
  remaining: number;
  upgrade: string;
}

export interface RESTResponse<T> {
  result: T;
  allowance: RESTAllowance;
}

export interface RESTErrorBody {
  error: string;
  allowance: RESTAllowance;
}

export interface RESTOpts {
  creds: { apiKey: string; url?: string };
}
