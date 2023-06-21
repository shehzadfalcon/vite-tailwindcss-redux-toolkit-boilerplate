import * as React from "react";

type Props = {
  className: string;
  text: string;
  prefix?: any;
  suffix?: any;
  type?: any;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Buttonlink: React.FC<Props> = (props) => {
  const { className, prefix, text, onClick, suffix, disabled, type } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}>
      {prefix}
      {text}
      {suffix}
    </button>
  );
};

export default Buttonlink;
