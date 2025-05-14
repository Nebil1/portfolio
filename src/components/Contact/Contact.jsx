import './Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const mailtoLink = `mailto:nebilyisehak@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className='section__title'>Contact</h2>
      <div className='contact__form'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type='text'
              className='form__input'
              placeholder='Your Name'
              name='name'
              id='name'
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type='email'
              className='form__input'
              placeholder='Your Email'
              name='email'
              id='email'
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              className='form__textarea'
              placeholder='Your Message'
              rows='5'
              name='message'
              id='message'
              required
            />
          </div>
          <button type='submit' className='btn btn--outline'>
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
