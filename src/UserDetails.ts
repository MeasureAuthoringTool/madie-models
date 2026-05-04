export interface UserDetails {
  id?: string;
  harpId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  userStatus?: UserStatus;
  roles?: HarpRole[];
  lastLoginAt?: string;
}

export enum UserStatus {
  ACTIVE,
  DEACTIVATED,
  ERROR_SUSPENDED,
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

export interface UserLogin {
  harpId?: string;
  roles?: Array<{ role: string }>;
}
