"use client";
import { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/error.json"; // usa tu animación
import styles from "./error.module.sass";
import { RefreshCcw } from "lucide-react"; // si usas lucide-react

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Lottie animationData={animationData} loop autoplay className={styles.animation} />

      <h1 className={styles.title}>Oops! Something went wrong</h1>

      <button className={styles.button} onClick={reset}>
        <RefreshCcw size={18} /> Try Again
      </button>
    </div>
  );
}
