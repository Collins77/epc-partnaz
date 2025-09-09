import React from 'react'
import spesh from '../../assets/spesheli.jpg'
import { Cpu, Dot, Globe, Lightbulb, Zap } from 'lucide-react'

const Special = () => {
    return (
        <div>
            <div className='px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 justify-center relative' style={{ backgroundImage: `url(${spesh})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col gap-4'>
                    <div className="flex flex-col gap-2 items-start justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                            Special Projects
                        </h1>
                        <p className="text-gray-300 sm:w-[60%] sm:text-normal text-sm">Pioneering unique and innovative projects that push the boundaries of technology and engineering to shape the future of our world.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-2 items-start w-[50%]'>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>25+</h1>
                            <p className='text-sm text-gray-300'>Unique Projects</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>10+</h1>
                            <p className='text-sm text-gray-300'>Technology Sectors</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>100%</h1>
                            <p className='text-sm text-gray-300'>Innovation Focus</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-white px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl'>Our Specialties</h1>
                    <p className='text-gray-500 text-center w-[60%]'>Unique expertise in developing specialized facilities and infrastructure for tomorrow's technologies.</p>
                </div>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Cpu />
                        </div>
                        <h1 className='font-bold'>Advanced Technology</h1>
                        <p className='text-sm text-gray-500 text-center'>Cutting-edge facilities for AI, quantum computing, and emerging technologies</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Lightbulb />
                        </div>
                        <h1 className='font-bold'>Aerospace & Defense</h1>
                        <p className='text-sm text-gray-500 text-center'>Specialized facilities for space technology and defense applications</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Zap />
                        </div>
                        <h1 className='font-bold'>Innovation Centers</h1>
                        <p className='text-sm text-gray-500 text-center'>Research and development facilities driving technological advancement</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Globe />
                        </div>
                        <h1 className='font-bold'>Smart Cities</h1>
                        <p className='text-sm text-gray-500 text-center'>Smart cities, mixed-use developments, and public facilities</p>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-black flex gap-4'>
                <div className='w-[50%] flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold text-white'>Future-Forward Innovation</h1>
                    <p className='text-gray-300'>Our special projects division focuses on breakthrough technologies and innovative solutions that will define the next generation of infrastructure and industry.</p>
                    <div className='flex flex-col gap-3 text-white'>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Emerging Technologies</h1>
                                <p className='text-gray-300 text-sm'>AI, quantum computing, and next-gen materials</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Sustainable Innovation</h1>
                                <p className='text-gray-300 text-sm'>Carbon-neutral and environmentally positive solutions</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-lg font-semibold'>Global Impact</h1>
                                <p className='text-gray-300 text-sm'>Projects that transform industries and communities</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex gap-4'>
                    <div className='flex flex-col gap-4 w-[50%]'>
                        <div className='flex flex-col gap-2 bg-[#2c1e01] rounded-md text-white p-6'>
                            
                            <h1 className='font-bold'>R&D Facilities</h1>      
                            <p className='text-gray-300 text-sm'>15+ research centers worldwide</p>
                        </div>
                        <div className='flex flex-col gap-2 bg-[#071633] rounded-md text-white p-6'>
                            
                            <h1 className='font-bold'>Technology Partners</h1> 
                            <p className='text-gray-300 text-sm'>Leading tech companies and universities</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-[50%] mt-[40px]'>
                        <div className='flex flex-col gap-2 bg-[#002712] rounded-md text-white p-6'>
                            
                            <h1 className='font-bold'>Innovation Labs</h1>     
                            <p className='text-gray-300 text-sm'>Cutting-edge testing facilities</p>
                        </div>
                        <div className='flex flex-col gap-2 bg-[#231234] rounded-md text-white p-6'>
                            
                            <h1 className='font-bold'>Future Technologies</h1>
                            <p className='text-gray-300 text-sm'>Next-generation solutions`</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f9fafc] px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl'>Breakthrough Projects</h1>
                    <p className='text-gray-500 text-center w-[60%]'>Pioneering projects that showcase our ability to deliver innovative solutions for the most challenging requirements.</p>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Smart City Initiative - Singapore</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>Comprehensive smart city infrastructure with AI-powered systems</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Scope:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>IoT Integration</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$320M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Space Technology Center - USA</h1>
                            <p className='text-[12px] bg-blue-50 rounded-xl text-blue-500 px-2 py-1'>In Progress</p>
                        </div>
                        <p className='text-sm text-gray-500'>Advanced aerospace research and development facility</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Scope:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>Research Facility</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$180M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Quantum Computing Lab - Japan</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>State-of-the-art quantum computing research facility</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Scope:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>Specialized Lab</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$95M</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 flex flex-col gap-3 items-center justify-center'>
                <h1 className='text-3xl font-bold'>Ready to Pioneer the Future?</h1>
                <p className='text-gray-700 w-[60%] text-center'>Let's collaborate on groundbreaking projects that push the boundaries of what's possible.</p>
                <button className='bg-black px-4 py-2 text-white cursor-pointer rounded-md hover:bg-yellow-500 transition-all duration-300'>Explore Special Projects</button>
            </div>
            <div className='px-[40px] py-[60px] bg-black border-b border-gray-800 flex items-center justify-between gap-6'>
                <div className='w-[50%] flex flex-col gap-2'>
                    <h1 className='text-3xl text-white font-bold'>Stay Updated with Industry Insights</h1>
                    <p className='text-gray-500 text-sm'>Get the latest updates on EPC projects, funding opportunities, and industry trends directly in your inbox. Join our network of industry professionals.</p>
                </div>
                <div className='w-[50%]'>
                    <form action="" className='flex items-center gap-2 w-[85%]'>
                        <input type="email" className='border border-gray-600 text-gray-600 rounded-md bg-[#1e293b] p-2 w-full' placeholder='Enter your email address' />
                        <button className='bg-yellow-500 px-3 py-2 rounded-md text-sm'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Special