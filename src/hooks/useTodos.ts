import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TodoApi } from "../services/todo";
import type { ITaskPayload } from "@/types/todo.types";

//custom hooks for getAll todo
export const useGetAllTodoApi = () => {
  return useQuery({
    queryKey: ["todo"],
    queryFn: TodoApi.getAllTodo,
  });
};

//custom hook for getbyid
export const useGetTodoById = (id: string | number) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: () => TodoApi.getTodoById(id),
    select: (res) => res.data,
  });
};

//custom hook for create
export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: TodoApi.createTodo,
    onSuccess: () => {
      //invalidatequeries update in cache
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });
};

//custom hook for update
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string | number; data: Partial<ITaskPayload> }) =>
      TodoApi.updateTodo(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
      queryClient.invalidateQueries({ queryKey: ["todo", variables.id] });
    },
  });
};
//delete
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: TodoApi.deleteTodo,
    onSuccess: (_, id) => {
      //invalidate all data
      queryClient.invalidateQueries({ queryKey: ["todo"] });

      //invalidate specific data by id
      queryClient.invalidateQueries({ queryKey: ["todo", id] });
    },
  });
};
