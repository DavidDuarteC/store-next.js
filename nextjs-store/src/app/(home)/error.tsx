"use client";
import { useEffect } from "react";
import styles from './error.module.sass';


interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
    useEffect(() => {
        console.log(error)
    }, [])

    return(
        <div className={styles.error} style={{padding: "10rem",}}>
            <h1>:c</h1>
            <p>Oops! Something went wrong</p>
            <button onClick={reset}>Retry</button>
        </div>
    )
}