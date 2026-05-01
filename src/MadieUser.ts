export enum UserStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
}

export interface HarpRole {
  name?: string;
  description?: string;
}

export interface MadieUser {
  id: string;
  harpId: string;
  status: UserStatus;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  roles: HarpRole[];
  lastLoginAt: string;
  accessStartAt: string;
  createdAt: string;
  lastModifiedAt: string;
}
