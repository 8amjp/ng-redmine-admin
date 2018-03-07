// Get Issues
export interface IssuesResponse {
  issues: IssueResponse[];
  total_count: number;
  offset: number;
  limit: number;
}
// Get Issues
export interface IssueResponse {
  id: number;
  project: IdNameObject;
  tracker: IdNameObject;
  status: IdNameObject;
  priority: IdNameObject;
  author: IdNameObject;
  assigned_to?: IdNameObject;
  category?: IdNameObject;
  fixed_version?: IdNameObject;
  parent?: IdObject;
  subject: string;
  description?: string;
  start_date?: string;
  due_date?: string;
  done_ratio?: number;
  is_private: number;
  estimated_hours?: number;
  total_estimated_hours?: number;
  spent_hours?: number;
  total_spent_hours?: number;
  custom_fields?: CustomFieldObject[];
  created_on: string;
  updated_on?: string;
  closed_on?: string;

  children?: IssueResponse[];
  attachments?: AttachmentObject[];
  relations?: RelationObject[];
  journals?: JournalObject[];
  watchers?: IdNameObject[];
}

// POST/PUT Issue
export interface IssueParameters {
  project_id: number;
  tracker_id: number;
  status_id: number;
  priority_id: number;
  assigned_to_id?: number;
  category_id?: number;
  fixed_version_id?: number;
  parent_issue_id?: number;
  subject: string;
  description?: string;
  start_date?: string;
  due_date?: string;
  done_ratio?: number;
  is_private?: number;
  estimated_hours?: number;
  spent_hours?: number;
  custom_fields?: CustomFieldObject[];
  watcher_user_ids?: number[];
  notes?: string;
  private_notes?: string;
}

// Objects
export interface CustomFieldObject {
  id: number;
  name: string;
  value: string;
}
export interface AttachmentObject {
  id: number;
  filename: string;
  filesize: number;
  content_type: string;
  description: string;
  content_url: string;
  author: IdNameObject;
  created_on: string;
}
export interface RelationObject {
  id: number;
  issue_id: number;
  issue_to_id: number;
  relation_type: string;
  delay: number;
}
export interface JournalObject {
  id: number;
  user: IdNameObject;
  notes: string;
  created_on: string;
  details: DetailObject[];
}
export interface DetailObject {
  property: string;
  name: string;
  old_value: number;
  new_value: number;
}

export interface IdObject {
  id: number;
}
export interface IdNameObject {
  id: number;
  name: string;
}
