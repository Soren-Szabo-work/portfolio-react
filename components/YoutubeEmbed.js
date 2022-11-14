import Youtube from "react-youtube";

function YoutubeEmbed({ videoId }) {
  return (
    <div className="video-container" id={videoId}>
      <Youtube
        videoId={videoId}
        opts={{
          playerVars: {
            loop: 1,
            rel: 0,
            controls: 1,
            modestbranding: 1,
          },
        }}
      ></Youtube>
    </div>
  );
}

export default YoutubeEmbed;
