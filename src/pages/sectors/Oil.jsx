import React from 'react'
import oilo from '../../assets/gas.jpg'
import { Dot, Fuel, Ship, Wrench, Zap } from 'lucide-react'

const Oil = () => {
    return (
        <div>
            <div className='px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 justify-center relative' style={{ backgroundImage: `url(${oilo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col gap-4'>
                    <div className="flex flex-col gap-2 items-start justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                            Oil & Gas
                        </h1>
                        <p className="text-gray-300 sm:w-[60%] sm:text-normal text-sm">Delivering comprehensive solutions across the entire oil and gas value chain, from exploration and production to refining and distribution worldwide.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-2 items-start w-[50%]'>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>25+</h1>
                            <p className='text-sm text-gray-300'>Years Experience</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>75+</h1>
                            <p className='text-sm text-gray-300'>Projects Completed</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='text-3xl font-bold text-yellow-500'>$15B+</h1>
                            <p className='text-sm text-gray-300'>Project Value</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-white px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl'>Full-Spectrum Services</h1>
                    <p className='text-gray-500 text-center w-[60%]'>From upstream exploration to downstream processing, we provide comprehensive engineering and consulting services across the entire oil and gas industry.</p>
                </div>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Wrench />
                        </div>
                        <h1 className='font-bold'>Upstream Development</h1>
                        <p className='text-sm text-gray-500 text-center'>Exploration, drilling, and production optimization for onshore and offshore fields</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Fuel />
                        </div>
                        <h1 className='font-bold'>Midstream Infrastructure</h1>
                        <p className='text-sm text-gray-500 text-center'>Pipeline networks, storage facilities, and transportation systems</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Ship />
                        </div>
                        <h1 className='font-bold'>Downstream Processing</h1>
                        <p className='text-sm text-gray-500 text-center'>Refineries, petrochemical plants, and distribution networks</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Zap />
                        </div>
                        <h1 className='font-bold'>Offshore Solutions</h1>
                        <p className='text-sm text-gray-500 text-center'>Platform design, subsea systems, and marine operations</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#f9fafc] px-[40px] py-[60px] flex gap-6 items-center'>
                <div className='w-[50%] flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>Technical Expertise</h1>
                    <p className='text-gray-500 text-sm'>Our multidisciplinary team combines deep industry knowledge with cutting-edge technology to deliver superior results in the most challenging environments.</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='p-6 flex flex-col gap-2 rounded-md shadow-lg bg-white'>
                            <h1 className='font-bold text-sm'>Deepwater Engineering</h1>
                            <p className='text-sm text-gray-500'>Advanced subsea and offshore solutions</p>
                        </div>
                        <div className='p-6 flex flex-col gap-2 rounded-md shadow-lg bg-white'>
                            <h1 className='font-bold text-sm'>Process Optimization</h1>
                            <p className='text-sm text-gray-500'>Enhanced recovery and efficiency</p>
                        </div>
                        <div className='p-6 flex flex-col gap-2 rounded-md shadow-lg bg-white'>
                            <h1 className='font-bold text-sm'>Safety Systems</h1>
                            <p className='text-sm text-gray-500'>Industry-leading safety protocols</p>
                        </div>
                        <div className='p-6 flex flex-col gap-2 rounded-md shadow-lg bg-white'>
                            <h1 className='font-bold text-sm'>Environmental Solutions</h1>
                            <p className='text-sm text-gray-500'>Sustainable and compliant operations</p>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] p-6 bg-amber-100 rounded-md flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>Why Choose Our Oil & Gas Expertise?</h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3 items-center'>
                            <Dot className='text-yellow-500' />
                            <p className='text-gray-500'>25+ years of upstream and downstream experience</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Dot className='text-yellow-500' />
                            <p className='text-gray-500'>Global network of certified contractors and suppliers</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Dot className='text-yellow-500' />
                            <p className='text-gray-500'>Proven track record in challenging environments</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Dot className='text-yellow-500' />
                            <p className='text-gray-500'>Comprehensive safety and environmental compliance</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Dot className='text-yellow-500' />
                            <p className='text-gray-500'>Advanced technology integration and innovation</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl'>Major Projects</h1>
                    <p className='text-gray-500 text-center w-[60%]'>Showcasing our most significant oil and gas projects that demonstrate our capabilities in complex, large-scale developments.</p>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Offshore Platform - North Sea</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>Advanced deepwater drilling platform with enhanced safety systems</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Capacity:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>150k bpd</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$850M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>LNG Terminal - Qatar</h1>
                            <p className='text-[12px] bg-blue-50 rounded-xl text-blue-500 px-2 py-1'>In Progress</p>
                        </div>
                        <p className='text-sm text-gray-500'>State-of-the-art liquefaction and export facility</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Capacity:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>25 MTPA</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$620M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Pipeline Network - Kazakhstan</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>Cross-border pipeline system with advanced monitoring</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Capacity:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>1200 km</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$480M</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold text-3xl text-white'>Global Reach</h1>
                    <p className='text-gray-300 text-center w-[60%]'>Operating across major oil and gas regions worldwide, delivering projects that meet the highest international standards.</p>
                </div>
                <div className='grid grid-cols-5 gap-4'>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-yellow-500 flex items-center justify-center'>
                            <h1 className='font-bold text-xl'>ME</h1>
                        </div>
                        <h1 className='font-bold text-white'>Middle East</h1>
                        <p className='text-sm text-gray-400 text-center'>Major oil producers and offshore projects</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-yellow-500 flex items-center justify-center'>
                            <h1 className='font-bold text-xl'>NS</h1>
                        </div>
                        <h1 className='font-bold text-white'>North Sea</h1>
                        <p className='text-sm text-gray-400 text-center'>Offshore platforms and subsea systems</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-yellow-500 flex items-center justify-center'>
                            <h1 className='font-bold text-xl'>AM</h1>
                        </div>
                        <h1 className='font-bold text-white'>Americas</h1>
                        <p className='text-sm text-gray-400 text-center'>Shale gas and deepwater drilling</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-yellow-500 flex items-center justify-center'>
                            <h1 className='font-bold text-xl'>AF</h1>
                        </div>
                        <h1 className='font-bold text-white'>Africa</h1>
                        <p className='text-sm text-gray-400 text-center'>Northern Africa Oil wells and fields</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-yellow-500 flex items-center justify-center'>
                            <h1 className='font-bold text-xl'>AS</h1>
                        </div>
                        <h1 className='font-bold text-white'>Asia Paciifc</h1>
                        <p className='text-sm text-gray-400 text-center'>LNG terminals and refineries</p>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 flex flex-col gap-3 items-center justify-center'>
                <h1 className='text-3xl font-bold'>Ready to Develop Your Next Oil & Gas Project?</h1>
                <p className='text-gray-700 w-[60%] text-center'>Partner with our experienced team to navigate complex projects from concept to completion. We deliver results that exceed expectations.</p>
                <button className='bg-black px-4 py-2 text-white cursor-pointer rounded-md hover:bg-yellow-500 transition-all duration-300'>Discuss Your Project</button>
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

export default Oil