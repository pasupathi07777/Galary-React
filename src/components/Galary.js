import React from 'react'


const Galary = ({details}) => {
    
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 p-[24px]  bg-slate-300 gap-[24px]'>
            {/* <h1 className='absolute font-bold text-[32px] text-black mx-auto text-center w-full capitalize'>galary</h1> */}
            {details.map((e, i) => {
                return <div key={i} className="flex flex-col gap-2 rounded overflow-hidden h-fit    ">
                    <img src={e.photo} alt="Dog-image" className="rounded-b" />
                    <p className='font-medium text-center  capitalize'>{e.name}</p>
                </div>
 
            })}

        </div>
    )
}

export default Galary