import axios from "axios";
import { endpoints } from "../constants/endpoints";
import type { ITask, ITaskPayload } from "../types/todo.types";

export const TodoApi = {
  //get all
  getAllTodo: async () => {
    return await axios.get<ITask[]>(endpoints.getAll);
  },

  //get by id
  getTodoById: async (id: string | number) => {
    return await axios.get<ITask>(endpoints.getById(id));
  },

  //create
  createTodo: async (data: ITaskPayload) => {
    return await axios.post<ITask>(endpoints.create, data); //update needs data
  },

  //update
  updateTodo: async (id: string | number, data: Partial<ITaskPayload>) => {
    return await axios.patch<ITask>(endpoints.update(id), data);
  },

  //delete
  deleteTodo: async (id: string | number) => {
    return await axios.delete(endpoints.delete(id));
  },
};
