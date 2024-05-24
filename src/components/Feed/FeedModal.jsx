import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET_ONE } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photos/PhotoContent";
const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET_ONE(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(e){
    if(e.target === e.currentTarget){
      setModalPhoto(null)
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
