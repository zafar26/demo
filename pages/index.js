import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        {/* <link rel="icon" href="/favicon.ico" /> */}

        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>DEMO </title>

        <link rel="manifest" href="/manifest.json" />
        <link href='/android-launchericon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/android-launchericon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/android-launchericon-192-192.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <main className={styles.main}>
        MAIN
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}