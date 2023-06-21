import * as React from "react";
import { Link } from "react-router-dom";

type Props = {
  className: string;
  text: string;
  to: string;
  rel?: string;
  prefix?: object;
  suffix?: object;
};

const LinkTo: React.FC<Props> = (props) => {
  const { className, prefix, text, to, suffix, rel } = props;
  return (
    <Link to={to} className={className} rel={rel}>
      <>
        {prefix}
        {text}
        {suffix}
      </>
    </Link>
  );
};
export default LinkTo;
