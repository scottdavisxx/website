

function ContactNetlify(props) {

  return (
    <div className="bg-prim-lighter flex flex-col align-center netlify">
      <span id={props.id} className="-top-20 block relative"></span>
      <h5 className="mt-3 text-center text-prim-darker text-5xl xl:text-8xl font-extrabold leading-none">
        Contact Me
      </h5>
      <form
        name="contact" method="POST" className="flex justify-center flex-col self-center w-4/5 items-center"
      >
        <label className="text-prim-darker self-start" htmlFor="name">
          Name
        </label>
        <input
          className="w-full mb-5 bg-prim-light text-white"
          type="text"
          id="name"
          name="name"
          defaultValue={""}
        ></input>
        <label className="text-prim-darker self-start" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full mb-5 bg-prim-light text-white"
          type="email"
          id="email"
          name="email"
          defaultValue={""}
        ></input>
        <label className="text-prim-darker self-start" htmlFor="subject">
          Subject:
        </label>
        <input
          className="w-full mb-5 bg-prim-light text-white"
          type="text"
          id="subject"
          name="subject"
        ></input>

        <label className="text-prim-darker self-start" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full mb-5 bg-prim-light text-white"
          type="text"
        ></textarea>

        <button
          type="submit"
          className="w-fit mb-5 bg-comp-light text-2xl rounded-lg px-3 py-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactNetlify;
