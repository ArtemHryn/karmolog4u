import Link from 'next/link';
import NoEvents from './NoEvents';
import styles from './Events.module.scss';

const Events = ({ events }) => {
  if (events === undefined || Object.keys(events).length === 0) {
    return <NoEvents />;
  }
  const eventsList = Object.entries(events).map(([date, event]) => ({
    date,
    event,
    link: 'https://www.youtube.com/',
  }));

  return (
    <ul className={styles.list}>
      {eventsList.map(({ date, event, link }) => (
        <li key={date} className={styles.list_item}>
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.83159 8.77772L5.60558 4.90776C5.92919 3.2897 7.3499 2.125 9 2.125C10.6501 2.125 12.0708 3.2897 12.3944 4.90776L13.1684 8.77772C13.3995 9.93294 13.9673 10.9939 14.8003 11.827L15.0426 12.0692C15.1754 12.202 15.25 12.3822 15.25 12.57C15.25 12.8998 15.0224 13.1859 14.701 13.2601L13.6745 13.497C10.5986 14.2068 7.40141 14.2068 4.32549 13.497L3.29898 13.2601C2.97763 13.1859 2.75 12.8998 2.75 12.57C2.75 12.3822 2.82462 12.202 2.95744 12.0692L3.19968 11.827C4.03272 10.9939 4.60054 9.93294 4.83159 8.77772ZM2.993 8.41L3.76699 4.54004C4.26589 2.04556 6.45612 0.25 9 0.25C11.5439 0.25 13.7341 2.04557 14.233 4.54004L15.007 8.41C15.1654 9.20224 15.5549 9.92986 16.1262 10.5012L16.3684 10.7434C16.8528 11.2278 17.125 11.8849 17.125 12.57C17.125 13.7729 16.2947 14.8166 15.1226 15.0871L14.0961 15.324C13.22 15.5262 12.3349 15.6755 11.4454 15.772C11.2054 16.9022 10.2017 17.7501 9 17.7501C7.79828 17.7501 6.79461 16.9022 6.55457 15.772C5.66512 15.6755 4.77999 15.5262 3.90388 15.324L2.87737 15.0871C1.70527 14.8166 0.875 13.7729 0.875 12.57C0.875 11.8849 1.14716 11.2278 1.63161 10.7434L1.87385 10.5011C2.44514 9.92986 2.83455 9.20224 2.993 8.41Z"
              fill="#CFB691"
            />
          </svg>
          {date && (
            <p className={styles.text}>
              Приєднуйтеся до нового вебінару {event} в {date} Посилання для участі: нажміть на{' '}
              <Link href={link} target="_blank" rel="noreferrer noopener">
                посилання
              </Link>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Events;
