// import './App.css';
import {ColorModeContext, useMode} from "./theme"
import {CssBaseline, ThemeProvider} from "@mui/material"
import { Routes, Route } from "react-router-dom"

import Topbar from './scenes/global/topbar';
import Sidebar from './scenes/global/sidebar';

import Dashboard from "./scenes/dashboard"
// import Settings from './scenes/settings';
// import Display from './scenes/display';
// import Create from './scenes/create';
// import Theory from './scenes/theory';


function App() {
  const [theme, colorMode] = useMode()
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              {/* <Route path="/settings" element={<Settings />}></Route>
              <Route path="/display" element={<Display />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/theory" element={<Theory />}></Route> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
