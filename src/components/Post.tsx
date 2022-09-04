import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, FormHTMLAttributes, InvalidEvent, useState } from 'react';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

interface ContentItem {
  content: string
  type: 'paragraph' | 'link'
}

interface Author {
  avatarUrl: string
  name: string
  role: string
}

interface Props {
  author: Author,
  content: ContentItem[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: Props) {
  const [comments, setComments] = useState<string[]>([])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.currentTarget.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsBeforeRemoval = comments.filter(comment => comment !== commentToDelete)

    setComments(commentsBeforeRemoval)
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.currentTarget.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') return <p key={line.content}>{line.content}</p>
          if (line.type === 'link') return <p key={line.content}><a href=''>{line.content}</a></p>
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea required onInvalid={handleNewCommentInvalid} onChange={handleNewCommentChange} value={newCommentText} placeholder="Deixe seu comentário" />
        <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={() => deleteComment(comment)} />)}
      </div>
    </article>
  );
}
