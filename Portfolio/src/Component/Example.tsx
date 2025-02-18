import React from 'react'
import { motion } from "motion/react"

const Example = () => {
  return (
    <>
        <motion.div
            className="w-24 h-24 bg-pink-500 rounded-lg"
            animate={{
                scale: 5,
                transition: { duration: 2 }
              }}
            transition={{ duration: 6 }}
        />
    </>
  )
}

export default Example