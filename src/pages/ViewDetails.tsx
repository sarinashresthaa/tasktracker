import { Spinner } from "@/components/ui/spinner";
import { useGetTodoById } from "@/hooks/useTodos";
import { formatDate } from "@/utils/formatDate";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, CheckCircle, Clock } from "lucide-react";

const ViewDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetTodoById(id ?? "");
  const navigate = useNavigate();
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner className="size-8 text-green-500" />
      </div>
    );
  return (
    <div className="min-h-screen py-4 px-2 ">
      <div className="lg:p-2 max-w-3xl mx-auto">
        <button
          className="text-gray-700 flex gap-4 justify-center items-center cursor-pointer p-2 lg:p-4 mb-4 "
          onClick={() => navigate("/")}
        >
          <FaArrowLeft size={16} /> <span>Back to list</span>
        </button>

        <div className="border rounded-xl shadow-sm bg-white overflow-hidden">
          <div className="border-b-2 bg-emerald-50 p-4">
            <h1 className="capitalize text-2xl lg:text-3xl text-emerald-700 font-bold leading-tight">
              {data?.title}
            </h1>
          </div>

          <div className="gap-6 text-gray-700 p-4 flex items-center">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
            <div className="grid">
              <span className="font-semibold text-gray-800 lg:text-lg ">
                Created
              </span>
              <span> {data?.createdAt && formatDate(data?.createdAt)}</span>
            </div>
          </div>

          <div className="gap-6 text-gray-700 p-4 flex items-center">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <div className="grid">
              <span className="font-semibold text-gray-800 lg:text-lg ">
                Due date
              </span>
              <span>{data?.dueDate && formatDate(data?.dueDate)}</span>
            </div>
          </div>

          <div className="gap-6 text-gray-700 p-4 flex items-center">
            <div className="p-2 bg-gray-100 rounded-lg">
              <CheckCircle className="w-5 h-5 text-gray-600" />
            </div>
            <div className="grid">
              <span className="font-semibold text-gray-800 lg:text-lg">
                Status
              </span>
              <span> {data?.status}</span>
            </div>
          </div>

          <div className="pt-6 px-6 text-gray-700 mb-2">
            <p className="font-semibold text-gray-800 lg:text-lg">
              Description
            </p>
            <p className="text-sm lg:text-base">
              Hey! You need to {data?.title} till {data?.dueDate} and your
              status is {data?.status}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
