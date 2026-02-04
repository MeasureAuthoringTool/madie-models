export interface UserDetails {
  harpId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export enum UserStatus {
  ACTIVE,
  DEACTIVATED,
  ERROR_SUSPENDED
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
