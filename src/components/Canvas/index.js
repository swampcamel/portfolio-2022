import Sketch from "react-p5";
import { useEffect, useState } from "react"


let Canvas = (props) => {
	const [p5, setP5] = useState(null)

	useEffect(() => {
		// console.log("hit")
		if(p5) {
			p5.resizeCanvas(props.parentWidth-4, props.parentHeight-4)
		}
	}, [props, p5])

	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		setP5(p5)
		p5.createCanvas(props.parentWidth-4, props.parentHeight-4).parent(canvasParentRef)
		p5.noStroke()
		p5.max_distance = p5.dist(0,0, p5.width, p5.height)
		p5.fill(240, 240, 243)
	};

	const draw = (p5) => {
		p5.background(182, 204, 196)
		for (let i = 0; i <= p5.width; i += 20) {
			for (let j = 0; j <= p5.height; j += 20) {
				let size = p5.dist(p5.mouseX, p5.mouseY, i, j);
				size = (size / p5.max_distance) * 52;
				p5.ellipse(i, j, size, size);
			}
		}
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default Canvas