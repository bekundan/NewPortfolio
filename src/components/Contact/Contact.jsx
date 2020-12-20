import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import emailjs from 'emailjs-com';
import './contact.stye.css';
const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  //sending mails//

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_n5e193w', 'template_h8h3ij4', e.target, 'user_5wKx1yEuk69bAp9vnuXBO')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
          </div>
        </Fade>
        <div>
          <form className="contact-form form-container" onSubmit={sendEmail}>
            <div className="form-div">
              <p>
                <label>Subject</label>
              </p>
              <input type="text" name="subject" />
              <p>
                <label>Name</label>
              </p>

              <input type="text" name="name" />
              <p>
                <label>Email</label>
              </p>

              <input type="text" name="email" />
              <p>
                <label>Message</label>
              </p>
              <p>
                <textarea name="message" />
              </p>
              <button className="btn-animate" type="submit" value="Send">
                Send
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
