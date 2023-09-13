"use client";
import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

import styles from "./Modal.module.scss";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [onKeyDown]);

  return (
    <div ref={overlay} className={styles.overlay} onClick={onClick}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
