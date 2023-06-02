import React from 'react'
import { BsGraphUpArrow } from "react-icons/bs";
import BarChart from './chart/BarChart';
const UserSetting = () => {
    return (
        <div className='text-black font-bold'>
            <div className='grid grid-cols-2  gap-6'>
                <div className='mt-20'>
<BarChart />
                </div>
                <div className='flex gap-2 mt-20'>
                    <div className='border-[black] h-[200px] flex flex-col items-center justify-center border-[2px] border-solid rounded-md p-4'>
                        <p  className='text-center'>Projected cost at the end of the year</p>
                        <BsGraphUpArrow fontSize={30} className='my-3' />
                   <p className='text-black text-4xl font-boldbold'>780,50€</p> </div>
                    <div className='border-[black] h-[200px] flex flex-col items-center justify-center border-[2px] border-solid rounded-md p-4'>
                        {/* <p>Projected cost at the end of the year</p> */}
                        {/* <BsGraphUpArrow fontSize={30} className='my-3' /> */}
                    </div>   
                       </div>

            </div>

        </div>
    )
}

export default UserSetting