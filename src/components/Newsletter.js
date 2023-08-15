import styles from "./Newsletter.module.css";
import IconList from "./IconList";

const Newsletter = () => {
  return (
    <main className={`${styles.newsletter}`}>
      <div className={`${styles.newsletter_wrapper}`}>
        <div className={`${styles.content_container}`}>
          <header className={`${styles.header_container}`}>
            <h1 className={`${styles.title}`}>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
          </header>
          <section>
            <ul className={`${styles.list}`}>
              <li>
                <span>
                  <IconList />
                </span>
                <p>Product discovery and building what matters</p>
              </li>
              <li>
                <span>
                  <IconList />
                </span>
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li>
                <span>
                  <IconList />
                </span>
                <p>And much more!</p>
              </li>
            </ul>
          </section>
          <section className={`${styles.form_container}`}>
            <form className={`${styles.form}`}>
              <label htmlFor="">Email address</label>
              <input type="email" placeholder="email@company.com" />
              <button>Subscribe to monthly newslette</button>
            </form>
          </section>
        </div>

        <div className={`${styles.image_container}`}>
          <img
            className={`${styles.hero_image}`}
            src="/images/illustration-sign-up-desktop.svg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Newsletter;
