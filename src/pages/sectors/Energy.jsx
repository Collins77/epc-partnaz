import React from 'react'
import solar from '../../assets/solar.jpg'
import { Battery, Dot, Shield, Sun, TrendingUp, Wind, Zap } from 'lucide-react'

const Energy = () => {
    return (
        <div>
            <div className='px-[40px] py-[40px] h-[50vh] flex flex-col gap-5 justify-center relative' style={{ backgroundImage: `url(${solar})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative z-20 flex flex-col sm:items-start items-center gap-4'>
                    <div className="flex flex-col gap-2 sm:items-start items-center justify-center">
                        <h1 className="sm:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                            Energy & Power
                        </h1>
                        <p className="text-gray-300 sm:w-[60%] sm:text-normal text-sm sm:text-start text-center">Powering the future with sustainable energy solutions, advanced grid technologies, and comprehensive power infrastructure development across the globe.</p>
                    </div>
                    <div className='grid grid-cols-3 sm:gap-2 gap-6 items-start sm:w-[50%]'>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>18+</h1>
                            <p className='sm:text-sm text-[12px] text-gray-300 '>Years Experience</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>50+</h1>
                            <p className='sm:text-sm text-[12px] text-gray-300'>Projects Completed</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <h1 className='sm:text-3xl text-xl font-bold text-yellow-500'>15 GW</h1>
                            <p className='sm:text-sm text-[12px] text-gray-300'>Capacity Delivered</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-white px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Our Capabilities</h1>
                    <p className='text-gray-500 text-center sm:w-[60%] sm:text-base text-sm'>Comprehensive expertise across the entire energy value chain, from renewable generation to grid integration and storage solutions.</p>
                </div>
                <div className='sm:grid sm:grid-cols-4 flex flex-col gap-6'>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Sun />
                        </div>
                        <h1 className='font-bold'>Solar Power</h1>
                        <p className='text-sm text-gray-500 text-center'>Utility-scale solar installations, rooftop systems, and energy storage integration</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Wind />
                        </div>
                        <h1 className='font-bold'>Wind Energy</h1>
                        <p className='text-sm text-gray-500 text-center'>Onshore and offshore wind farms with cutting-edge turbine technology</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Battery />
                        </div>
                        <h1 className='font-bold'>Energy Storage</h1>
                        <p className='text-sm text-gray-500 text-center'>Battery systems, pumped hydro, and grid-scale storage solutions</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center hover:shadow-md p-3 rounded-md'>
                        <div className='w-[50px] h-[50px] bg-yellow-500 rounded-md flex items-center justify-center'>
                            <Zap />
                        </div>
                        <h1 className='font-bold'>Grid Modernization</h1>
                        <p className='text-sm text-gray-500 text-center'>Smart grid implementation, transmission upgrades, and distribution optimization</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#f9fafc] px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Featured Projects</h1>
                    <p className='text-gray-500 text-center sm:w-[60%] sm:text-base text-sm'>Showcasing our most impactful energy and power projects that are shaping the future of sustainable energy.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 flex flex-col gap-6'>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Solar Farm Development - Dubai</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>Largest solar installation in the region with innovative tracking systems</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Capacity:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>800 MW</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$450M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Wind Power Complex - Morocco</h1>
                            <p className='text-[12px] bg-blue-50 rounded-xl text-blue-500 px-2 py-1'>In Progress</p>
                        </div>
                        <p className='text-sm text-gray-500'>Offshore wind farm with advanced turbine technology</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Capacity:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>300 MW</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$280M</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-4 bg-white shadow-md rounded-md flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-sm'>Smart Grid Implementation - UAE</h1>
                            <p className='text-[12px] bg-green-50 rounded-xl text-green-500 px-2 py-1'>Completed</p>
                        </div>
                        <p className='text-sm text-gray-500'>Next-generation grid infrastructure with AI-powered optimization</p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Capacity:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>500 MW</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 text-sm'>Value:</p>
                                <h1 className='font-bold text-yellow-500 text-sm'>$220M</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-black flex sm:flex-row flex-col sm:gap-4 gap-6'>
                <div className='sm:w-[50%] flex flex-col gap-4'>
                    <h1 className='sm:text-3xl text-xl font-bold text-white'>Innovation & Technology</h1>
                    <p className='text-gray-300 '>At the forefront of energy innovation, we leverage cutting-edge technologies to deliver superior performance, efficiency, and sustainability in every project.</p>
                    <div className='flex flex-col gap-3 text-white'>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='sm:text-lg text-base font-semibold'>AI-Powered Grid Optimization</h1>
                                <p className='text-gray-300 text-sm'>Advanced algorithms for predictive maintenance and load balancing</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='sm:text-lg text-base font-semibold'>Next-Gen Energy Storage</h1>
                                <p className='text-gray-300 text-sm'>Revolutionary battery technologies and hybrid storage systems</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <Dot color='gold' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='sm:text-lg text-base font-semibold'>Digital Twin Technology</h1>
                                <p className='text-gray-300 text-sm'>Real-time monitoring and simulation for optimal performance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:w-[50%] flex sm:flex-row flex-col gap-4'>
                    <div className='flex flex-col gap-4 sm:w-[50%]'>
                        <div className='flex flex-col gap-2 bg-[#2c1e01] rounded-md text-white p-6'>
                            <TrendingUp color='gold' size={30} />
                            <h1 className='font-bold'>Efficiency Gains</h1>      
                            <p className='text-gray-300 text-sm'>Up to 30% improved performance</p>
                        </div>
                        <div className='flex flex-col gap-2 bg-[#071633] rounded-md text-white p-6'>
                            <Shield className='text-blue-500' size={30} />
                            <h1 className='font-bold'>Reliability</h1> 
                            <p className='text-gray-300 text-sm'>99.9% uptime guarantee</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 sm:w-[50%] sm:mt-[40px]'>
                        <div className='flex flex-col gap-2 bg-[#002712] rounded-md text-white p-6'>
                            <Battery className='text-green-500' size={30} />
                            <h1 className='font-bold'>Storage Innovation</h1>     
                            <p className='text-gray-300 text-sm'>Advanced battery systems</p>
                        </div>
                        <div className='flex flex-col gap-2 bg-[#231234] rounded-md text-white p-6'>
                            <Zap className='text-purple-500' size={30} />
                            <h1 className='font-bold'>Smart Integration</h1>
                            <p className='text-gray-300 text-sm'>Seamless grid connectivity</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[40px] py-[60px] bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 flex flex-col gap-3 items-center justify-center'>
                <h1 className='sm:text-3xl text-xl font-bold'>Ready to Power Your Next Project?</h1>
                <p className='text-gray-700 sm:w-[60%] sm:text-base text-sm text-center'>Partner with us to bring cutting-edge energy solutions to life. From concept to commissioning, we deliver excellence every step of the way.</p>
                <button className='bg-black px-4 py-2 text-white cursor-pointer rounded-md hover:bg-yellow-500 transition-all duration-300'>Start Your Energy Project</button>
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

export default Energy