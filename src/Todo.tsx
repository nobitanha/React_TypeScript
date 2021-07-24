export const Todo = (props) => {
  const { title, userID } = props;
  return <p>{`${title}(ユーザー:${userID})`}</p>;
};
