import { CustomButton } from "./CustomButton";
export const Form = () => {
  return (
    <form action="#">
      <fieldset className="flex flex-col gap-[1.875rem] md:flex-row">
        <legend className="sr-only">Sign up to get updates</legend>
        <label htmlFor="email" className="sr-only">Enter your email address</label>
        <input className=" flex-[2] text-sm rounded-full py-3 bg-white px-4 text-main" type="email" name="email" id="email" placeholder="email@example.com" />
        <CustomButton isLink={false} text="Get Started For Free" />
      </fieldset>
    </form>
  )
}