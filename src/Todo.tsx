import { TodoType } from "./types/todo";

// using Omit or Pick
export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
