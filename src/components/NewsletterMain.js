import { useState } from "react";
import Newsletter from "./Newsletter";
import Subscribed from "./Subscribed";
import validator from "validator";

const NewsletterMain = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [subscribed, setSubscribed] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsEmail(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    validator.isEmail(email) ? setIsEmail(true) : setIsEmail(false);
    validator.isEmail(email) && setSubscribed(true);
  };

  const clearError = () => {
    setIsEmail(true);
  };

  return (
    <>
      {subscribed ? (
        <Subscribed email={email} />
      ) : (
        <Newsletter
          onHandleEmail={handleEmail}
          isEmail={isEmail}
          email={email}
          handleSubscribe={handleSubscribe}
          clearError={clearError}
        />
      )}
    </>
  );
};

export default NewsletterMain;
