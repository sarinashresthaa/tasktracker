export interface ITask {
  id: string;
  title: string;
  createdAt: string;
  dueDate: string;
  status: string;
}

export interface ITaskPayload {
  title: string;
  dueDate: string;
  status: string;
}
