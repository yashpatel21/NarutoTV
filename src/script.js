let socket = io();

let player = videojs('player', {
	controls: false,
	autoplay: false,
	loop: true,
	preload: 'auto',
	fluid: true,
});

let pos = 0;
let videos = ['kakashi-loop.mp4', 'itachi-loop.mp4'];

player.src({
	type: 'video/mp4',
	src: '/assets/' + videos[pos],
});

player.play();

function cycleVideo() {
	pos++;
	if (pos >= videos.length) {
		pos = 0;
	}

	player.src({
		type: 'video/mp4',
		src: './assets/' + videos[pos],
	});
	player.play();
}

socket.on('cycle', function () {
	cycleVideo();
});

document.body.addEventListener('click', cycleVideo, true);
