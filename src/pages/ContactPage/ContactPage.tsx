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
        <div className="formStyle--group">
          <div>
            <label htmlFor="customerName">Vaše jméno</label>
            <div>
              <input
                id="customerName"
                name="customerName"
                type="text"
                placeholder="jméno"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="customerSurname">Vaše příjmení</label>
            <div>
              <input
                id="customerSurname"
                name="customerSurname"
                type="text"
                placeholder="příjmení"
                required
              />
            </div>
          </div>
        </div>

        <div className="formStyle--group">
          <div>
            <label htmlFor="customerEmail">Váš e-mail</label>
            <div>
              <input
                id="customerEmail"
                name="customerEmail"
                type="text"
                placeholder="e-mail"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="topic">Předmět</label>
            <div>
              <input
                id="topic"
                name="topic"
                type="text"
                placeholder="předmět"
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
            placeholder="předmět"
            required
          ></textarea>
        </div>

        <input type="submit" value="Odeslat" />
      </form>
    </div>
  );
};

export default ContactPage;
