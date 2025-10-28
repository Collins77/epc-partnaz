import React from 'react'
import infra from '../../assets/infra.jpg'
import { Building2, MapPin, Plane, TrainFront } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Infrastucture = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 justify-center relative' style={{ backgroundImage: `url(${infra})`, backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col gap-4'>
                    <div className="flex flex-col gap-2 sm:items-start items-center justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                            Infrastructure
                        </h1>
                        <p className="text-gray-300 sm:w-[60%] sm:text-normal text-sm sm:text-start text-center">Building the backbone of modern society through innovative infrastructure solutions that connect communities and drive economic growth worldwide.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-2 sm:items-start items-center sm:w-[50%]'>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>20+</h1>
                            <p className='text-sm text-gray-300'>Countries</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>150+</h1>
                            <p className='text-sm text-gray-300'>Projects</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>$25B</h1>
                            <p className='text-sm text-gray-300'>Value Delivered</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-white px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Infrastructure Solutions</h1>
                    <p className='text-gray-500 text-center sm:w-[60%] sm:text-base text-sm'>Comprehensive infrastructure development services from planning and design to construction and lifecycle management.</p>
                </div>
                <div className='sm:grid sm:grid-cols-4 flex flex-col gap-6'>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <MapPin />
                        </div>
                        <h1 className='font-bold'>Transportation</h1>
                        <p className='text-sm text-gray-500 text-center'>Highways, bridges, tunnels, and intelligent transportation systems</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <TrainFront />
                        </div>
                        <h1 className='font-bold'>Rail Systems</h1>
                        <p className='text-sm text-gray-500 text-center'>Metro, light rail, high-speed rail, and freight rail networks</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Plane />
                        </div>
                        <h1 className='font-bold'>Aviation</h1>
                        <p className='text-sm text-gray-500 text-center'>Airports, terminals, runways, and air traffic control systems</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Building2 />
                        </div>
                        <h1 className='font-bold'>Urban Development</h1>
                        <p className='text-sm text-gray-500 text-center'>Smart cities, mixed-use developments, and public facilities</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#f9fafc] px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Landmark Projects</h1>
                    <p className='text-gray-500 text-center sm:w-[60%] sm:text-base text-sm'>Transformative infrastructure projects that showcase our expertise in delivering complex, large-scale developments.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 flex flex-col gap-6'>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Highway Network - Brazil</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>Multi-lane highway with smart traffic management systems</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Scope:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>450 km</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$380M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Metro Extension - Dubai</h1>
                            <p className='text-[12px] bg-blue-50 rounded-xl text-blue-500 px-2 py-1'>In Progress</p>
                        </div>
                        <p className='text-sm text-gray-500'>Automated metro system with advanced passenger facilities</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Scope:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>45 stations</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$520M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Airport Terminal - Singapore</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>State-of-the-art terminal with sustainable design features</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Scope:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>500km²</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$650M</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 flex flex-col gap-3 items-center justify-center'>
                <h1 className='sm:text-3xl text-xl font-bold'>Ready to Build the Future?</h1>
                <p className='text-gray-700 sm:w-[60%] sm:text-base text-sm text-center'>Let's create infrastructure that transforms communities and drives sustainable development.</p>
                <button onClick={() => navigate('/contact')} className='bg-black px-4 py-2 text-white cursor-pointer rounded-md hover:bg-yellow-500 transition-all duration-300'>Start Your Infrastructure Project</button>
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

export default Infrastucture