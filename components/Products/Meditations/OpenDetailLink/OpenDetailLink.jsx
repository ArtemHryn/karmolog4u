"use client";

import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Youtube from "react-youtube";
import { open_Sans, unbounded } from "@app/layout";
import Logo from "@components/Common/Icons/Logo";

import styles from "./OpenDetailLink.module.scss";

const OpenDetailLink = ({ card }) => {
  const { video, isWaiting, name, img, cardName, id } = card;

  const pathname = usePathname();
  const params = useParams();

  const getCardName = () => {
    if (!cardName) return;
    const classNameToAdd = `${open_Sans.className}`;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cardName;

    const spanElement = tempDiv.querySelector("span");
    spanElement.classList.add(classNameToAdd);
    return tempDiv.innerHTML;
  };

  return (
    <>
      {" "}
      {isWaiting || cardName ? (
        <div className={styles.waiting_card}>
          {cardName ? (
            <p
              dangerouslySetInnerHTML={{ __html: getCardName() }}
              className={`${styles.card_name} ${unbounded.className}`}
            />
          ) : (
            <Logo styled={styles.card_logo} />
          )}
        </div>
      ) : video ? (
        <Youtube videoId={video} iframeClassName={styles.video} />
      ) : (
        <Link
          href={
            params.id
              ? `${pathname.replace(`${params.id}`, `${id}`)}`
              : `${pathname}/${id}`
          }
          className={styles.link_to_details}
        >
          <Image src={img} alt={name} width={356} height={223} />
        </Link>
      )}
    </>
  );
};

export default OpenDetailLink;
