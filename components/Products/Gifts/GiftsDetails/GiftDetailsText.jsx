import GiftDetailsTitle from "./GiftDetailsTitle";

import styles from "./GiftsDetails.module.scss";

const GiftDetailsText = ({ card }) => {
  const { desc } = card;
  return (
    <div>
      <GiftDetailsTitle card={card} />
      {desc?.text && (
        <div className={styles.text_wrapper}>
          {desc.text.map((el) => (
            <p key={el} className={styles.text}>
              {el}
            </p>
          ))}
        </div>
      )}
      <div className={styles.total_list_wrapper}>
        {/* список того що всередині */}
        {desc?.whatIsInside && (
          <div>
            <p className={styles.what_is_inside_title}>
              {desc.whatIsInside.title}
            </p>
            <ul className={styles.what_is_inside_list}>
              {desc.whatIsInside.list.map((el, index) => (
                <li key={index} className={styles.what_is_inside_list_item}>
                  <p className={styles.text}>{el}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* список того як виглядає подарунок */}

        {desc?.howItLooks && (
          <div className={styles.how_it_looks_container}>
            <p className={styles.how_it_looks_title}>{desc.howItLooks.title}</p>
            {desc.howItLooks.textBefore && (
              <div className={styles.how_it_looks_wrapper}>
                {desc.howItLooks.textBefore.map((el) => (
                  <p key={el} className={styles.text}>
                    {el}
                  </p>
                ))}
              </div>
            )}
            {desc.howItLooks.list && (
              <ul className={styles.how_it_looks_list}>
                {desc.howItLooks.list.map((el, index) => (
                  <li key={index}>
                    <p className={styles.text}>{el}</p>
                  </li>
                ))}
              </ul>
            )}
            {desc.howItLooks.textAfter && (
              <div className={styles.how_it_looks_textAfter}>
                {desc.howItLooks.textAfter.map((el) => (
                  <p key={el} className={styles.text}>
                    {el}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
        {desc?.howToOrder && (
          <div>
            <p className={styles.what_is_inside_title}>
              {desc.howToOrder.title}
            </p>
            <div className={styles.text_wrapper}>
              {desc.howToOrder.text.map((el) => (
                <p key={el} className={styles.text}>
                  {el}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftDetailsText;
