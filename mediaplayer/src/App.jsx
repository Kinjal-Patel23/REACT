import { useRef, useState } from 'react'

function App() {

  const handleVideo = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const [progress, setProgress] = useState(0);

  let handleTimeUpdate = () => {
    let videoProgress = handleVideo.current;
    let current = videoProgress.currentTime;
    let total = videoProgress.duration;
    let percent = (current / total) * 100;
    setProgress(percent);
  }

  let handleProgressChange = (e) => {
    let videoProgress = handleVideo.current;
    let newTime = (e.target.value / 100) * videoProgress.duration;
    videoProgress.currentTime = newTime;
  }

  let handlePlay = () => {
    let video = handleVideo.current

    if(isPlaying)
    {
      video.pause()
    }
    else
    {
      video.play()
    }

    setIsPlaying(!isPlaying)
  }

  let handleTime1 = () => {
    handleVideo.current.currentTime += 10;
  }

  let handleTime2 = () => {
    handleVideo.current.currentTime -= 10;
  }

  let handleVolumeDown = () => {
    handleVideo.current.volume -= 0.1 
  }

  let handleVolumeUp = () => {
    handleVideo.current.volume += 0.1 
  }

  return (
    <>

      <div className="player-container">
        <video poster='https://mir-s3-cdn-cf.behance.net/project_modules/fs/06455430638769.562c8ae2eaa55.jpg' className="video" ref={handleVideo} onTimeUpdate={handleTimeUpdate}>
          <source src="https://cdn.shopify.com/videos/c/o/v/c5df0e1506db42908dee1d6e749e1f74.mp4" type="video/mp4" />
        </video>
        

        <div className="video-details">
          <p className="video-title">ANATOM - FEEL THE FUTURE</p>
          <input type="range" className="progress-bar" value={progress} onChange={handleProgressChange}/>
        </div>

        <div className="controls">
          <i className="ri-volume-down-line" onClick={handleVolumeDown}></i>
          <i class="ri-replay-10-fill" onClick={handleTime2}></i>
          {
            isPlaying
              ? <i class="ri-pause-circle-line" onClick={handlePlay}></i>
              : <i className="ri-play-fill" onClick={handlePlay}></i>
          }
          
          <i class="ri-forward-10-fill" onClick={handleTime1}></i>
          <i class="ri-volume-up-fill" onClick={handleVolumeUp}></i>
        </div>
      </div>
    </>
  )
}

export default App
