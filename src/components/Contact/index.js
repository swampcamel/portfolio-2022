import { motion } from 'framer-motion'

const contactInfo = [
  {
    text: "linkedin",
    link: "https://www.linkedin.com/in/dbmace/"
  },
  {
    text: "instagram",
    link: "https://www.instagram.com/ecaptain/"
  },
  {
    text: "github",
    link: "https://github.com/swampcamel"
  },
  {
    text: "email",
    link: "mailto:dbm@dbmace.dev"
  }
]

const ulVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  },
  close: {
    opacity: 0, x: -24
  }
}

const liVariant = {
  hidden: {
    opacity: 0,
    y: 32
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 600
    }
  }
}

let Contact = () => {
  return (
    <div className="Contact">
      <motion.ul variants={ulVariant} initial="hidden" animate="visible" exit="close">
        {contactInfo.map((info, key)=> <motion.li variants={liVariant} key={key}>
          <a target="_blank" rel="nofollow noreferrer" href={info.link}>
            <img src={process.env.PUBLIC_URL + '/img/exlink.svg'} />
            <span>{info.text}</span>
          </a>
        </motion.li>)}
      </motion.ul>
    </div>
  )
}

export default Contact