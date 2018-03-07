// Get Users
export interface UsersResponse {
  Users: UserResponse[];
  total_count: number;
  offset: number;
  limit: number;
}
// Get User
export interface UserResponse {
  id: number;
  login: string;
  firstname: string;
  lastname: string;
  mail: string;
  created_on: string;
  last_login_on: string;
  api_key: string;
  status: number;
  custom_fields?: CustomFieldObject[];

  memberships?: MembershipObject[];
  groups?: IdNameObject[];
}

// Objects
export interface CustomFieldObject {
  id: number;
  name: string;
  value: string;
}
export interface MembershipObject {
  project: IdNameObject;
  roles: IdNameObject[];
}

export interface IdNameObject {
  id: number;
  name: string;
}
