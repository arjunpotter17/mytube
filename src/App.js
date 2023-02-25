import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Substate} from './context/Substate.js'
import {ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail} from './index.js'
import Home from './components/Home';
function App() {
  return (
    <div id='App' sx={{backgroundColor: '#000'}}>
      <Substate>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/video/:id" element={<VideoDetail/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
        <Home/>
      </Substate>
      
      
    </div>
  );
}

export default App;
