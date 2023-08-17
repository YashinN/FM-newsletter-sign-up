import styles from "./Subscribed.module.css";
import IconList from "./IconList";

const Subscribed = () => {
  return (
    <section className={`${styles.subscribed_container}`}>
      <div className={`${styles.content_wrapper}`}>
        <span className={styles.tick_icon}>
          <IconList width={64} height={64} />
        </span>
        <h1 className={`${styles.title}`}>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com.</strong> Please open it and click the
          button inside to confirm your subscription.
        </p>
        <button className={`${styles.dismiss_btn}`}>Dismiss message</button>
      </div>
    </section>
  );
};

export default Subscribed;
