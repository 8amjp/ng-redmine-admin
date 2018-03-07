// Get Projects
export interface ProjectsResponse {
  projects: ProjectResponse[];
  total_count: number;
  offset: number;
  limit: number;
}
// Get Project
export interface ProjectResponse {
  id: number;
  name: string;
  identifier: string;
  description: string;
  homepage?: string;
  parent?: IdNameObject;
  status: number;
  is_public: number;
  trackers?: IdNameObject[];
  issue_categories?: IdNameObject[];
  enabled_modules?: IdNameObject[];
  created_on: string;
  updated_on: string;
}

// Objects
export interface IdNameObject {
  id: number;
  name: string;
}
