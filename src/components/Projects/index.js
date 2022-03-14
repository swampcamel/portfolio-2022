import projectsData from '../../constants/projects'
import { motion } from 'framer-motion'

const projectsVariant = {
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

const projectVariant = {
  hidden: {
    opacity: 0, y: 25
  },
  visible: {
    opacity: 1, y: 0,
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
}

let Projects = () => {
  return (
    <motion.div className="Projects"
      variants={projectsVariant}
      initial="hidden"
      animate="visible"
      exit="close">
      {projectsData && projectsData.map( ( project, key ) => <motion.div 
        className="projectItem" key={`project${key}`}
        variants={projectVariant}>
                    <div className="projectRow">
            <div className="projectInfo">
              <span>{project.date} / {project.type}</span>
            </div>
            <h3><a href={project.url} target="_blank" rel="nofollow">{project.name}</a></h3>
          </div>
          <div className="technologies">
            {project.technologies.map( (tech, key) => <motion.div 
              initial={{
                opacity: 0, y: -10
              }}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 1.25, type: "spring", stiffness: 300}}
              className="tech" 
              key={`tech${key}`}>
                <img src={process.env.PUBLIC_URL + `/img/${tech === "WordPress" ? "wp-ico.png" : tech === "React" ? "react-ico.png" : tech === "GraphQL" ? "gql-ico.png" : tech === "SharpSpring" ? "ss-ico.png" : tech === "NPL AI" ? "ai-ico.png" : tech === "Shopify" ? "shopify-ico.png" : tech === "Etsy" ? "etsy-ico.png" : "gtapi-ico.png"   }`} />
                <span>{tech}</span>
            </motion.div>)}
          </div>
        </motion.div>)}
    </motion.div>
  )
}

export default Projects