import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/saymondamasio.png',
      name: 'Saymon Damásio',
      role: 'Development @ Agency E-plus'
    },
    content: [
      {
        content: 'Fala galera 👋',
          type: 'paragraph'
      },
      {
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz',
          type: 'paragraph'
      },
      {
        content: '👉 jane.design/doctorcare',
        type: 'link'
      }
    ],
    publishedAt: new Date('2022-08-25 20:00:00')
  },
   {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/saymondamasio.png',
      name: 'Saymon Damásio',
      role: 'Development @ Agency E-plus'
    },
    content: [
      {
        content: 'Fala galera 👋',
          type: 'paragraph'
      },
      {
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz',
          type: 'paragraph'
      },
      {
        content: '👉 jane.design/doctorcare',
        type: 'link'
      }
    ],
    publishedAt: new Date('2022-08-27 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          }
      </main>
      </div>
    </>
  );
}

export default App;
