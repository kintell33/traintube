import YouTube from 'react-youtube';


export default function YouTubeEmbed({ videoIdData }: { videoIdData: string }) {

  const opts = {
    height: '500',
    width: '1000',
    rel:0,
    playerVars: {
      modestbranding:1,
      rel:0,
      showinfo:0,
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      color:'white',
      controls:0
    },
  };

  function onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <YouTube videoId={videoIdData} opts={opts} onReady={onReady} />
  );
}