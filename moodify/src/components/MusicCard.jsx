import React, { useState, useRef, useEffect } from 'react'
import './MusicCard.css'
import happySongs from '../data/happySongs';
import sadSongs from '../data/sadSongs';
import relaxSongs from '../data/relaxSongs';
import excitedSongs from '../data/excitedSongs';
import angrySongs from '../data/angrySongs';

const MusicCard = ({ selectMood, songIndex, setSongIndex }) => {

    const musicRef = useRef(null);
    const [songs, setSongs] = useState([]);
    const [like, setLike] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    useEffect(() => {
        let moodSongs = [];

        switch (selectMood) {
            case 'happy':
                moodSongs = happySongs;
                break;
            case 'sad':
                moodSongs = sadSongs;
                break;
            case 'relax':
                moodSongs = relaxSongs;
                break;
            case 'excited':
                moodSongs = excitedSongs;
                break;
            case 'angry':
                moodSongs = angrySongs;
                break;
            default:
                moodSongs = [];
        }

        console.log(selectMood);
        console.log(moodSongs);

        setSongs(moodSongs);
        const randomSongs = Math.floor(Math.random() * moodSongs.length)
        setSongIndex(randomSongs);

    }, [selectMood, setSongIndex]);

    useEffect(() => {
        if (songs.length > 0) {
            let audio = musicRef.current;
            audio.pause();
            audio.load();
            audio.play()
                .then(() => { setIsPlaying(true); })
                .catch(error => { console.log("Auto play error:", error); })
        }
    }, [songIndex, songs]);

    const currentSong = songs[songIndex];

    let handleTimeUpdate = () => {
        const audio = musicRef.current;
        const current = audio.currentTime || 0;
        const total = audio.duration || 1;
        const percent = (current / total) * 100;
        setProgress(percent);
        setCurrentTime(current);
        setDuration(total);
    };

    let handleProgressChange = (e) => {
        let audioProgress = musicRef.current;
        let newTime = (e.target.value / 100) * audioProgress.duration;
        audioProgress.currentTime = newTime;
    }

    const likeFunction = () => { setLike(!like) }

    let handlePlay = () => {
        let audio = musicRef.current;
        isPlaying ? audio.pause() : audio.play();
        setIsPlaying(!isPlaying)
    }

    let skipTime = (seconds) => musicRef.current.currentTime += seconds;
    const nextSong = () => setSongIndex(n => (n + 1) % songs.length);
    const prevSong = () => setSongIndex(p => (p - 1 + songs.length) % songs.length);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60) || 0;
        const seconds = Math.floor(time % 60) || 0;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    return (
        <>
            {currentSong && (
                <div className="music-card">
                    <audio
                        ref={musicRef}
                        src={currentSong.url}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={() => {
                            const audio = musicRef.current;
                            setDuration(audio.duration);
                            setProgress(0);
                        }}
                    />

                    <div className="music-info">
                        <div className="album-art">
                            <img src={currentSong.image} alt="Album Cover" />
                        </div>
                        <div className="track-info">
                            <p className='playing'>Now Playing</p>
                            <h2>{currentSong.title}</h2>
                            <p>{currentSong.singer}</p>
                        </div>
                        <div className="icons-row">
                            <div className="icon-circle"><i className="fas fa-heart" onClick={likeFunction} style={{ color: like ? "#4A33A8" : "#fff" }}></i></div>
                            <div className="icon-circle"><i class="ri-play-list-add-fill"></i></div>
                            <div className="icon-circle"><i className="fas fa-share-alt"></i></div>
                        </div>
                    </div>

                    <div className='music-button'>
                        <div className="progress">
                            <span>{formatTime(currentTime)}</span>
                            <input
                                type="range"
                                className="progress-bar"
                                min="0"
                                max="100"
                                value={progress}
                                defaultValue="0"
                                onChange={handleProgressChange}
                                style={{
                                    background: `linear-gradient(to right, #a855f7 ${progress}%, #888 ${progress}%)`
                                }}
                            />

                            <span>{formatTime(duration)}</span>
                        </div>

                        <div className="controls">
                            <i class="ri-shuffle-fill"></i>
                            <i className="ri-replay-10-fill replay-icon" onClick={() => skipTime(-10)}></i>

                            <button class="arrow-btn">
                                <div class="arrow-inner">
                                    <i class="ri-arrow-left-s-line" onClick={prevSong}></i>
                                </div>
                            </button>
                            <button class="play-btn">
                                <div class="inner-circle">
                                    {
                                        isPlaying
                                            ? <i class="ri-pause-line" onClick={handlePlay}></i>
                                            : <i class="fa-solid fa-play" onClick={handlePlay}></i>
                                    }
                                </div>
                            </button>
                            <button class="arrow-btn">
                                <div class="arrow-inner">
                                    <i class="ri-arrow-right-s-line" onClick={nextSong}></i>
                                </div>
                            </button>

                            <i class="ri-forward-10-fill replay-icon" onClick={() => skipTime(10)}></i>
                            <i class="ri-sound-module-line"></i>
                        </div>
                    </div>
                </div>
            )}

        </>
    )

}
export default MusicCard