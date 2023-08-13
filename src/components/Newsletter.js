import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <main className={`${styles.newsletter}`}>
      <div className={`${styles.newsletter_wrapper}`}>
        <div className={`${styles.content_container}`}>
        <header>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </header>
        <section>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </section>
        <section>
          <form>
            <label htmlFor="">Email address</label>
            <input type="email" />
            <button>Subscribe to monthly newslette</button>
          </form>
        </section>

        </div>
       
      </div>

      <div className={`${styles.image_container}`}>
        <img
          className={`${styles.hero_image}`}
          src="/images/illustration-sign-up-desktop.svg"
          alt=""
        />
      </div>
    </main>
  );
};

export default Newsletter;
