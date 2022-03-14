import Header from '../Header'
import Sidebar from '../Sidebar'
import Canvas from '../Canvas'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom' 


let BorderBox = (props) => {
  const stageCanvasRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 100, height: 100})
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      if (stageCanvasRef.current) {
        setDimensions({
          height: stageCanvasRef.current.getBoundingClientRect().height,
          width: stageCanvasRef.current.getBoundingClientRect().width
        })
      }
    }, 500)

  }, [location])

  useEffect(() => {
    if (stageCanvasRef) {
      window.addEventListener("resize", () => {
        setDimensions({
          height: stageCanvasRef.current.getBoundingClientRect().height,
          width: stageCanvasRef.current.getBoundingClientRect().width
        })
      })

      return () => window.addEventListener("resize", () => {
        setDimensions({
          height: stageCanvasRef.current.getBoundingClientRect().height,
          width: stageCanvasRef.current.getBoundingClientRect().width
        })
      })
    }
  }, [])

  useEffect(() => {
    if (stageCanvasRef.current) {
      console.log(dimensions)
      setDimensions({
        height: stageCanvasRef.current.getBoundingClientRect().height,
        width: stageCanvasRef.current.getBoundingClientRect().width
      })
    }
  }, [stageCanvasRef])

  return (
    <div className="borderBox" ref={stageCanvasRef}>
      <Header />
      <Sidebar />
      <Canvas parentHeight={dimensions.height} parentWidth={dimensions.width} location={location}/>
  </div>
  )
}

export default BorderBox