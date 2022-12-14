import './ContactUs.css'
// Contact us page
export default function ContactUs() {
  return (
    <div>
      <div className="contact-us-banner"></div>
      <div className="form-container">
        <h1>Contact Us</h1>
        <p>
          If you have experienced any issues with our services, please fill out
          the form below and our eager team of Customer Service Representatives
          will work with you to resolve this issue.
        </p>
        {/* Formsubmit.co will send us an email if someone submits this form */}
        <form
          action="https://formsubmit.co/e332b7de96a976a02c2b5f81385f54b1"
          method="POST"
          className="form"
        >
          <div className="input-section">
            <div className="form-section">
              <label for="contract-number">Contract Number</label>
              <input
                type="number"
                id="contract-number"
                name="contract-number"
              />
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" />
              <label for="your-name">Your Name</label>
              <input type="text" id="your-name" name="your-name" />
              <label for="other-name">Name of other party involved</label>
              <input type="text" id="other-name" name="other-name" />
            </div>
            <div className="form-section">
              <label for="description">Description of issue</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <button className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
