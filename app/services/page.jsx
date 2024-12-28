'use client'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { Description } from '@radix-ui/react-dialog'

const services = [
  {
    num: "01",
    title: "ReactJS Development",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    href: ''
  },
  {
    num: "02",
    title: "NextJS Development",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    href: ''
  },
  {
    num: "01",
    title: "UI/UX Development",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    href: ''
  },
  {
    num: "01",
    title: "Node Js Development",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    href: ''
  },
]

import { motion } from 'framer-motion'
const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}}>
          {services.map((serivece,index)=>{
            return(
              div
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services