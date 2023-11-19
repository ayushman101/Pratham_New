import { useState, useEffect } from "react";
import "./Player.css";
import PlayerCourse from "./PlayerCourse";
import LoadingSpinner from "./LoadingSpinner";

const Player = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    fetch('https://api/course/courseOne', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: '93792374974',
      }),
    })
      .then(response => response.json())
      .then(data => {
        setVideos(data);
        setCurrentVideo(data[0].videoUrl);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  

  return (
    currentVideo ? (
      <div className="player">
        <div>
          <iframe
            src={currentVideo}
            width="100%"
            height="380"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div>
            <h2>Video Title</h2>
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
                videoTitle={video.title}
                videoDuration={video.duration}
                setVideo={setCurrentVideo}
                videoLink={video.videoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoadingSpinner/>
    </div>
    )
  );
};

export default Player;
