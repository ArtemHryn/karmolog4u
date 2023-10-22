"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import OpenDetailsLink from "@components/Products/Gifts/OpenDetailsLink";
import BagIcon from "@components/Products/Gifts/BagIcon";

import styles from "./ProductionCanBeInterestingSlider.module.scss";
import "swiper/css";

const GiftCanBeInteresting = ({ slides }) => {
  if (slides.length === 0) return null;

  return (
    <Swiper
      className={styles.swiper}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {slides.map((el, index) => (
        <SwiperSlide key={index}>
          <div className={styles.list_item}>
            <OpenDetailsLink
              img={el.img}
              discount={el.discount}
              name={el.name}
              id={el.id}
            />
            <div className={styles.bottom_wrapper}>
              <div className={styles.text_wrapper}>
                <p className={styles.title}>{el.name}</p>
                {el.remark && <p className={styles.remark}>{el.remark}</p>}
                {el.price && (
                  <p className={styles.price}>
                    {el.discount
                      ? `${el.price * ((100 - el.discount) / 100)}€`
                      : `${el.price}€`}
                    {el.discount && <span>{el.price}€</span>}
                  </p>
                )}
              </div>
              {el.price && (
                <Link
                  className={styles.button}
                  aria-label="замовити медитацію"
                  href={`/products/buy-product?${
                    el.price ? `price=${el.price}€` : ""
                  }&name=${el.name}`}
                >
                  <BagIcon />
                </Link>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GiftCanBeInteresting;
