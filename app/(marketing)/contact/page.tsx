import { Navbar } from "@/components/marketing/navbar";

export default function ContactPage() {
  return (
    <main className="cp-contact-page">
      

      <section className="cp-contact-content">
        {/* =====================================================
            CONTACT FORM
            ===================================================== */}

        <div className="cp-contact-form-card">
          <h1>Contact Form</h1>

          <form className="cp-contact-form">
            <div className="cp-contact-field">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
              />
            </div>

            <div className="cp-contact-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>

            <div className="cp-contact-field cp-contact-message">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={6}
              />
            </div>

            <button type="submit" className="cp-contact-submit">
              Submit
            </button>
          </form>
        </div>

        {/* =====================================================
            EMAIL CARD
            ===================================================== */}

        <div className="cp-email-card">
          <h2>Email Us</h2>

          <p>
            Have a question or need assistance? We’d be happy to help.
          </p>

          <a
            href="mailto:contact@cryptopedea.com"
            className="cp-email-address"
          >
            contact@cryptopedea.com
          </a>
        </div>
      </section>
    </main>
  );
}