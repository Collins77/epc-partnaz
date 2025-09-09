import React from 'react'
import industry from '../../assets/indust.jpg'
import { Cog, Cpu, Factory, Zap } from 'lucide-react'

const Plants = () => {
    return (
        <div>
            <div className='px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 justify-center relative' style={{ backgroundImage: `url(${industry})`, backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col gap-4'>
                    <div className="flex flex-col gap-2 items-start justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                            Industrial Plants
                        </h1>
                        <p className="text-gray-300 sm:w-[60%] sm:text-normal text-sm">Designing and delivering world-class industrial facilities with advanced technology, sustainable practices, and optimal operational efficiency.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-2 items-start w-[50%]'>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>15+</h1>
                            <p className='text-sm text-gray-300'>Industries Served</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>85+</h1>
                            <p className='text-sm text-gray-300'>Plants Delivered</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>99.5%</h1>
                            <p className='text-sm text-gray-300'>Uptime Achieved</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-white px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl'>Core Capabilities</h1>
                    <p className='text-gray-500 text-center w-[60%]'>Comprehensive industrial plant solutions from concept design to commissioning and beyond.</p>
                </div>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Factory />
                        </div>
                        <h1 className='font-bold'>Process Engineering</h1>
                        <p className='text-sm text-gray-500 text-center'>Advanced process design and optimization for maximum efficiency</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Cpu />
                        </div>
                        <h1 className='font-bold'>Automation</h1>
                        <p className='text-sm text-gray-500 text-center'>Smart manufacturing systems with AI-driven controls</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Cog />
                        </div>
                        <h1 className='font-bold'>Equipment Design</h1>
                        <p className='text-sm text-gray-500 text-center'>Custom equipment solutions for specialized applications</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Zap />
                        </div>
                        <h1 className='font-bold'>Energy Integration</h1>
                        <p className='text-sm text-gray-500 text-center'>Sustainable energy solutions and waste heat recovery </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#f9fafc] px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl'>Featured Projects</h1>
                    <p className='text-gray-500 text-center w-[60%]'>Showcasing our expertise in delivering complex industrial facilities across various sectors.</p>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Chemical Complex - Singapore</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>Integrated petrochemical facility with advanced automation</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Capacity:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>2M tons/year</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$420M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Steel Plant - India</h1>
                            <p className='text-[12px] bg-blue-50 rounded-xl text-blue-500 px-2 py-1'>In Progress</p>
                        </div>
                        <p className='text-sm text-gray-500'>Modern steel production facility with environmental controls</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Scope:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>5M tons/year</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$650M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Pharmaceutical Plant - Germany</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>State-of-the-art pharmaceutical manufacturing facility</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Capacity:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>500M units/year</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$280M</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 flex flex-col gap-3 items-center justify-center'>
                <h1 className='text-3xl font-bold'>Ready to Optimize Your Industrial Operations?</h1>
                <p className='text-gray-700 w-[60%] text-center'>Partner with us to design and build industrial facilities that set new standards for efficiency and sustainability.</p>
                <button className='bg-black px-4 py-2 text-white cursor-pointer rounded-md hover:bg-yellow-500 transition-all duration-300'>Discuss Your Industrial Project</button>
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

export default Plants