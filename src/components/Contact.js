import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/cc82b800-798a-11ed-a126-b172cf164538"; // TODO - fill on the later step

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState('Send');
  const form = document.getElementById('contact-form');
  const handleSubmit = () => {
    setButtonText("Sending...");
    setTimeout(() => {
      setSubmitted(true);
      setButtonText("Sent");
    }, 250);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center flex">
          <Col size={12} md={6} className='contact-container'>
            <iframe title='dummyframe' name="dummyframe" id="dummyframe"></iframe>
            <h1 className="title">Contact Me</h1>
            <form
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target='dummyframe'
            >
              <Row className='form-row'>
                <Col size={12} className="px-1">
                  <input type="text" placeholder="Your name" name="name" required disabled={submitted}/>
                </Col>
                <Col size={12} className="px-1">
                  <input type="email" placeholder="Email" name="email" required disabled={submitted}/>
                </Col>
                <Col size={12} className="px-1">
                  <textarea placeholder="Your message" name="message" required disabled={submitted}/>
                  <h2 className={submitted ? "" : "hidden"}>Thanks for the message!</h2>
                  <p className={submitted ? "" : "hidden"}>I'll be in touch soon.</p>
                  <button type="submit" disabled={submitted}>{buttonText}</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};