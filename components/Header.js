import React from 'react'

const Header = () => {
    return (
        <div className='grid place-items-center my-9'>
            <h1 className=' font-semibold text-xl'>
                <span className='logo-txt font-semibold text-xl tracking-tight '>Happy</span> News
            </h1>
            <p className='border-b-4 border-teal-900 divide-dotted'> Stay up to date with Happyest's news</p>
            <style jsx>
                {`
            .logo-txt{
                color: rgb(22 78 99);

            }
            `}
            </style>
        </div>
    )
}

export default Header