function PlayerCourse({ setVideo, videoLink, videoTitle, videoDuration }) {
  return (
    <div
      className="player_course_content"
      onClick={() => {
        setVideo(videoLink);
      }}
    >
      <h3>{videoTitle}</h3>
      <p>{videoDuration} mins</p>
    </div>
  );
}

export default PlayerCourse;
