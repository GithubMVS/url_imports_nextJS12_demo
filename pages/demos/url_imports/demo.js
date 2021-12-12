import confetti from 'https://cdn.skypack.dev/canvas-confetti'
import roll from 'https://cdn.skypack.dev/roll';
import tinyTimer from 'https://cdn.skypack.dev/tiny-timer';
import Link from 'next/link'
import styles from '../url_imports/demo.module.css'
import { useState } from 'react'
import Image from 'next/image'

// framer 
import Framer from "https://framer.com/m/Test-gXlx.js@2KpFwcsskFbCiEMKPDm5"

// image imports
import confetti_image from '../../../public/demos/url_imports/confetti.svg'
import goBack from '../../../public/arrow_goBack.svg'

const Demo = () => {

  const throwConfetti = () => {
    confetti()
  }

  const [diceRolled, setDiceRolled] = useState(0)
  const rollDiceFunction = () => {
    const rollDice = new roll();
    const oneDie = rollDice.roll('d6');
    setDiceRolled(oneDie.result)
  }

  const [countDownTikker, setCountDownTikker] = useState(0)
  const countDown = () => {
    const timer = new tinyTimer()
    timer.on('tick', (ms) => setCountDownTikker(ms / 1000))

    timer.start(10000) // run for 5 seconds
    console.log(countDownTikker.round)
  }

  return (
    <div className={styles.url_importDemo}>
      <div className={styles.goBack__full}>
        <Image src={goBack} alt='goBack' />
        <Link href="/allDemos"><a className={styles.links_learnMore}>See other demos</a></Link>
      </div>

      <section className={styles.url_importDemo_all}>
        <h1 className={styles.url_importDemo_all_title}>Url imports demo</h1>
        <div className={styles.url_importDemo_full}>
          <div className={styles.url_importDemo_imageOrNumber_full}>
            <Image src={confetti_image} alt='confetti' />
          </div>
          <div className={styles.url_importDemo_explenation}>
            <h1 className={styles.url_importDemo_explenation_title}>Confetti party</h1>
            <p className={styles.url_importDemo_explenation_text}>Fan of confetti?We are too, press the button to generate confetti.</p>
          </div>
          <button className={styles.url_importDemo_button} onClick={throwConfetti}>  Throw Confetti </button>
        </div>

        <div className={styles.url_importDemo_full}>
          <div className={styles.url_importDemo_imageOrNumber_full}>
            <p className={styles.url_importDemo_full_text}>{diceRolled}</p>
          </div>
          <div className={styles.url_importDemo_explenation}>
            <h1 className={styles.url_importDemo_explenation_title}>Roll a dice</h1>
            <p className={styles.url_importDemo_explenation_text}>Press the button and make a number appear between 1 and 6.</p>
          </div>
          <button className={styles.url_importDemo_button} onClick={rollDiceFunction}> roll a dice </button>
        </div>

        <div className={styles.url_importDemo_full}>
          <div className={styles.url_importDemo_imageOrNumber_full}>
            <p className={styles.url_importDemo_full_text}>{Math.ceil(countDownTikker)}</p>
          </div>
          <div className={styles.url_importDemo_explenation}>
            <h1 className={styles.url_importDemo_explenation_title}>Countdown</h1>
            <p className={styles.url_importDemo_explenation_text}>3, 2,1 Go... this is a countdown that counts down from 10 to 0.</p>
          </div>
          <button className={styles.url_importDemo_button} onClick={countDown}> countdown 10 seconds </button>
        </div>

        <Framer variant="Variant 1" />
      </section>

    </div>
  )
}

export default Demo
