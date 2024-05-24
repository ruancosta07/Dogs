import React from "react";
import Enviar from "../../Assets/enviar.svg?react";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import Error from "../Helper/Error";
import styles from './PhotoCommentsForm.module.css'
const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();
  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id,  {comment}  );
    const {response, json} = await request(url, options);
    if(response.ok){
        setComment('')
        setComments((comments)=> [...comments, json])
    }
  }
  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
      className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        name="comment"
        id="comment"
        placeholder="Comente..."
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error}/>
    </form>
  );
};

export default PhotoCommentsForm;
