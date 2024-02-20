import { createContext, useCallback, useMemo, useState } from "react";
import uuid from "react-native-uuid";

import { TaskType } from "../types/task-type";
import { Alert } from "react-native";

export interface TaskContextData {
  taskText: string;
  taskList: TaskType[];
  handleChangeTaskText: (text: string) => void;
  handleAddTask: () => void;
  handleRemoveTask: (id: string) => void;
  handleChangeTaskStatus: (id: string) => void;
}

export const TaskContext = createContext<TaskContextData>(
  {} as TaskContextData
);

interface TaskContextProvider {
  children: React.ReactNode;
}

export function TaskContextProvider({
  children,
  ...props
}: TaskContextProvider) {
  const [taskText, setTaskText] = useState("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const handleChangeTaskText = (text: string) => {
    setTaskText(text);
  };

  const handleAddTask = useCallback(() => {
    const task: TaskType = {
      id: uuid.v4() as string,
      text: taskText,
      isCompleted: false,
    };
    setTaskList((oldState) => [...oldState, task]);
    setTaskText("");
  }, [taskText]);

  const handleRemoveTask = (id: string) => {
    Alert.alert("Remover tarefa", "Tem certeza que quer remover esta tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          setTaskList((oldState) => oldState.filter((task) => task.id !== id));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const handleChangeTaskStatus = useCallback(
    (id: string) => {
      const newTask = taskList.find((task) => task.id === id);
      if (newTask) {
        setTaskList((oldState) => [
          ...oldState.filter((task) => task.id !== id),
          {
            ...newTask,
            isCompleted: !newTask.isCompleted,
          },
        ]);
      }
    },
    [taskList]
  );

  const memorizeReturn = useMemo(
    () => ({
      taskText,
      taskList,
      handleAddTask,
      handleRemoveTask,
      handleChangeTaskText,
      handleChangeTaskStatus,
    }),
    [taskText, taskList, handleAddTask]
  );

  return (
    <TaskContext.Provider value={memorizeReturn} {...props}>
      {children}
    </TaskContext.Provider>
  );
}