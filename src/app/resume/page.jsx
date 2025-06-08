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
      fieldName: 'Email',
      fieldValue: "jubayerahmed2462@gmail.com"
    },
    {
      fieldName: 'Nationality',
      fieldValue: "Bangladeshi"
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'


//experience Data
// TODO

// const experience = {

//   title: "My Experience",
//   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, possimus.",

//   item: [
//     {
//       position: "Frontend web developer",
//       duration: "2024-2025",
//       company: "PH Tech Lorem ipsum"
//     },
//     {
//       position: "Frontend web developer",
//       duration: "2024-2025",
//       company: "PH Tech Lorem ipsum"
//     },
//     {
//       position: "Frontend web developer",
//       duration: "2024-2025",
//       company: "PH Tech Lorem ipsum"
//     },
//     {
//       position: "Frontend web developer",
//       duration: "2024-2025",
//       company: "PH Tech Lorem ipsum "
//     },
//   ]
// }


//Education DAta
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "I began my journey in web development through the Programming Hero Full Stack Bootcamp, gaining hands-on experience in both frontend and backend technologies through real-world projects.",
  item: [
    {
      institution: "Programming Hero",
      degree: "Complete Web Development Bootcamp",
      duration: "2024"
    },
    {
      institution: "Programming Hero",
      degree: "Next level Web Development Bootcamp",
      duration: "2025"
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
      icon: < FaJs />,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css"
    },
    {
      icon: <FaNode />,
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
      <div className='container px-10 mx-auto'>
        <Tabs defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>

            {/* experience */}
            {/* <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea
                  className="h-[400px]"

                >
                  <ul className='grid grid-cols-1  lg:grid-cols-2 gap-[30px]'>
                    {experience.item.map((expe, index) => {
                      return (<li key={index}
                        className='bg-[#232329] h-auto py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-[#00ff99]'>{expe.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{expe.position}</h3>
                        <div className='flex items-center gap-3'>
                           dot 
                          <span className='w-[6px] h-[6px] rounded-full bg-[#00ff99]'></span>
                          <p className=''>{expe.company}</p>
                        </div>

                      </li>

                      )
                    })}
                  </ul>

                </ScrollArea>
              </div>

            </TabsContent>
 */}

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea
                  className="h-[400px]"

                >
                  <ul className='grid grid-cols-1  lg:grid-cols-2 gap-[30px]'>
                    {education.item.map((edu, index) => {
                      return (<li key={index}
                        className='bg-[#232329] h-auto py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-[#00ff99]'>{edu.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{edu.degree}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-[#00ff99]'></span>
                          <p className=''>{edu.institution}</p>
                        </div>

                      </li>

                      )
                    })}
                  </ul>

                </ScrollArea>
              </div>

            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{ skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className='text-6xl group-hover:text-[#00ff99] transition-all duration-300 '>
                              {skill.icon}
                             </div>

                            </TooltipTrigger>
                            <TooltipContent>
                             <p className='capitalize'> {skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                       </TooltipProvider>

                      </li>
                    )
                  })
                  }
                </ul>

              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center lg:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{ about.title}</h3>
                <p className='max-w-[600px] mx-auto xl:mx-0 text-white/60'>{ about.description}</p>
              </div>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[630px] mx-auto xl:mx-0'>
                {about.info.map((information, index) => {
                  return (
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-3'>
                    <span className='text-white/70'>  {information.fieldName}:</span>
                     <span className='text-xl'> {information.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </TabsContent>
          </div>

        </Tabs>

      </div>

    </motion.div>
  );
};

export default Resume;