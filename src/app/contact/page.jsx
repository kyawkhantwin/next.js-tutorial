import Image from "next/image"

const ContactPage = () => {
  return (
    <div className="flex my-5 mr-10 space-x-10">
      <div className="md:flex-[1] relative ">
        <Image className="hidden md:block" src="/contact.png" fill/>
      </div>
      <div className="flex-[1] ">
        <form action="#" className="text-sm space-y-3">
          <input type="text" required className="px-2 py-3 focus:outline-none bg-color-dark-soft rounded text-white w-full" 
           placeholder="Name or Surname" />
          <input  type="email"  required className="px-2 py-3 focus:outline-none bg-color-dark-soft rounded text-white w-full"
          placeholder="Email Address" />
          <input  type="text"  className="px-2 py-3 focus:outline-none bg-color-dark-soft rounded text-white w-full"
          placeholder="Phone Number (Option)" />
          <textarea  className="px-2 py-3 focus:outline-none bg-color-dark-soft rounded text-white w-full"
           name="" id="" placeholder="Message" rows="5"></textarea>
           <button className="px-2 py-3 focus:outline-none bg-blue-600  rounded text-white w-full">Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage