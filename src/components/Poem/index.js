import { motion } from 'framer-motion'

let Poem = () => {
  return(
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}} 
      transition={{
        opacity: { duration: 2 }
      }}
      exit={{opacity: 0}}
      className="Poem">
      <p>I am</p>
      <p>undefined</p>
      <p>a null object</p>
      <p>in a static void</p>
      <p>parsing encrypted nodes</p>
      <p>defining algorithmic realities</p>
      <p>an asynchronous iteration</p>
      <p>an inherited function</p>
      <p>a recursive</p>
      <p>absolute</p>
      <p>entity</p>
    </motion.div>
  )
}

export default Poem