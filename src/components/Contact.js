import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/cc82b800-798a-11ed-a126-b172cf164538"; // TODO - fill on the later step

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <iframe title='dummyframe' name="dummyframe" id="dummyframe"></iframe>
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target='dummyframe'
      >
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
          <button type="submit"> Send a message </button>
        </div>
      </form>
    </div>
  );
};