import { useState, useEffect } from "react";
import "./Player.css";
import PlayerCourse from "./PlayerCourse";
import LoadingSpinner from "./LoadingSpinner";
import { useLocation} from "react-router-dom";

const Player = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

	const local= useLocation();
	const {course}= local.state

	//console.log(course.Name)

  useEffect(() => {
  	
	setVideos(course.Content)
	setCurrentVideo(course.Content[0])

  }, []);
  

  return (
    currentVideo ? (
      <div className="player">
        <div>
          <iframe
            src={`https://player.vimeo.com/video/${currentVideo}?h=3735cfbee6&title=0&byline=0&portrait=0`}
            width="100%"
            height="380"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div>
            <h2>{course.Name}</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              laboriosam quidem, numquam, ipsum doloremque vitae magnam
            </p>
          </div>
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
