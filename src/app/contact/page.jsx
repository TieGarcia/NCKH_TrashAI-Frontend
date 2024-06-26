"use client"
import {motion} from "framer-motion"
const ContactPage = () => {
    return (
        <motion.div 
        classname="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}
        > 
        About
        </motion.div>
    )
}
export default ContactPage;