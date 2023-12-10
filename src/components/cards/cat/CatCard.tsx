import Image from "next/image";
import styles from "./CatCard.module.css";

export interface ICatCardProps {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CatCard: React.FC<ICatCardProps> = ({
  tag,
  title,
  body,
  author,
  time,
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.card}>
        <header className={styles.card__header}>
          <Image
            src="/time-cat.jpg"
            alt="Image of a cat, sitting near the vintage clock"
            className={styles.card__image}
            width={600}
            height={400}
          />
        </header>

        <section className={styles.card__body}>
          <span className={`${styles.tag} ${styles["tag-blue"]}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </section>

        <footer className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default CatCard;
