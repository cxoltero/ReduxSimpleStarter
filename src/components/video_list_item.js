import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoHead = video.snippet.title;

  return (
    <li onClick={() => {onVideoSelect(video)}} className="list-group-item" >
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt={videoHead} className="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">{videoHead}</div>
        </div>
      </div>
    </li>
  )

};

export default VideoListItem;