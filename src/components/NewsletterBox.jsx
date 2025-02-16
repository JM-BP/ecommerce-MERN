import React from 'react'

const  NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

    return (
        <div className='text-center bg-gray-400 border-y border-y-gray-700 pt-10 mb-14'>
            <p className='text-2xl font-medium text-black'>Subscribe now & get 20% off</p>
            <p className='text-gray-700 mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat ratione deleniti quis earum repudiandae iusto sequi explicabo esse alias dolor aliquid tempora eveniet molestiae nesciunt sint, exercitationem incidunt ad?
            </p>
            <form className='w-full sm:w-1/2 flex items-center gap-2 mx-auto my-6 pl-3'>
                <input className='w-full sm:flex-1 outline-none placeholder:text-gray-400' type="email" placeholder='Enter your email' />           
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsletterBox