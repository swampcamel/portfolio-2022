import './styles/App.scss'
import BorderBox from './components/BorderBox'
import AnimatedCursor from 'react-animated-cursor'

function App() {

  return (
    <div className="App">
      <BorderBox />
      <AnimatedCursor
        innerSize={15}
        outerSize={11}
        color='52, 64, 59'
      />
    </div>
  );
}

export default App
