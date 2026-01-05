import axios from "axios";
import { useEffect, useState } from "react";

const To = () => {
  interface ITask {
    createdAt: string;
    title: string;
    dueDate: string;
    status: string;
    id: string;
  }

  const [task, setTask] = useState<ITask[]>([]);

  const Api = async () => {
    try {
      const res = await axios.get<ITask[]>(
        "https://694f5cef8531714d9bcdf70b.mockapi.io/api/v1/tasks"
      );
      setTask(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    Api();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 m-8">
      {task.map((item) => (
        <div className="border">        
          <div>{item.id}</div>
          <div>{item.title} </div>
          <div>{item.createdAt} </div>
          <div>{item.dueDate} </div>
          <div>{item.status} </div>
        </div>
      ))}
    </div>
  );
};

export default To;
