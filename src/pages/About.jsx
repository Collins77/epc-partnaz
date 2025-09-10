import React from 'react'
import about from '../assets/about.jpg'
import { CheckCheck, Globe, Heart, Shield, Target, Trophy, Users } from 'lucide-react'

const About = () => {
    return (
        <div>
            <div className='bg-[#f2f7fc] relative sm:px-[100px] px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 items-center justify-center' style={{ backgroundImage: `url(${about})`, backgroundSize: 'cover', backgroundPosition: 'top', }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col items-center gap-3'>
                    <p className='text-[12px] px-3 py-1 bg-yellow-50 rounded-md text-yellow-600 w-fit '>Professional Security Services</p>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold text-center text-white">
                            Building Tomorrow's{" "}
                            <span className="bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                                Infrastructure {" "}
                            </span>
                            Today
                        </h1>
                        <p className="text-gray-300 text-center sm:w-[60%] sm:text-normal text-sm">Founded on the principles of excellence and innovation, EPC Partnaz has emerged as a trusted partner for complex infrastructure and industrial projects worldwide.</p>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-white sm:flex sm:flex-row sm:justify-between gap-6 flex flex-col'>
                <div className='flex flex-col gap-4 sm:w-[50%]'>
                    <h1 className='font-bold sm:text-3xl text-xl '>Our Mission</h1>
                    <p className='text-gray-600 sm:text-base text-sm'>To empower organizations with strategic solutions that transform complex challenges into successful project outcomes. We bridge the gap between vision and execution through expert advocacy, innovative funding strategies, and comprehensive EPC consultancy.</p>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center text-gray-600 gap-2 sm:text-sm text-[12px]'>
                            <CheckCheck color='gold' />
                            Strategic guidance through every project phase
                        </li>
                        <li className='flex items-center text-gray-600 gap-2 sm:text-sm text-[12px]'>
                            <CheckCheck color='gold' />
                            Innovative solutions for complex challenges
                        </li>
                        <li className='flex items-center text-gray-600 gap-2 sm:text-sm text-[12px]'>
                            <CheckCheck color='gold' />
                            Sustainable impact for communities worldwide
                        </li>
                    </ul>
                </div>
                <div className='bg-gray-100 rounded-lg p-4 sm:w-[50%]'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-bold sm:text-3xl text-xl'>Our Story</h1>
                        <p className='text-gray-700 sm:text-base text-sm'>Founded in 2020 by a team of industry veterans, EPC Partnaz was born from the recognition that successful infrastructure projects require more than technical expertise—they need strategic vision, financial innovation, and unwavering advocacy.</p>
                        <p className='text-gray-700 sm:text-base text-sm'>Today, we've grown into a global consultancy with offices across three continents, serving clients in diverse sectors while maintaining our core commitment to excellence and integrity.</p>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-[#f9fafc]'>
                <div className='flex flex-col gap-2 items-center justify-center mb-[40px]'>
                    <h1 className='sm:text-3xl text-xl font-bold'>Our Values</h1>
                    <p className='text-gray-600 sm:text-base text-sm text-center'>The principles that guide every decision and drive our commitment to client success.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 gap-6 flex flex-col'>
                    <div className='flex flex-col gap-2 p-8 rounded-md items-center justify-center shadow-md bg-white'>
                        <div className='h-[60px] w-[60px] rounded-md bg-yellow-500 flex items-center justify-center'>
                            <Target size={30} color='black' />
                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <h1 className='font-bold'>Excellence</h1>
                            <p className='text-gray-500 text-center'>We deliver exceptional results through meticulous attention to detail and unwavering commitment to quality.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-8 rounded-md items-center justify-center shadow-md bg-white'>
                        <div className='h-[60px] w-[60px] rounded-md bg-yellow-500 flex items-center justify-center'>
                            <Shield size={30} color='black' />
                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <h1 className='font-bold'>Integrity</h1>
                            <p className='text-gray-500 text-center'>Our foundation is built on trust, transparency, and ethical business practices in every engagement.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-8 rounded-md items-center justify-center shadow-md bg-white'>
                        <div className='h-[60px] w-[60px] rounded-md bg-yellow-500 flex items-center justify-center'>
                            <Users size={30} color='black' />
                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <h1 className='font-bold'>Collaboration</h1>
                            <p className='text-gray-500 text-center'>We believe in the power of partnership, working closely with clients to achieve shared success.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-8 rounded-md items-center justify-center shadow-md bg-white'>
                        <div className='h-[60px] w-[60px] rounded-md bg-yellow-500 flex items-center justify-center'>
                            <Globe size={30} color='black' />
                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <h1 className='font-bold'>Global Perspective</h1>
                            <p className='text-gray-500 text-center'>Our international experience brings valuable insights to complex cross-border projects.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-8 rounded-md items-center justify-center shadow-md bg-white'>
                        <div className='h-[60px] w-[60px] rounded-md bg-yellow-500 flex items-center justify-center'>
                            <Trophy size={30} color='black' />
                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <h1 className='font-bold'>Innovation</h1>
                            <p className='text-gray-500 text-center'>We embrace cutting-edge solutions and creative approaches to overcome industry challenges.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-8 rounded-md items-center justify-center shadow-md bg-white'>
                        <div className='h-[60px] w-[60px] rounded-md bg-yellow-500 flex items-center justify-center'>
                            <Heart size={30} color='black' />
                        </div>
                        <div className='flex flex-col gap-3 items-center justify-center'>
                            <h1 className='font-bold'>Sustainability</h1>
                            <p className='text-gray-500 text-center'>Environmental responsibility and social impact are integral to our project approach.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black px-[40px] py-[60px] border-b border-gray-800 flex flex-col text-white'>
                <div className='flex flex-col items-center justify-center mb-[40px]'>
                    <h1 className='font-bold text-white sm:text-3xl text-xl'>Our Achievements</h1>
                    <p className='text-gray-500 sm:text-base text-sm'>Numbers that reflect our commitment to excellence and client success.</p>
                </div>
                <div className='sm:grid sm:grid-cols-6 gap-4 flex flex-col'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>84+</h1>
                        <p className='font-semibold sm:text-base text-sm'>Successful Projects</p>
                        <p className='text-gray-500 sm:text-sm text-[12px]'>Delivered across 6 sectors</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>$2.7B+</h1>
                        <p className='font-semibold sm:text-base text-sm'>Total Project Value</p>
                        <p className='text-gray-500 sm:text-sm text-[12px]'>Managed and secured</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>15+</h1>
                        <p className='font-semibold sm:text-base text-sm'>Countries</p>
                        <p className='text-gray-500 sm:text-sm text-[12px]'>Global presence</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>98%</h1>
                        <p className='font-semibold sm:text-base text-sm'>Success Rate</p>
                        <p className='text-gray-500 sm:text-sm text-[12px]'>Project completion</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>5+</h1>
                        <p className='font-semibold sm:text-base text-sm'>Years</p>
                        <p className='text-gray-500 sm:text-sm text-[12px]'>Industry experience</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>120+</h1>
                        <p className='font-semibold sm:text-base text-sm'>Expert Team</p>
                        <p className='text-gray-500 sm:text-sm text-[12px]'>Professionals worldwide</p>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-black border-b border-gray-800 sm:flex sm:flex-row sm:items-center sm:justify-between gap-6 flex flex-col'>
                <div className='sm:w-[50%] flex flex-col gap-2'>
                    <h1 className='sm:text-3xl text-xl text-white font-bold'>Stay Updated with Industry Insights</h1>
                    <p className='text-gray-500 sm:text-sm text-[12px]'>Get the latest updates on EPC projects, funding opportunities, and industry trends directly in your inbox. Join our network of industry professionals.</p>
                </div>
                <div className='sm:w-[50%]'>
                    <form action="" className='flex items-center gap-2 w-[85%]'>
                        <input type="email" className='border border-gray-600 text-gray-600 rounded-md bg-[#1e293b] p-2 w-full' placeholder='Enter your email address' />
                        <button className='bg-yellow-500 px-3 py-2 rounded-md text-sm'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default About