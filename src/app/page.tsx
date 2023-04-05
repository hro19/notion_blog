import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h3 className="text-yellow-600 md:text-blue-600 text-2xl">ヘローワールド</h3>
      </div>
    </main>
  )
}
