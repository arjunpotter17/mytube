import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Substate} from './context/Substate.js'
import {ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail} from './index.js'
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
      </Substate>
      
      
    </div>
  );
}

export default App;
