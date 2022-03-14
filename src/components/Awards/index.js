import Award from './Award'
import { motion } from 'framer-motion'

const awardInfo = [
  {
    projectTitle: "Lake Havasu",
    url: "https://www.golakehavasu.com/a/fun/",
    association: "Madden Media",
    description: `Development of several story pages with impactful design for Lake Havasu's "Find Your Element" marketing campaign`,
    awards: [
      {   
        category: "TV, Digital and Integrated Campaign",
        issuer: "2020 HSMAI Adrian Awards",
        date: "Feb 2021",
      }
    ]
  },
  {
    projectTitle: "Traverse City",
    url: "http://demo.maddenmedia.com/2019/content/traverse_city/lighthouses/index.html",
    association: "Madden Media",
    description: "Development of a stylized story page on lighthouses with watercolor effects for a Traverse City marketing campaign",
    awards: [
      {
        category: "Best Feature Design",
        issuer: "Content Marketing Institute",
        date: "Sep 2020",
      },
      {
        category: "2020 Addy Awards",
        issuer: "American Advertising Federation",
        date: "Mar 2020",
      }
    ]
  },
  {
    projectTitle: "Galena Country Tourism",
    url: null,
    association: "Madden Media",
    description: "Development of a content hub to contribute to Galena Coutny's tourism marketing campaign",
    awards: [
      {
        category: "Platinum Hermes Awards: Integrated Marketing Campaign",
        issuer: "Hermes Creative Awards",
        date: "May 2020"
      }
    ]
  }
]

const awardsVariants = {
  hidden: {
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.24
    }
  },
  close: {
    opacity: 0, x: -24
  }
}

const awardVariant = {
  hidden: {
    opacity: 0, y: -24
  },
  visible: {
    opacity: 1, y: 0,
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
}

let Awards = () => {
  return (
    <div className="Awards">
      <motion.div 
        variants={awardsVariants}
        initial="hidden"
        animate="visible"
        exit="close" >
        {awardInfo && awardInfo.map((award, key) => <motion.div key={key}
          variants={awardVariant}>
            <Award awardInfo={award} />
          </motion.div>)
        }
      </motion.div>
    </div>
  )
}

export default Awards