import React, { useState } from 'react'

const TailwindDemo5 = () => {
    const[formData, setFormData]=useState({
        name:'',
        email:'',
        message:''
    })
    const[errors, setErrors]=useState({})
    
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const validate =()=>{
    const newErrors={}

    const nameRegex=/^.{2,50}$/
    if(!nameRegex.test(formData.name.trim())){
        newErrors.name='Name must be between 2 and 50 characters.'
    }
     const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
     if(!emailRegex.test(formData.email.trim())){
        newErrors.email='Enter a valid email address.'
     }
     const messageRegex=/^.{10,1000}$/
     if(!messageRegex.test(formData.message.trim())){
        newErrors.message='Message must be between 10 and 1000 characters.'
     }
     return newErrors
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='flex flex-col md:flex-row justify-center w-full min-h-screen bg-white pt-8'>
        <div className='w-full  text-sky-500 font-serif md:w-1/2 max-w-md px-4'>
            <h2 className='text-2xl font-bold font-sans mb-4'>Contact Us</h2>
            <p className='text-gray-800 text-base mb-4'>Contact us to learn more about our products. One of our specialists will be happy to answer your questions and help you select the best product for your workflow.
            </p>
            <form className='space-y-4'onSubmit={handleSubmit}>
                <div>
            <input
            name='name'
            value={formData.name}
            onChange={handleChange}
              type="text"
              placeholder="NAME"
              className="w-full bg-gray-100 border-0 border-b-4 border-sky-400 focus:outline-none focus:border-sky-500 placeholder-gray-500 py-2 px-2 mb-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
                <div>
                <input
            name='email'
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL"
              className="w-full bg-gray-100 border-0 border-b-4 border-sky-400 focus:outline-none focus:border-sky-600 placeholder-gray-500 py-2 "
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>


             <div>
            <textarea
            name='message'
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="YOUR MESSAGE..."
              className="w-full bg-gray-100 border-0 border-b-4 border-sky-400 focus:outline-none focus:border-sky-600 placeholder-gray-500 py-2"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
            <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 w-40 rounded-none text-lg"
          >
            SEND
          </button>
            </form>
            
        </div>


        <div className='w-full md:w-1/2 max-w-md px-4 mb-4 md:mt-16'>
        <div className='relative w-full float-right max-w-md h-72'>
               <iframe 
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28121.359601780387!2d83.9730115!3d28.232520899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995945d57d28ba5%3A0xdd52869218279546!2sShree%20Bindhyabasini%20Temple!5e0!3m2!1sen!2snp!4v1748753319695!5m2!1sen!2snp"
  width="400"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
            </div>
      
    </div>
  )
}

export default TailwindDemo5
