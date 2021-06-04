let socket = io();

let player = videojs('player', {
	controls: false,
	autoplay: true,
	loop: true,
	preload: 'auto',
	fluid: true,
});

player.vhs.options_.externHls.GOAL_BUFFER_LENGTH = 60;
player.vhs.options_.externHls.MAX_GOAL_BUFFER_LENGTH = 80;

let pos = 0;
let videos = ['itachi-loop.mp4', 'kakashi-loop.mp4'];

player.src({
	type: 'video/mp4',
	src: './assets/' + videos[pos],
});

function cycleVideo() {
	pos++;
	if (pos >= videos.length) {
		pos = 0;
	}

	player.src({
		type: 'video/mp4',
		src: './assets/' + videos[pos],
	});
}

socket.on('cycle', function () {
	cycleVideo();
});

document.body.addEventListener('click', cycleVideo, true);
