import { Clock5, Mail, MapPin, Send } from 'lucide-react'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@epcpartnaz.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if (data.success === 'true' || response.ok) {
        toast.success('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      <Toaster position="top-right" />

      {/* Hero Section */}
      <div className='bg-[#fefce8] sm:px-[100px] px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 items-center justify-center'>
        <p className='text-[12px] px-3 py-1 bg-yellow-50 rounded-md text-yellow-500 w-fit'>Get In Touch</p>
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="sm:text-4xl text-2xl font-bold text-center">
            Contact{' '}
            <span className="bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
              Our Experts
            </span>
          </h1>
          <p className="text-gray-600 text-center sm:w-[60%]">
            Ready to secure your business? Get a free consultation and custom quote from our security professionals.
          </p>
        </div>
      </div>

      {/* Form + Contact Info */}
      <div className='sm:px-[100px] px-[40px] py-[40px] bg-white sm:flex sm:flex-row flex flex-col gap-8'>
        {/* Contact Form */}
        <div className='sm:w-[50%]'>
          <form onSubmit={handleSubmit} className='p-3 bg-white shadow-md rounded-md'>
            <div className='mb-[40px] flex flex-col'>
              <h1 className='font-bold'>Send us a Message</h1>
              <p className='text-gray-500 text-sm'>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-[20px]'>
              <div className='flex flex-col gap-1'>
                <label className='text-sm text-gray-500'>Full Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder='Your Full Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-sm text-gray-500'>Email Address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder='your@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-sm text-gray-500'>Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder='+2547.....'
                  value={formData.phone}
                  onChange={handleChange}
                  className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label className='text-sm text-gray-500'>Subject*</label>
                <input
                  type="text"
                  name="subject"
                  placeholder='How can we help?'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-blue-400'
                />
              </div>
            </div>

            <div className='flex flex-col gap-1 mb-[30px]'>
              <label className='text-sm text-gray-500'>Message*</label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className='border border-gray-300 py-1 px-2 rounded-lg text-sm outline-yellow-400'
              />
            </div>

            <div>
              <button
                type="submit"
                className='bg-yellow-600 text-white flex gap-2 items-center py-1 w-full rounded-md justify-center text-sm hover:bg-yellow-800 duration-300 transition-all cursor-pointer'
              >
                <Send size={12} /> Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className='sm:w-[50%]'>
          <div className='mb-[20px]'>
            <h1 className='font-bold sm:text-2xl text-xl'>Get in Touch</h1>
            <p className='text-gray-500 sm:text-normal text-sm'>
              Our security experts are ready to help you protect your business. Contact us today for a free consultation.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='p-4 flex gap-4 bg-white shadow-lg rounded-md'>
              <div className='w-[40px] h-[40px] bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 rounded-md flex items-center justify-center'>
                <Mail color='white' />
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-sm font-bold'>Email</h1>
                <p className='text-sm text-gray-600'>info@epcpartnaz.com</p>
                <p className='text-sm text-gray-600'>support@epcpartnaz.com</p>
                <p className='text-[12px] text-gray-500'>We respond within 2 hours</p>
              </div>
            </div>

            <div className='p-4 flex gap-4 bg-white shadow-lg rounded-md'>
              <div className='w-[40px] h-[40px] bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 rounded-md flex items-center justify-center'>
                <MapPin color='white' />
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-sm font-bold'>Location</h1>
                <p className='text-sm text-gray-600'>BOX 03001-01</p>
                <p className='text-sm text-gray-600'>Nairobi Kenya</p>
                <p className='text-[12px] text-gray-500'>Visit our offices</p>
              </div>
            </div>

            <div className='p-4 flex gap-4 bg-white shadow-lg rounded-md'>
              <div className='w-[40px] h-[40px] bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 rounded-md flex items-center justify-center'>
                <Clock5 color='white' />
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-sm font-bold'>Business Hours</h1>
                <p className='text-sm text-gray-600'>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p className='text-sm text-gray-600'>Sat: 9:00 AM - 4:00 PM</p>
                <p className='text-[12px] text-gray-500'>Emergency support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
