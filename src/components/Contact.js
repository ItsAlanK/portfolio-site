import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center flex">
          <Col size={12} md={6}>
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
                  <input type="text" placeholder="Your name" name="name" required />
                </Col>
                <Col size={12} className="px-1">
                  <input type="email" placeholder="Email" name="email" required />
                </Col>
                <Col size={12} className="px-1">
                  <textarea placeholder="Your message" name="message" required />
                  <button type="submit"> Send a message </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};