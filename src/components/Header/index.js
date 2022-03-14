import Menu from '../Menu'

let Header = () => {
  return (
    <div className="Header">
      <h1>
        <span className="letter">D</span>
        <span className="letter">a</span>
        <span className="letter">n</span>
        <span className="letter">i</span>
        <span className="letter">e</span>
        <span className="letter">l</span>
        <span>&nbsp;</span>
        <span className="letter">B</span>
        <span className="letter">r</span>
        <span className="letter">o</span>
        <span className="letter">c</span>
        <span className="letter">k</span>
        <span>&nbsp;</span>
        <span className="letter">M</span>
        <span className="letter">a</span>
        <span className="letter">c</span>
        <span className="letter">e</span></h1>
      <h2><span className="subtitle" data-text="Designer"><span>Designer</span></span><span className="subtitle" data-text="Developer"><span>Developer</span></span><span className="subtitle" data-text="Strategist"><span>Strategist</span></span></h2>
      <Menu />
    </div>
  )
}

export default Header