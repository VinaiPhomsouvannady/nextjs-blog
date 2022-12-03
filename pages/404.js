// pages/404.js
import { useState } from 'react';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';




export default function Custom404() {
    return <body><h1 className={utilStyles.heading2Xl}>Nice to meet you!</h1>
    <h1 className={utilStyles.heading2Xl}>404!!!!</h1>
            <div className={utilStyles.heading2Xl}>
        <Link href="/game"> Want to play a game?</Link>
        </div>
    </body>
    ;
  }

  


  