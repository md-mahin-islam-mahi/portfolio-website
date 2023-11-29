import React from 'react'
import './Contact.css'
import toast from 'react-hot-toast';
// import Animation from '../Animation/Animation';

const Contact = () => {

  const sendEmail = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value

    const mailData = {
      name,
      phone,
      email,
      message
    }
  }

  return (
    // <Animation>
    <div id='contact' className='h-screen'>
      <div data-aos="fade-up">
        <h1 className='under-line font-fancy text-[36px] md:text-[46px] lg:text-[60px] text-mainFont'>Send me a message</h1>
      </div>
      <div data-aos="fade-up">
        <form onSubmit={sendEmail} className='flex flex-col justify-center items-center px-1 mt-20 md:mt-40'>
          {/* name */}
          <div className='w-[85%] md:w-[30%]'>
            <input required type="text" name="name" className="shade w-full h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-default tracking-wider text-mainFont bg-mainBg mb-2 placeholder:text-mainFont placeholder:font-fancy outline-none" placeholder='Name' />
          </div>

          {/* phone and email */}
          <div className='flex flex-col md:flex-row md:justify-between md:items-center w-[85%] md:w-[30%]'>
            <input required type="number" name="phone" className="shade w-full h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-default tracking-wider text-mainFont bg-mainBg mb-2 md:mr-1 placeholder:text-mainFont placeholder:font-fancy outline-none" placeholder='Phone Number'/>
            <input required type="email" name="email" id="" placeholder='Email' className="shade w-full h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-default tracking-wider text-mainFont bg-mainBg mb-2 md:ml-1  placeholder:text-mainFont placeholder:font-fancy outline-none"/>
          </div>

          {/* Message  */}
          <div className='w-[85%] md:w-[30%] h-[150px] mt-1 flex justify-center items-center'>
            <textarea required type="text" name="message" placeholder='Your Valuable Message' className="shade w-full h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-default tracking-wider text-mainFont bg-mainBg mb-2 placeholder:text-mainFont placeholder:font-fancy outline-none"/>
          </div>
          <button type="submit" className="shade w-[85%] md:w-[30%] mt-2 h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-fancy tracking-wider text-mainFont bg-mainBg mb-2 mr-1 placeholder:text-mainFont outline-none">Send</button>
        </form>
      </div>
    </div>
    // </Animation>
  )
}

export default Contact;
