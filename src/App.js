import './App.css';
import {ReactComponent as MenuButton} from './menuButton.svg'
import heroCityImg from './heroCityImg.jpg';
import {ReactComponent as HeroHeader} from './heroHeader.svg'
import {ReactComponent as ProjectButton} from './projectButton.svg'
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="App">
      <div className="menuBoxContainer">
       <div className="issueIcon">
         <p className="issueValue">#1</p>
       </div>
     <div className="issueIcon menuButton">
       <button className="menuButtonContainer">
        <MenuButton style={{
          background: '#363131',
          stroke: 'black',
          paddingTop: '10%'
        }}/>
       </button>
     </div>
      </div>
      <h1 className="heroHeaderName">
        <HeroHeader style={{
          width: '85%'
        }}/>
      </h1>
     <div className="heroLandscape">
      <img  className="heroCityImg" src={heroCityImg} alt="a superhero in front of building landscape" />
     </div>
     <div className="projectButtonContainer">
      <button className="projectButton">
        <ProjectButton />
      </button>
     </div>
     <div className="barcodeBoxContainer">
        <Icon icon="ion:barcode" className='barcodeIcon'/>
       <h2 className="jobTitle">Software Engineer</h2>
     </div>
    </div>
  );
}

export default App;
