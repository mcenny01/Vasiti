import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

function Hero() {
  return (
    <div className='flex max-w-5xl mx-auto items-center justify-between'>
        <div>
            <h1 className='text-3xl font-bold mb-4 text-black'>Amazing <br/> Experiences from Our <br/> Wonderful Customers</h1>
            <p className='text-xs font-light'>Here is what customers and vendors are saying about <br/> us, you can share your stories with us too.</p>
        </div>
        <div className={styles.heroImageBox}>
            <div className={styles.heroCircle}></div>
            <Image src='/images/Testimonial image 1.png' className='w-96 h-96' alt='' width='536px' height='568px'/>
        </div>
    </div>
    
  )
}

export default Hero

// className='w-96 h-96 bg-orange-200 rounded-full absolute right-0 bottom-0'