import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

export default function Service() {
    return (
        <div className='flex flex-col items-center justify-center py-12 bg-second'>
            <div className='mb-10 flex items-center flex-col'>
                <h1 className='text-white text-2xl mb-4'>My Service</h1>
                <h2 className='text-3xl font-bold text-thrid'>What I Do</h2>
            </div>
            <div className='flex items-center justify-center gap-12'>
                <div class="xl:w-1/5 md:w-1/2 p-4">
                    <div class="p-6 rounded-2xl border flex flex-col justify-center border-thrid">
                        <img class="rounded object-cover object-center mb-6" src={img1} alt="content" />
                        <h2 class="text-xl text-center text-white font-medium title-font mb-4">Web Developer</h2>
                        <p class="leading-relaxed text-base text-gray-300">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
                <div class="xl:w-1/5 md:w-1/2 p-4">
                    <div class="p-6 rounded-2xl border flex flex-col justify-center border-thrid">
                        <img class="rounded object-cover object-center mb-6" src={img2} alt="content" />
                        <h2 class="text-xl text-center text-white font-medium title-font mb-4">Mobile Developer</h2>
                        <p class="leading-relaxed text-base text-gray-300">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
                <div class="xl:w-1/5 md:w-1/2 p-4">
                    <div class="p-6 rounded-2xl border flex flex-col justify-center border-thrid">
                        <img class="rounded object-cover object-center mb-6" src={img3} alt="content" />
                        <h2 class="text-xl text-center text-white font-medium title-font mb-4">UI/UX Designer</h2>
                        <p class="leading-relaxed text-base text-gray-300">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
