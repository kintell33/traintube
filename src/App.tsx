import { useState } from 'react';
import './App.css';
import VideoList from './components/VideoList';
import YouTubeEmbed from './components/YouTubeEmbed';

function App() {
  const [video, setVideo] = useState('OortiZu_STI');

  const [videoList, _] = useState(["aq_rTTvCIyE", "ZZIekAxLoms", "OortiZu_STI", "KlCeVoWxLEM", "YNVh9n_gaUo", "FHCjpveG5Rw", "rx8dwyjCMKE", "FBBRKA728JM", "vc0ploBvaN0", "PniMc_BCpy8", "4f8LJWSnUtM", "xoE9RyTsL9c", "-PXgGnKhEdQ", "aq_rTTvCIyE", "nYQQtvx0PT0", "Hx6mIwbSBLA"]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <YouTubeEmbed videoIdData={video}></YouTubeEmbed>
      <VideoList videoIds={videoList} selected={video} onClickVideo={(videoId) => { console.log(videoId); setVideo(videoId) }}></VideoList>
    </div>
  );
}

export default App;
