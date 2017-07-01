import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = props => {
	const videoList = props.videos.map(video =>
		<VideoListItem key={video.etag} video={video} />
	);

	return (
		<ul className="col-sm-6 list-group">
			{videoList}
		</ul>
	);
};

export default VideoList;
