// src/components/Contact.jsx
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Kontakt</h2>
      <p>Ich freue mich über deine Nachricht! Schreib mir einfach eine E-Mail oder nutze das Formular unten.</p>

      <a
        href="mailto:Jasonbay05@gmail.com"
        className="send-email-button"
      >
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="white"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>send</span>
      </a>

      <form
  className="contact-form"
  action="https://formspree.io/f/mreakbje"
  method="POST"
>
  <input name="name" type="text" placeholder="Dein Name" required />
  <input name="email" type="email" placeholder="Deine E-Mail" required />
  <textarea name="message" placeholder="Deine Nachricht" rows={5} required></textarea>
  <button type="submit">Absenden</button>
</form>

    </section>
  );
}
