export class Issues {
  issues: Issue[];
  total_count: number;
  offset: number;
  limit: number;
}
export class Issue {
  id: number;
  project: FieldObject;
  tracker: FieldObject;
  status: FieldObject;
  priority: FieldObject;
  author: FieldObject;
  assigned_to: FieldObject;
  subject: string;
  description: string;
  due_date: string;
  done_ratio: number;
  custom_fields: CustomFieldObject[];
  created_on: string;
  updated_on: string;
}
export class FieldObject {
  id: number;
  name: string;
}
export class CustomFieldObject {
  id: number;
  name: string;
  value: string;
}
