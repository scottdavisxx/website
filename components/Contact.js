const Contact = () => {
  return (
    <div class="contact-blade">
      <h5>Contact Me</h5>
        <form class="contact-form">

        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value=""></input>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value=""></input>

        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject"></input>

        <label for="message">Message:</label>
        <textarea type="text" id="message"></textarea>

        <input type="submit" id="submit" value="Submit"></input>
      </form>
  </div>
  )
}
export default Contact;