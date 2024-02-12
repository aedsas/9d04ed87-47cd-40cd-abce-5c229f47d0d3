export interface ITask {
  id?: number;
  title: string;
  description?: string;
  done: boolean;
  user_id?: number;
}

export interface ICreateTask {
  title: string;
  description?: string;
  done: boolean;
}

export interface IFormErrors {
  // This tells TypeScript that formErrors can have string keys with string values
  [key: string]: string;
}
