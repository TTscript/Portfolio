'use client'

import classes from './Page.module.scss';
import {Footer, Header, ContactInfo, MainInfo} from "@/components";
export default function Home() {
  return (
      <div className='container'>
          <Header />
        <main className={classes.main}>
            <ContactInfo />
            <MainInfo />
        </main>
        {/*<Footer />*/}
      </div>
  );
}
