import { useState, useEffect } from "react";
import "./Player.css";
import PlayerCourse from "./PlayerCourse";
import LoadingSpinner from "./LoadingSpinner";
import { useLocation} from "react-router-dom";

const Player = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

	const local= useLocation();
	const {course}= local.state

	//console.log(course.Name)

  useEffect(() => {
  	
	setVideos(course.Content)
	setCurrentVideo(course.Content[currentVideoIndex])

  }, []);
  

	const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
	    setCurrentVideo(course.Content[currentVideoIndex])
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
	let iframe = document.getElementById('myVimeoPlayer');

  	// Create a Vimeo player object
  	let player = new Vimeo.Player(iframe);


    if(isPlaying){
	player.play()
    }
	else
	  player.pause()
  };

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
	    setCurrentVideo(course.Content[currentVideoIndex])
    }
  };


  return (
    currentVideo ? (
      <div className="player">
        <div>
          <iframe
            src={`https://player.vimeo.com/video/${currentVideo}?h=3735cfbee6&title=0&byline=0&portrait=0`}
            width="100%"
	    id="myVimeoPlayer"
            height="380"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div>
            <h2>{course.Name}</h2>
            <hr />
            <p>
	    	{course.Brief_Desc}
            </p>
          </div>
	   <button className="styleButton" onClick={handlePrevious}>
            Previous
          </button>
          <button className="styleButton" onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button className="styleButton" onClick={handleNext}>
            Next
          </button>
        </div>
        <div>
          <h2 className="player_course_heading" style={{ marginBottom: "1rem" }}>
            Course Content
          </h2>
          <div>
            {videos.map((video, index) => (
              <PlayerCourse
                key={index}
                videoTitle={course.Name}
                videoDuration={video.duration}
                setVideo={setCurrentVideo}
                videoLink={video}

              />
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
     		Video Screen
	    <LoadingSpinner/>
    </div>
    )
  );
};

export default Player;
