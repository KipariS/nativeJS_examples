const video = document.querySelector('.player');
const canvas = document.querySelector('.paper');
const ctx = canvas.getContext('2d');

const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');



function getVideo() {
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
		.then( localMediaStream => {
			console.log(localMediaStream);
		} )
}





getVideo();






