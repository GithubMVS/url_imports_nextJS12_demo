import Head from 'next/head'
import Image from 'next/image'
import styles from '../pages/index.module.css'
import Link from 'next/link'

//image imports
import checkMark from '../public/homePage/checkMark.svg'

// images imports
import url_imports from '../public/homePage/url_imports.png'

export default function Home() {
  return (
    <div className={styles.homepage__full}>
      <section className={styles.whatsNew_single}>
        <h1 className={styles.displayNone}>Url-imports</h1>
        <div className={styles.whatsNew__single_image}>
          <Image src={url_imports} alt="url_imports" />
        </div>
        <div className={styles.whatsNew_single_explenationFull}>
          <h1 className={styles.WhatsNew_title}>Url-imports/ES modules</h1>
          <p className={styles.WhatsNew_explenation}>Next.js 12 includes experimental support for importing ES Modules through URLs, no install or separate build step is required. URL imports allow you to use any package directly through a URL. This enables Next.js to process remote HTTP(S) resources exactly like local dependencies.</p>
          <ul className={styles.benefits}>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Import modules from external servers</li>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>No more importing from the local disk</li>
            <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>It’s Native</li>
          </ul>
          <div className={styles.links}>
            <Link href="/demos/url_imports/demo"><a className={styles.links_demo}>View demo</a></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
