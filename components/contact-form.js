import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("moqbqvkl");
  if (state.succeeded) {
    return (
    <div className="h-48 bg-comp">
      <h3 className="text-8xl text-center text-prim align-middle">Thanks!</h3>;
    </div>
    )
  }
  return (
    <div className="bg-prim-lighter flex flex-col align-center">
      <h5 className="mt-3 text-center text-prim-darker text-5xl xl:text-8xl font-extrabold leading-none">
        Contact Me
      </h5>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col self-center w-4/5 items-center"
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
          disabled={state.submitting}
          className="w-fit mb-5 bg-comp-light text-2xl rounded-lg px-3 py-1"
        >
          Submit
        </button>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </form>
    </div>
  );
}
export default ContactForm;
