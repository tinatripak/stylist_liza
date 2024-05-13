import React from "react";
import Spinner from "../Spinner/Spinner";

interface ConditionalRenderProps {
  conditions: boolean[];
  content: React.ReactNode;
}

const ConditionalRender: React.FC<ConditionalRenderProps> = ({
  conditions,
  content,
}) => {
  const shouldRender = conditions.every((condition) => condition);

  return shouldRender ? <>{content}</> : <Spinner />;
};

export default ConditionalRender;
