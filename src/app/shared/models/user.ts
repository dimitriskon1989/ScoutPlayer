export interface User {
  id: number;
  email: string;
  firebase_uid: string;
  created_at: Date;
  updated_at: Date;
  verified: boolean;
  type: UserType
}

export enum UserType {
  PLAYER_USER = 'player',
  COACH_USER = 'coach',
  AGENT_USER = 'agent',
}
