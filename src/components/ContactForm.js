import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ijss7vn", // reemplaza esto
      "template_oybc6q4", // reemplaza esto
      formRef.current,
      "TbeH-_IoYW1Q5jfv4" // reemplaza esto
    )
    .then((result) => {
      console.log(result.text);
      setSent(true);
      formRef.current.reset();
    })
    .catch((error) => {
      console.error(error.text);
    });
  };

  return (
    

    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
      {sent && (
        <div className="alert alert-success" role="alert">
          Your message was sent successfully.
        </div>
      )}
      {/* Aquí tu mismo diseño de campos */}
      <div className="row">
        <div className="col-md-6">
          <div className="input-group">
            <label htmlFor="full-name">Full Name <sup>*</sup></label>
            <input type="text" name="name" id="name" placeholder="Your Full Name" required />
          </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="email">Email <sup>*</sup></label>
                <input type="email" name="email" id="email" placeholder="Your email adress" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="phone">phone <span>(optional)</span></label>
                <input type="text" name="phone" id="phone" placeholder="Your number phone" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="input-group">
                <label htmlFor="subject">subject <sup>*</sup></label>
                <select name="subject" id="subject">
                    <option value="">Select a subject</option>
                    <option value="Business Proposal">- Business Proposal</option>
                    <option value="JobOpportunity">- Job Opportunity</option>
                    <option value="FreelanceProject">- Freelance Project</option>
                    <option value="TechnicalCollaboration">- Technical Collaboration</option>
                    <option value="Code ReviewMentoring">- Code Review / Mentoring</option>
                    <option value="SpeakingInvitation">- Speaking Invitation</option>
                    <option value="NetworkingCoffeeChat">- Networking / Coffee Chat</option>
                    <option value="GeneralQuestion">- General Question</option>
                    <option value="Other">- Other </option>
                </select>
            </div>
        </div>
        <div className="col-md-12">
            <div className="input-group">
                <label htmlFor="budget">your budget <span>(optional)</span></label>
                <input type="number" name="budget" id="budget" placeholder="A range budget for your project" />
            </div>
        </div>
        <div className="col-md-12">
            <div className="input-group">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" placeholder="Wrire your message here ..."></textarea>
            </div>
        </div>
        <div className="col-md-12">
            <div className="input-group upload-attachment">
                <div>
                    <label htmlFor="upload-attachment">
                        <i className="las la-cloud-upload-alt"></i> add an attachment
                        <input type="file" name="file" id="upload-attachment" />
                    </label>
                    
                </div>
                
            </div>
        </div>
        <div className="col-md-12">
          <div className="input-group submit-btn-wrap">
            <button className="theme-btn" type="submit">Send Message</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
