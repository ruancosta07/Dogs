import React from "react";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();


  React.useEffect(() => {
    setTitle();
    const urls = {
      "/conta": "Minha conta",
      "/conta/postar": "Poste uma foto",
      "/conta/estatisticas": "Estatisticas",
    };
  
    function mudaTitulo(path) {
      return urls[path]
    }
  
    setTitle(mudaTitulo(location.pathname));
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
