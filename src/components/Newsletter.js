import styles from "./Newsletter.module.css";
import IconList from "./IconList";
import { useState } from "react";
import validator from "validator";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsEmail(true);
  };

  const clearError = () => {
    setIsEmail(true);
  };

  const validateEmail = (e) => {
    e.preventDefault();
    validator.isEmail(email) ? setIsEmail(true) : setIsEmail(false);
  };

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
              <div className={styles.label_container}>
                <label htmlFor="">Email address</label>
                {!isEmail && (
                  <p className={`${styles.error_msg}`}>Valid email required</p>
                )}
              </div>

              <input
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => handleEmail(e)}
                onFocus={clearError}
                className={`${isEmail ? styles.no_error : styles.error}`}
              />
              <button
                className={`${styles.sub_btn}`}
                onClick={(e) => validateEmail(e)}
              >
                Subscribe to monthly newsletter
              </button>
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
