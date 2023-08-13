const Newsletter = () => {
  return (
    <main>
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
      <div>
        <img src="/images/illustration-sign-up-deskrop.svg" alt="" />
      </div>
    </main>
  );
};
