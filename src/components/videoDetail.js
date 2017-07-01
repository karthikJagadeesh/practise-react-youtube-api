import React from 'react';

const VideoDetail = ({ videos }) => {
	if (!videos) {
		return <div>Loading...</div>;
	}

	const videoId = videos.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}>
					{}
				</iframe>
			</div>
			<div className="details">
				<div className="video-title">
					{videos.snippet.title}
				</div>
				<div className="video-desc">
					{videos.snippet.description}
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
