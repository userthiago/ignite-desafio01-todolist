import { useContext } from "react";
import { TaskContext, TaskContextData } from "../context/task-context";

export function useTaskContext(): TaskContextData {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used within a TaskContext.");
  }

  return context;
}
