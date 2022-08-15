import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Saymon Damásio"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores ad molestias laborum provident ab quibusdam soluta, iusto commodi excepturi quasi illo quos voluptates nisi voluptatum facilis suscipit, deleniti cumque!"
          />

          <Post
            author="Saymon Damásio"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores ad molestias laborum provident ab quibusdam soluta, iusto commodi excepturi quasi illo quos voluptates nisi voluptatum facilis suscipit, deleniti cumque!"
          />
        </main>
      </div>
    </>
  );
}

export default App;
