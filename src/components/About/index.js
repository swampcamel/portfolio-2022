import { motion } from 'framer-motion'

const profileVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    },
  },
  close: {
    opacity: 0, x: -24
  }
}

const lineVariant = {
  hidden: {
    opacity: 0,
    x: -24
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 1.2
    }
  }
}

const stackVariant = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 1.2
    }
  }
}

let About = () => {
  return (
    <div className="About">
      <div className="profile">
        <motion.div variants={profileVariant} initial="hidden" animate="visible" exit="close" className="profileContent">
          <motion.h2 variants={lineVariant}>bio</motion.h2>
          <motion.div variants={lineVariant} className="divider"></motion.div>
          <motion.p variants={lineVariant}>Beneath the geminid sun, bourne  nigh the churning oceans of olde California</motion.p>
          <motion.p variants={lineVariant}>Raised yon snow-crowned peaks of majestic Utah</motion.p>
          <motion.p variants={lineVariant}>Replanted amidst the sand-blown deserts of enigmatic Arizona</motion.p>
          <motion.p variants={lineVariant}>A student of film by way of the University of Utah</motion.p>
          <motion.p variants={lineVariant}>A coder trained by Epicodus in Portland</motion.p>
          <motion.p variants={lineVariant}>Writer, Musician, Philosopher, Esotericist</motion.p>
          <motion.p variants={lineVariant}>Student, Teacher, Partner, Leader</motion.p>
          <motion.h2 variants={stackVariant}>stack</motion.h2>
          <motion.div variants={stackVariant} className="divider"></motion.div>
          <motion.h3 variants={stackVariant}>JavaScript</motion.h3>
          <motion.div variants={stackVariant} className="stackRow">
            <span>ECMAScript 5-12</span>
            <span>TypeScript</span>
            <span>jQuery</span>
            <span>React</span>
            <span>Electron</span>
            <span>Next.JS</span>
            <span>Gutenberg</span>
            <span>Angular</span>
            <span>Vue</span>
            <span>Node.JS</span>
          </motion.div>
          <motion.h3 variants={stackVariant}>php</motion.h3>
          <motion.div variants={stackVariant} className="stackRow">
            <span>WordPress</span>
            <span>Drupal</span>
            <span>Laravel</span>
          </motion.div>
          <motion.h3 variants={stackVariant}>CSS</motion.h3>
          <motion.div variants={stackVariant} className="stackRow">
            <span>SCSS</span>
            <span>LESS</span>
            <span>Tailwind</span>
            <span>Bootstrap</span>
            <span>Material UI</span>
          </motion.div>
          <motion.h3 variants={stackVariant}>Databases</motion.h3>
          <motion.div variants={stackVariant} className="stackRow">
            <span>MySQL</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>MariaDB</span>
            <span>DynamoDB</span>
            <span>Redis</span>
            <span>GraphQL</span>
          </motion.div>
          <motion.h3 variants={stackVariant}>Design</motion.h3>
          <motion.div variants={stackVariant} className="stackRow">
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>Figma</span>
            <span>XD</span>
            <span>Sketch</span>
            <span>Maya</span>
          </motion.div>
          <motion.h3 variants={stackVariant}>Development</motion.h3>
          <motion.div variants={stackVariant} className="stackRow">
            <span>Git</span>
            <span>Webpack</span>
            <span>Gulp</span>
            <span>Visual Studio</span>
            <span>Postman API</span>
            <span>Jasmine</span>
            <span>Karma</span>
          </motion.div>
          <motion.h3 variants={stackVariant}>Project Management</motion.h3>
          <motion.div variants={stackVariant} className="stackRow">
            <span>Agile</span>
            <span>Salesforce</span>
            <span>Jira</span>
            <span>Notion</span>
            <span>Asana</span>
            <span>Trello</span>
            <span>Evernote</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About