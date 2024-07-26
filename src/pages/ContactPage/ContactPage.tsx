import * as React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <p>
        Napsat mi můžete na email{' '}
        <a href="mailto:japonstina.aja@gmail.com">japonstina.aja@gmail.com</a>,
        na můj Facebook nebo Instagram. Nebo můžete využít kontaktní formulář
        níže:
      </p>
      <form className="form-horizontal">
        <fieldset>
          <legend>Form Name</legend>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="customerName">
              Vaše jméno
            </label>
            <div className="col-md-4">
              <input
                id="customerName"
                name="customerName"
                type="text"
                placeholder=""
                className="form-control input-md"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="customerEmail">
              Váš e-mail
            </label>
            <div className="col-md-4">
              <input
                id="customerEmail"
                name="customerEmail"
                type="text"
                placeholder=""
                className="form-control input-md"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="topic">
              Předmět
            </label>
            <div className="col-md-4">
              <input
                id="topic"
                name="topic"
                type="text"
                placeholder=""
                className="form-control input-md"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="textarea">
              Vaše zpráva
            </label>
            <div className="col-md-4">
              <textarea
                className="form-control"
                id="textarea"
                name="textarea"
              ></textarea>
            </div>
          </div>

          {/*<!-- Button -->*/}
          <div className="form-group">
            <label
              className="col-md-4 control-label"
              htmlFor="contactButton"
            ></label>
            <div className="col-md-4">
              <button
                id="contactButton"
                name="contactButton"
                className="btn btn-primary"
              >
                Odeslat
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactPage;
