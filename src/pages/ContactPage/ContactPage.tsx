import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './styleContact.css';

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_l0unsox', // EmailJS service ID
          'template_5ofh1nk', // EmailJS template ID
          form.current,
          'VfneZ3e37-ONHg9q9', // EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Zpráva byla odeslána!');
          },
          (error) => {
            console.log(error.text);
            alert('Chyba při odesílání zprávy!');
          },
        );

      e.currentTarget.reset();
    }
  };

  return (
    <div>
      <p>
        Napsat mi můžete na email{' '}
        <a href="mailto:japonstina.aja@gmail.com">japonstina.aja@gmail.com</a>,
        na můj Facebook nebo Instagram. Nebo můžete využít kontaktní formulář
        níže:
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formStyle__group">
          <div className="formStyle__input">
            <label htmlFor="customerName">Jméno</label>
            <div className="formStyle__input">
              <input
                id="customerName"
                name="customerName"
                type="text"
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="formStyle__input">
            <label htmlFor="customerEmail">E-mail</label>
            <div className="formStyle__input">
              <input
                id="customerEmail"
                name="customerEmail"
                type="text"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>

        <label htmlFor="textarea">Vaše zpráva</label>
        <div>
          <textarea
            id="textarea"
            name="customerTextarea"
            rows={6}
            placeholder=""
            required
          ></textarea>
        </div>

        <input type="submit" value="Odeslat" />
      </form>
    </div>
  );
};

export default ContactPage;
