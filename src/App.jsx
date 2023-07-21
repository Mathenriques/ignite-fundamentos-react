import { Post } from './components/Post'
import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post/>
          <Post/>
          <Post/>
        </main>
      </div>
    </>
  )
}
