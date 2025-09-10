import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className='bg-white px-[40px] py-[60px]'>
                <div className='flex flex-col gap-1 items-center mb-[40px]'>
                    <h1 className='font-bold sm:text-3xl text-xl'>Our Projects</h1>
                    <p className='text-gray-500 text-center sm:w-[60%] sm:text-base text-sm'>Explore our portfolio of successful projects across diverse sectors and regions.</p>
                </div>
                <div className='sm:grid sm:grid-cols-3 flex flex-col gap-8'>
                    <div className='flex justify-between rounded-md shadow-md p-4'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold'>Solar Power Plant - UAE</h1>
                            <p className='text-sm text-gray-500'>Energy & Power</p>
                            <h1 className='font-bold text-lg text-yellow-500'>$450M</h1>
                        </div>
                        <p className='text-green-500 bg-green-50 px-2 py-1 rounded-xl h-fit text-[12px]'>Completed</p>
                    </div>
                    <div className='flex justify-between rounded-md shadow-md p-4'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold'>Offshore Platform - Norway</h1>
                            <p className='text-sm text-gray-500'>Oil & Gas</p>
                            <h1 className='font-bold text-lg text-yellow-500'>$320M</h1>
                        </div>
                        <p className='text-blue-500 bg-blue-50 px-2 py-1 rounded-xl h-fit text-[12px]'>In Progress</p>
                    </div>
                    <div className='flex justify-between rounded-md shadow-md p-4'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold'>Highway Infrastructure - Brazil</h1>
                            <p className='text-sm text-gray-500'>Infrastructure</p>
                            <h1 className='font-bold text-lg text-yellow-500'>$280M</h1>
                        </div>
                        <p className='text-green-500 bg-green-50 px-2 py-1 rounded-xl h-fit text-[12px]'>Completed</p>
                    </div>
                    <div className='flex justify-between rounded-md shadow-md p-4'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold'>Chemical Plant - Singapore</h1>
                            <p className='text-sm text-gray-500'>Industrial Plants</p>
                            <h1 className='font-bold text-lg text-yellow-500'>$190M</h1>
                        </div>
                        <p className='text-green-500 bg-green-50 px-2 py-1 rounded-xl h-fit text-[12px]'>Completed</p>
                    </div>
                    <div className='flex justify-between rounded-md shadow-md p-4'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold'>Water Treatment Facility - India</h1>
                            <p className='text-sm text-gray-500'>Water & Environment</p>
                            <h1 className='font-bold text-lg text-yellow-500'>$150M</h1>
                        </div>
                        <p className='text-blue-500 bg-blue-50 px-2 py-1 rounded-xl h-fit text-[12px]'>In Progress</p>
                    </div>
                    <div className='flex justify-between rounded-md shadow-md p-4'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold'>Smart Grid Project - USA</h1>
                            <p className='text-sm text-gray-500'>Special Projects</p>
                            <h1 className='font-bold text-lg text-yellow-500'>$220M</h1>
                        </div>
                        <p className='text-green-500 bg-green-50 px-2 py-1 rounded-xl h-fit text-[12px]'>Completed</p>
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

export default Projects