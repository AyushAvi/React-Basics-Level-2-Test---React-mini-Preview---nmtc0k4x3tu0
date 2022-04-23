import React, {useState} from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {

  const [content, setContent] = useState('Newton School');
  const [fontSize, setFontSize] = useState(10);
  const [padding, setPadding] = useState(5);

  const handleContent = (e) =>{
    setContent(e.target.value)
  }

  const handleFontSize = (e) => {
    setFontSize(e.target.value);
  }

  const handlePadding = (e) =>{
    setPadding(e.target.value)
  }

  const obj = {
    fontSize : fontSize,
    content : content,
    padding : padding
  }

  return (
    <div id="main">
      <div>
        <input type="text" onChange={handleContent} id='contentInput' value={content}/>
        <input type="number" onChange={handleFontSize} value={fontSize} id="fontSizeInput"/>
        <input type="number" onChange={handlePadding} value={padding} id='paddingInput'/>
      </div>
 
 <Preview {...obj}/>
 
    </div>
  )
}


export default App;
