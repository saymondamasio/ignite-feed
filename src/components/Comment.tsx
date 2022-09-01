import { ThumbsDown, ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface Props {
  content: string
  onDeleteComment: () => void
}

export function Comment({content, onDeleteComment}: Props) {

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/saymondamasio.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Saymon Damásio</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onMouseDown={onDeleteComment} title="Excluir Comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
