"use client";
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowBarUp, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// components
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title:"Project 01",
    description: "News Fusion is a modern, feature-rich news platform where users can explore the latest articles, trending news, and premium content. The platform supports multiple publishers and provides an engaging user experience with interactive elements.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "Tailwind.css" }, { name: "MongoDB" }],
    image: '/assets/work/project1.png',
    live: "https://newfusion-f31a5.web.app/",
    github: "https://github.com/jubayer718/news-fusion-client",
    
  },
  {
    num: "02",
    category: "Fullstack",
    title:"Project 02",
    description: "BrainBuddies is a fully functional group-study web application designed for collaborative assignment management. Users can create, submit, and review assignments in an organized, secure, and intuitive environment. Built with the MERN stack (MongoDB, Express.js, React, Node.js), the platform is ideal for exam-related activities and academic collaboration.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "Tailwind.css" }, { name: "MongoDB" }],
    image: '/assets/work/project2.png',
    live: "https://brainbuddies-4647a.web.app/",
    github: "https://github.com/jubayer718/brainbuddie-client",
    
  },
  {
    num: "03",
    title:"Project 3",
    category: "Fullstack",
    description: "This project is a crowdfunding platform designed to help individuals, startups, and communities raise funds for their ideas. Users can create campaigns, contribute to causes they believe in, and track progress—all in a seamless and user-friendly interface.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "Tailwind.css" }, { name: "MongoDB" }],
    image: '/assets/work/project3.png',
    live: "https://crowd-funding-85c71.web.app/",
    github: "https://github.com/jubayer718/crowdfund-client",
    
  },
  {
    num: "04",
    title:"Project 4",
    category: "Fullstack",
    description: "This is a modern, full-stack tech blog platform built with Next.js and TypeScript, featuring seamless content management, fast performance, and scalable architecture. It uses RTK Query for efficient data fetching and caching, and stores blog posts, users, and metadata in a PostgreSQL database hosted on Neon. Ideal for developers and tech writers looking to publish and manage articles with a clean, responsive interface.",
    stack: [{ name: "Next.js" },{name:"Typescript"},{ name: "Tailwind.css" }, { name: "PSQL" },{name:"RTK query"},{name:"Neon Database"}],
    image: '/assets/work/project4.png',
    live: "https://bug-to-blog.vercel.app/blog/feed/1",
    github: "https://github.com/jubayer718/bug-to-blog",
    
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);

  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay:2.4, ease:"easeIn" } }}
      className='min-h-[80vh] flex-col justify-center py-12 xl:px-0'
    >
      <div className='container px-10 mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
          {/* outline num */}
            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
            {project.num}
              </div>
              
            {/* project category */}
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize'>
            { project.category} project
              </h2>
              {/* project description */}
              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex flex-wrap gap-4'>
                {
                  project.stack.map((item, index) => {
                    return (
                      <li key={index} className='text-xl text-[#00ff99]'>
                        {item.name}
                        {/* remove the last comma */}
                        {index!== project.stack.length-1 && ","}
                      </li>
                    )
                  })
                }

              </ul>
                
              {/* border */}
              <div className='border border-white/20'> </div>

                {/* button */}
              <div className='flex items-center gap-4'>
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-[#00ff99]'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
              </Link>
                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className='text-white text-3xl group-hover:text-[#00ff99]'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
              </Link>
              </div>
             

             
              </div>
          </div>
          
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                    </div>
                    {/* Image */}
                    <div className='relative w-full h-full '>
                      <Image
                        src={project.image}
                        fill 
                        className=' object-cover'
                        alt={project.title}
                      ></Image>
                    </div>

                  </div>
                  
                </SwiperSlide>)
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-[#00ff99] hover:bg-[#00ff99] text-primary text-[22px] w-[44px] flex justify-center items-center py-2"/>
           </Swiper>

          </div>

        </div>

      </div>
  </motion.section>
  )
};

export default Work;