import React from 'react';
import design from '../images/designer.svg'
import frontend from '../images/frontend.svg'
import mentor from '../images/mentor.svg'


const SubHero = () => {
  return (
    <div className='relative'>
    <div className='bg-[#7510F7] text-center  flex flex-col gap-10 py-20 px-6 lg:px-60 w-screen'>
        <h1 className="text-2xl font-bold text-white">Hi, I’m Matt. Nice to meet you</h1>
        <h5 className="text-md font-extralight text-white">Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
</h5>
    </div>
  
    <div className="absolute w-screen flex flex-col items-center justify-center top-[20rem]  md:flex-row lg:top-[15rem]">
      <div className="w-[400px] flex flex-col items-center justify-center  px-2 py-6 mx-10 border bg-white rounded-t-lg md:px-0 md:border md:mx-0 md:h-[500px]">
        <img src={design} alt="" className='text-center py-6'/>
        <h5 className='text-center font-bold pb-4'>Designer</h5>
        <h6 className='text-center text-sm light'>I value simple content structure, clean design patterns, and thoughtful interactions</h6>
        <h6 className='text-center pt-6 pb-2 text-[#7510F7]'>Things I enjoy designing:</h6>
        <h6 className='text-center text-sm light'> UX, UI, Web, Mobile, Apps, Logos</h6>
       <h6 className='text-center pt-6 pb-2 text-[#7510F7]'>Design Tools:</h6>
       <h6 className='text-center text-sm light'>Balsamiq Mockups</h6>
       <h6 className='text-center text-sm light'>Figma</h6>
       <h6 className='text-center text-sm light'>Invision</h6>
       <h6 className='text-center text-sm light'>Marvel</h6>
       <h6 className='text-center text-sm light'>Pen & Paper</h6>
       <h6 className='text-center text-sm light'>Sketch</h6>
       <h6 className='text-center text-sm light'>Webflow</h6>
       <h6 className='text-center text-sm light'>Zeplin</h6>
      </div>
      <div className="w-[400px] flex flex-col items-center bg-white justify-center py-6 px-2 mx-10 border md:mx-0 md:h-[500px]">
      <img src={frontend} alt="" className='text-center py-6'/>
        <h5 className='text-center font-bold pb-4'>Front-end Developer</h5>
        <h6 className='text-center text-sm light'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</h6>
        <h6 className='text-center pt-6 pb-2 text-[#7510F7]'>Languages I Speak:</h6>
        <h6 className='text-center text-sm light'> HTML, Pug, Slim, Sass, Less</h6>
       <h6 className='text-center pt-6 pb-2 text-[#7510F7]'>Dev Tools:</h6>
       <h6 className='text-center text-sm light'> Atom</h6>
       <h6 className='text-center text-sm light'>Bitbucket</h6>
       <h6 className='text-center text-sm light'>Bootstrap</h6>
       <h6 className='text-center text-sm light'>Bulma</h6>
       <h6 className='text-center text-sm light'>Codepen</h6>
       <h6 className='text-center text-sm light'>Gitlab</h6>
       <h6 className='text-center text-sm light'>Terminal</h6>
        </div>
      <div className="w-[400px] flex flex-col items-center bg-white justify-center px-2 py-6 mx-10 border rounded-b-lg md:mx-0 md:h-[500px]">
      <img src={mentor} alt="" className='text-center py-6'/>
        <h5 className='text-center font-bold pb-4'>Mentor</h5>
        <h6 className='text-center text-sm light'>I genuinely care about people, and love helping fellow designers work on their craft.</h6>
        <h6 className='text-center pt-6 pb-2 text-[#7510F7]'>Experiences I draw from:</h6>
        <h6 className='text-center text-sm light'> UX,/UI, Product design, Freelancing</h6>
       <h6 className='text-center pt-6 pb-2 text-[#7510F7]'>Mentor Stats:</h6>
       <h6 className='text-center text-sm light'> 5 years experience</h6>
       <h6 className='text-center text-sm light'>26 short courses</h6>
       <h6 className='text-center text-sm light'>42 bootcamps</h6>
       <h6 className='text-center text-sm light'>125+ students</h6>
       <h6 className='text-center text-sm light'>1,400+ mentor sessions</h6>
       <h6 className='text-center text-sm light'>60+ group critiques</h6>
       <h6 className='text-center text-sm light'>12,000+ comments</h6>
      </div>
    </div>
    </div>
  )
}

export default SubHero