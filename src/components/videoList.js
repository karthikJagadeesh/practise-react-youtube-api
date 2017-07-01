import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = props => {
	const videoList = props.videos.map(video =>
		<VideoListItem
			key={video.etag}
			video={video}
			onVideoSelect={props.onVideoSelect}
		/>
	);

	return (
		<ul className="col-md-4 list-group">
			{videoList}
		</ul>
	);
};

export default VideoList;
