"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si'

const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quam, dolorem quia placeat laborum veniam.",
  info: [
    {
      fieldName: 'Name',
      fieldValue: " Jubayer Ahmed"
    },
    {
      fieldName: 'Phone',
      fieldValue: "+8801753671718"
    },
    // {
    //   fieldName: 'Experience',
    //   fieldValue: "1+ Years"
    // },
    {
      fieldName: 'Discord',
      fieldValue: "jubayerahmed2462"
    },
    {
      fieldName: 'Nationality',
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: 'Email',
      fieldValue: "jubayerahmed2462@gmail.com"
    },
    {
      fieldName: 'Language',
      fieldValue: "Bangla, English"
    },
    // {
    //   fieldName: 'Freelance',
    //   fieldValue: "Not Available"
    // },
  ]
}

import { Tabs,TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area'
import {motion} from 'framer-motion'

//experience Data
// TODO

//Education DAta
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quam, dolorem quia placeat laborum veniam.",
  item: [
    {
      institution: "Programming Hero",
      degree: "Complete Web Development Bootcamp",
      duration:"2024"
    },
  ]
}

//Skills
const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quam, dolorem quia placeat laborum veniam.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"

    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: < FaJs/>,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind.css"
    },
    {
      icon: <FaNode/>,
      name: "Node.js"
    },
  ]
}




const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.6, duration: 0.4, ease: "easeIn" },
        
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          {/* content */}
          <div>
            content
          </div>

        </Tabs>

      </div>

    </motion.div>
  );
};

export default Resume;