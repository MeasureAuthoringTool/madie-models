export interface UserDetails {
  id?: string;
  harpId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  status?: UserStatus;
  roles?: HarpRole[];
  lastLoginAt?: string;
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
  ERROR_SUSPENDED = "ERROR_SUSPENDED",
}

export interface HarpRole {
  roleType?: string;
  role?: string;
}

export interface UserLogin {
  harpId?: string;
  status?: UserStatus;
  roles: HarpRole[];
}
