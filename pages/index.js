import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

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
        VKPL
         <div style={{ display: 'flex', flexWrap: 'wrap' }}>

          <button key="login" onClick={e => router.push('/login')}> GO TO /login
          </button>

          <button key="clogin" onClick={e => router.push('/clogin')}> GO TO /clogin
          </button>

          <button key="slogin" onClick={e => router.push('/slogin')}> GO TO /slogin
          </button>
          {/* 
          <button key="corder" onClick={e => router.push('/clientOrder')}> GO TO /client1
          </button> */}

          <button key="cpage" onClick={e => router.push('/clientPage')}> GO TO /client Page
          </button>

          {/* <button key="spage1" onClick={e => router.push('/supplierPage')}> GO TO /Supplier1
          </button> */}

          <button key="spage2" onClick={e => router.push('/supplierPage2')}> GO TO /Supplier Page
          </button>

        </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
