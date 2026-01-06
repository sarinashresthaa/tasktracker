import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
// import { useGetAllTodoApi, useGetTodoById } from "../hooks/useTodos";
// import { formatDate } from "../utils/formatDate";

const TodoPage = () => {
  // const {data}=useGetAllTodoApi()
  // const{data:id} = useGetTodoById(5)
  return (
    <div>
      {/* {data?.data.map((item)=>(
    <div className="border">
        <h1>{item.id} </h1>
        <h1 className="text-purple-700">{item.title}</h1>
        <h1>{item.createdAt && formatDate( item.createdAt)} </h1>
        <h1>{formatDate(item.dueDate)} </h1>
        <h1 className="text-orange-600">{item.status} </h1>
    </div>
))} 

      <h1>{id?.data.title}</h1>
      <h1>{id?.data.status} </h1>
      <h1>{id?.data.createdAt}</h1> */}
      <TodoForm /> 
      <TodoList />
    </div>
  );
};

export default TodoPage;
