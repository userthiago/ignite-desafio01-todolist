import { createContext, useCallback, useMemo, useState } from "react";
import uuid from "react-native-uuid";

import { TaskType } from "../types/task-type";
import { Alert, Keyboard } from "react-native";

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

  const cleanTaskText = () => {
    setTaskText("");
  };

  const handleAddTask = useCallback(() => {
    if (!taskText) {
      return;
    }

    const trimmedText = taskText.replace(/\s+/g, " ").trim();
    Keyboard.dismiss();

    const addTask = () => {
      const task: TaskType = {
        id: uuid.v4() as string,
        text: trimmedText,
        isCompleted: false,
      };
      setTaskList((oldState) => [...oldState, task]);
      cleanTaskText();
    };

    const isTaskRepeated = taskList.some(
      (task) => task.text.toLowerCase() === trimmedText.toLowerCase()
    );

    if (isTaskRepeated) {
      Alert.alert(
        "Tarefa repetida",
        `Já existe uma tarefa de "${trimmedText.toLowerCase()}" cadastrada.\nDeseja cadastrar novamente?`,
        [
          {
            text: "Sim",
            onPress: addTask,
          },
          {
            text: "Não",
            style: "cancel",
            onPress: cleanTaskText,
          },
        ]
      );
    } else {
      addTask();
    }
  }, [taskText]);

  const handleRemoveTask = (id: string) => {
    const taskData = taskList.find((task) => task.id === id);
    if (taskData) {
      Alert.alert(
        "Remover tarefa",
        `Tem certeza que deseja a tarefa "${taskData.text}" ?`,
        [
          {
            text: "Sim",
            onPress: () => {
              setTaskList((oldState) =>
                oldState.filter((task) => task.id !== id)
              );
            },
          },
          {
            text: "Não",
            style: "cancel",
          },
        ]
      );
    }
  };

  const handleChangeTaskStatus = useCallback(
    (id: string) => {
      const taskIndex = taskList.findIndex((task) => task.id === id);
      if (taskIndex >= 0) {
        const newTaskList = [...taskList];
        newTaskList[taskIndex].isCompleted =
          !newTaskList[taskIndex].isCompleted;

        setTaskList(newTaskList);
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
