import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Shield, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='w-full sm:px-[40px] px-[40px] pt-[60px] pb-[40px] border-b border-gray-800'>
        <div className='sm:grid sm:grid-cols-4 gap-6 flex flex-col'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <div className='h-[40px] w-[40px] flex items-center justify-center bg-[#FFD700] rounded-md'>
                <h1>E</h1>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-[#FFD700] font-bold'>EPC Partnaz</h1>
                <p className='text-[9px] text-gray-300'>Advocate · EPC Contractors Consultant · Investment Facilitator</p>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Empowering growth through strategic advocacy, investment funding, and EPC expertise. Your trusted partner for complex infrastructure and industrial projects worldwide.</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                {/* <Phone color='#eab308' size={16} /> */}
                {/* <p className='text-gray-500 text-sm'>+254712345678</p> */}
              </div>
              <div className='flex items-center gap-2'>
                <Mail color='#eab308' size={16} />
                <p className='text-gray-500 text-sm'>info@epcpartnaz.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin color='#eab308' size={16} />
                <p className='text-gray-500 text-sm'>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-white'>Our Services</h1>
            <ul className='text-gray-500 text-sm flex flex-col gap-3'>
              <li>
                <a href="/services/" className='hover:text-[#eab308]'>Advocacy & Representation</a>
              </li>
              <li>
                <a href="/services/" className='hover:text-[#eab308]'>Investment Funding</a>
              </li>
              <li>
                <a href="/services/" className='hover:text-[#eab308]'>EPC Contractors Consultancy</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-white'>Sectors</h1>
            <ul className='text-gray-500 text-sm flex flex-col gap-3'>
              <li>
                <a href="about" className='hover:text-[#eab308]'>Energy & Power</a>
              </li>
              <li>
                <a href="services" className='hover:text-[#eab308]'>Oil & Gas</a>
              </li>
              <li>
                <a href="shop" className='hover:text-[#eab308]'>Infrastructure</a>
              </li>
              <li>
                <a href="contact" className='hover:text-[#eab308]'>Industrial Plants</a>
              </li>
              <li>
                <a href="contact" className='hover:text-[#eab308]'>Water & Environment</a>
              </li>
              <li>
                <a href="contact" className='hover:text-[#eab308]'>Special Projects</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-white'>Stay Connected</h1>
            <ul className='text-gray-500 text-sm flex flex-col gap-3'>
              <li>
                <a href="/services/" className='hover:text-[#eab308]'>Advocacy & Representation</a>
              </li>
              <li>
                <a href="/services/" className='hover:text-[#eab308]'>Investment Funding</a>
              </li>
              <li>
                <a href="/services/" className='hover:text-[#eab308]'>EPC Contractors Consultancy</a>
              </li>
            </ul>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 text-sm'>Follow us for updates.</p>
              <div className='flex gap-3 items-center'>
                <div className='bg-blue-50/10 p-2 rounded-md flex items-center justify-center hover:bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600'>
                  <Facebook className='text-gray-500 hover:text-white' />
                </div>
                <div className='bg-blue-50/10 p-2 rounded-md flex items-center justify-center hover:bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600'>
                  <Instagram className='text-gray-500 hover:text-white' />
                </div>
                <div className='bg-blue-50/10 p-2 rounded-md flex items-center justify-center hover:bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600'>
                  <Twitter className='text-gray-500 hover:text-white' />
                </div>
                <div className='bg-blue-50/10 p-2 rounded-md flex items-center justify-center hover:bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600'>
                  <Linkedin className='text-gray-500 hover:text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:px-[100px] px-[40px] py-[20px] flex items-center justify-between'>
        <p className='sm:text-sm text-gray-500 text-[10px]'>&copy; 2025 EPC Partnaz. All rights reserved.</p>
        <div className='flex items-center gap-3'>
          <a href="policy" className='text-gray-500 hover:text-[#eab308] sm:text-sm text-[10px]'>Privacy Policy</a>
          <a href="terms" className='text-gray-500 hover:text-[#eab308] sm:text-sm text-[10px]'>Terms of Service</a>
        </div>
      </div>
    </div>
  )
}

export default Footer