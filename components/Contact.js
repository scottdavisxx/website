const Contact = () => {
  return (
    <div>
      <h5>Contact Me</h5>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" defaultValue={""}></input>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" defaultValue={""}></input>

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject"></input>

        <label htmlFor="message">Message:</label>
        <textarea type="text" id="message"></textarea>

        <input type="submit" id="submit" value="Submit"></input>
      </form>
    </div>
  );
};
export default Contact;
