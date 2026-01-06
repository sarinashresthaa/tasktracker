import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { TodoApi } from "../services/todo"

//custom hooks for getAll todo
export const useGetAllTodoApi = () =>{
    return useQuery({
        queryKey: ["todo"],
        queryFn: TodoApi.getAllTodo
    })
}

//custom hook for getbyid
export const useGetTodoById = (id:string|number) => {
    return useQuery({
        queryKey:["todo",id],
        queryFn:()=> TodoApi.getTodoById(id)
    })
}

//custom hook for create
export const useCreateTodo = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:TodoApi.createTodo,
        onSuccess:()=>{
            //invalidatequeries update in cache
            queryClient.invalidateQueries({queryKey:["todo"]});
        }
    })
}