const Contact = () => {
  return (
    <div className="bg-prim-light flex flex-col align-center">
      <h5 className="text-center text-prim-darker text-8xl">Contact Me</h5>
      <form className="flex justify-center flex-col self-center w-4/5 items-center">
        <label className="text-prim-darker" htmlFor="name">Name:</label>
        <input className="w-4/5" type="text" id="name" name="name" defaultValue={""}></input>

        <label className="text-prim-darker" htmlFor="email">Email:</label>
        <input className="w-4/5" type="email" id="email" name="email" defaultValue={""}></input>

        <label className="text-prim-darker" htmlFor="subject">Subject:</label>
        <input className="w-4/5" type="text" id="subject" name="subject"></input>

        <label className="text-prim-darker" htmlFor="message">Message:</label>
        <textarea className="w-4/5" type="text" id="message"></textarea>

        <input className="w-4/5" type="submit" id="submit" value="Submit"></input>
      </form>
    </div>
  );
};
export default Contact;
