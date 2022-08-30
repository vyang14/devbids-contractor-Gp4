import './CreateContract.css'

export default function CreateContract() {
  return (
    <div className="form-container">
      <h1>Create New Contract</h1>
      <form className="form-control">
        <div className="input-section">
          <div className="form-section">
            <h2>Contact Information</h2>
            <label for="contact-name">Name</label>
            <input type="text" id="contact-name" name="contact-name" />
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-section">
            <h2>Job Information</h2>
            <label for="title">Job Title</label>
            <input type="text" id="title" name="title" />
            <label for="skills">Skills Required</label>
            <input type="text" />
            <label for="price">Price Range</label>
            <input type="number" id="price" name="price" />
            <label for="completion-date">Needs to be completed by</label>
            <input type="text" id="completion-date" name="completion-date" />
          </div>
          <div className="form-section">
            <h2>Job Description</h2>
            <textarea id="description" name="description" />
          </div>
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}