"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description:"+88017536718",

  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description:"jubayerahmed2462@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:"Magura, Bangladesh",
  }
]

import { motion } from "framer-motion";

const Contact = () => {


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      
      }}
     className="py-6"
    >
      <div className="container px-10 mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
            <form action="https://formsubmit.co/jubayerahmed2462@gmail.com" method="POST" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-[#00ff99]">Let's work together</h3>
              <p className="text-white/60">Have a project in mind or just want to say hi? Fill out the form and I’ll get back to you as soon as possible.</p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="First Name"
                  type="firstname"
                  placeholder="Firstname"
                  required
                />
                <Input
                  name="Last Name"
                  type="lastname"
                  placeholder="Lastname"
                  required
                />
                <Input
                  name="Email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <Input
                  name="Phone"
                  type="phone"
                  placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Select a service
                    </SelectLabel>
                    <SelectItem value="est">Web Development </SelectItem>
                    <SelectItem value="cst">UI/UX Design </SelectItem>
                    <SelectItem value="mst">Logo Design </SelectItem>
                  </SelectGroup>
                </SelectContent>

              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                required
              />
              {/* btn */}
              <Button size="md" className="max-w-40 py-3">
              
                Send message
              
              </Button>


          </form>
        </div>
        {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb:0">
            <ul className="flex flex-col gap-10">

            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6 ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#00ff99] rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{ item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{ item.description}</h3>
                  </div>
                  
              </li>
            )
          })}
            </ul>
        </div>

      </div>
      </div>
      
    </motion.section>
  );
};

export default Contact;