import React, {useRef} from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vt8v02t', 'template_ydpc06n', form.current, 'h9sehvlriCS0rSiHy')

      e.target.reset()
  };
  return (
    <section id="contact">
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lautiatencio@gmail.com</h5>
            <a href="mailto:lautiatencio@gmail.com" target="_blank">
              Mandar mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+54 9 3487519909</h5>
            <a
              href="https://api.whatsapp.com/send?phone=3487519909"
              target="_blank"
            >
              Mandar mensaje
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
