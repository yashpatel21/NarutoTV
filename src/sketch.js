let currentVideo;

let pos = 0;

let videos = ['/assets/itachi-loop.mp4', '/assets/kakashi-loop.mp4'];

let socket = io();

function setup() {
	noCanvas();
	cycleVideo(videos[pos]);
}

function mousePressed() {
	pos++;
	if (pos >= videos.length) {
		pos = 0;
	}

	cycleVideo(videos[pos]);
}

socket.on('cycle', function () {
	console.log('cycled');
	pos++;
	if (pos >= videos.length) {
		pos = 0;
	}

	cycleVideo(videos[pos]);
});

function cycleVideo(video_path) {
	if (currentVideo) {
		currentVideo.stop();
	}
	currentVideo = createVideo([video_path]);

	currentVideo.size(windowWidth, windowHeight);
	currentVideo.loop();
	currentVideo.volume(1);
}
