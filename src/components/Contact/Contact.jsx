import './Contact.css';

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
    <section id='contact' className='contact' data-aos='fade-up'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact__form'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='form__input'
            placeholder='Your Name'
            name='name'
            required
          />
          <input
            type='email'
            className='form__input'
            placeholder='Your Email'
            name='email'
            required
          />
          <textarea
            className='form__textarea'
            placeholder='Your Message'
            rows='5'
            name='message'
            required
          />
          <button type='submit' className='btn btn--outline'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
