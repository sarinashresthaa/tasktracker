import axios from "axios";
import { endpoints } from "../constants/endpoints";
import type { ITask, ITaskPayload } from "../types/todo.types";

export const TodoApi = {
  //get all
  getAllTodo: () => {
    return axios.get<ITask[]>(endpoints.getAll);
  },

  //get by id
  getTodoById: (id: string | number) => {
    return axios.get<ITask>(endpoints.getById(id));
  },

  //create
  createTodo: (data: ITaskPayload) => {
    return axios.post<ITask>(endpoints.create, data);
  },
};
