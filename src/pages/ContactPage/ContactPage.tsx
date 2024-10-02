import * as React from 'react';
import './styleContact.css';

const ContactPage: React.FC = () => {
  return (
    <div>
      <p>
        Napsat mi můžete na email{' '}
        <a href="mailto:japonstina.aja@gmail.com">japonstina.aja@gmail.com</a>,
        na můj Facebook nebo Instagram. Nebo můžete využít kontaktní formulář
        níže:
      </p>
      <form>
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
            name="textarea"
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
