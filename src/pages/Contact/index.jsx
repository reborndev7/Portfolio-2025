import './contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Let's get in touch! You can reach me at:</p>
      <ul>
        <li>Email: reborndev7@gmail.com</li>
        <li>
          <a href="https://github.com/reborndev7" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/debjyoti-saha" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
