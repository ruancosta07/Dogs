import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from './PhotoComments.module.css'
const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null)

  React.useEffect(()=>{
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  },[comments])

  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((item) => (
          <li key={item.comment_ID}>
            <b>{item.comment_author}:</b>
            <span>{item.comment_content}</span>
          </li>
          
        ))}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id}  setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
