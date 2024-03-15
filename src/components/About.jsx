import React from 'react'

const About = () => {
  return (
    <div  name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo debitis porro cupiditate quasi nesciunt nisi suscipit exercitationem nobis consequuntur quam cumque sint perspiciatis qui dolorum dolores voluptatibus, inventore culpa eveniet nostrum laboriosam est? In dicta fugit temporibus illum ex sint blanditiis reprehenderit voluptate totam ipsam magnam veritatis, culpa optio officiis.</p>
        <br />
        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem voluptatem quidem, fugit eligendi aperiam amet dolorem ut id ullam, nemo neque placeat. Rerum reprehenderit soluta enim cum labore similique aliquid sint nesciunt veritatis, a id eius saepe totam sit! Veniam numquam minima, quaerat praesentium delectus enim assumenda quia nihil!</p>
      </div>
    </div>
  )
}

export default About