import React from 'react'

const TestimonialItem = () => {
  return (
    <>
         <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>
                <dir className="text-4xl">❤</dir>

                  <dir className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </dir>
                  <dir className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src=" 
                   https://st2.depositphotos.com/1009217/8814/v/600/depositphotos_88149872-stock-illustration-geeky-girl-avatar.jpg
                      " alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>John D.</h3>
                      <p>California</p>
                    </div>
                  </dir>
                </div>
    </>
  )
}

export default TestimonialItem