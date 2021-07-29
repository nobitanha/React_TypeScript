import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: FC<Props> = (props) => {
  const { color, fontSize, children } = props;
  return <p style={{ color, fontSize }}>テキストです。Children:{children}</p>;
};
