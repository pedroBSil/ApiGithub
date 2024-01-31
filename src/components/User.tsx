import { UserProps } from "../types/user";

import { Link } from "react-router-dom";

import classes from "./User.module.css";

const User = ({
  login,
  avatar_url,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      
      <div className={classes.stats}>
      </div>
      <Link to={`/repos/${login}`}>Ver projetos</Link>
    </div>
  );
};

export default User;
