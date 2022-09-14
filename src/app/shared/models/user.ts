export interface User {
  id: number;
  email: string;
  firebase_uid: string;
  created_at: Date;
  updated_at: Date;
  verified: boolean;
}
