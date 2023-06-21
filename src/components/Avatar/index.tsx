import { avatar } from "common/Images";

const Avatar = (props) => {
  return <img alt={"avatar"} src={avatar} {...props} />;
};

export default Avatar;
