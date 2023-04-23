export type Cookie = {
  id: number;
  name: string;
  value: string;
  domain: string;
  path: string;
  expirationDate?: number;
  sameSite: string;
  hostOnly: boolean;
  httpOnly: boolean;
  secure: boolean;
  session: boolean;
};