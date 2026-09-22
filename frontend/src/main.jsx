import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

//ALL PRACTICE MODULE EXERCISES ARE FROM : https://claude.ai/artifact/EaUQ9yLxys63iE1LUauL4g
// import Practice from './PRACTICE_FOLDER/Practice.jsx'
// import Practice2 from './PRACTICE_FOLDER/Practice2.jsx'
// import Practice3 from './PRACTICE_FOLDER/Practice3.jsx'
// import Practice4 from './PRACTICE_FOLDER/Practice4.jsx'
// import Practice5 from './PRACTICE_FOLDER/Practice5.jsx'
// import Practice6 from './PRACTICE_FOLDER/Practice6.jsx'
// import Practice7 from './PRACTICE_FOLDER/Practice7.jsx'
// import Practice9 from './PRACTICE_FOLDER/Practice9.jsx'
import Practice10 from './PRACTICE_FOLDER/Practice10.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    {/* <Practice /> */}
    {/* <Practice2/> */}
    {/* <Practice4/> */}
    {/* <Practice5/> */}
    {/* <Practice6/> */}
    {/* <Practice7/ > */}
    {/* <Practice9/ > */}
    <Practice10/ >

  </StrictMode>,
)
