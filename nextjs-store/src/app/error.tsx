"use client";
import Image from "next/image";
import styles from 'app/sass/global-error.module.sass';
import { RefreshCcw } from "lucide-react"; // si usas lucide-react


export default function GlobalError({reset}: ErrorPageProps){
    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Error</h1>
            <Image src={'/images/error.png'} width={500} height={500} alt='Error'/>
            <p className={styles.Error__message}>Oops! Something went wrong</p>
            <button onClick={reset} className={styles.Error__button}>      
                <RefreshCcw size={18} /> Try Again
            </button>
        </main>
    )
}