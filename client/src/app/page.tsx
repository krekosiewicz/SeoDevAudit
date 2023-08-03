import styles from './page.module.css'
import ToolConfigComponent from 'src/app/toolConfig/toolConfig.component';
import CounterPage from 'src/app/counter/page';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ToolConfigComponent></ToolConfigComponent>
        <CounterPage></CounterPage>
      </div>
    </main>
  )
}
