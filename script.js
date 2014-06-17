document.addEventListener('DOMContentLoaded', function(){
	var pop = Popcorn.smart( "audio", "audio2.mp3");

	pop.footnote({
		start: 0,
		end: 5,
		text: "Basement restaurant in the north end of Toronto. Heart of the Ghanese community in Toronto.",
		target: 'subtitles'
	});

	pop.image({
		start: 0,
		end: 5,
		src: 'img/1.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 5,
		end: 10,
		text: 'The main source of light comes from the televisions.',
		target: 'subtitles'
	});

	pop.image({
		start: 5,
		end: 10,
		src: 'img/2.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 10,
		end: 15,
		text: 'Ghana with the goal.',
		target: 'subtitles'
	});

	pop.image({
		start: 10,
		end: 15,
		src: 'img/3.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 15,
		end: 20,
		text: 'Choas! Ghana wins in overtime.',
		target: 'subtitles'
	});

	pop.image({
		start: 15,
		end: 20,
		src: 'img/4.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 20,
		end: 25,
		text: 'The celebration can begin.',
		target: 'subtitles'
	});

	pop.image({
		start: 20,
		end: 25,
		src: 'img/5.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 25,
		end: 30,
		text: 'Flags of all sizes.',
		target: 'subtitles'
	});

	pop.image({
		start: 25,
		end: 30,
		src: 'img/6.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 30,
		end: 35,
		text: 'Songs.',
		target: 'subtitles'
	});

	pop.image({
		start: 30,
		end: 35,
		src: 'img/7.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 35,
		end: 40,
		text: 'Pouring out of restaurants into streets.',
		target: 'subtitles'
	});

	pop.image({
		start: 35,
		end: 40,
		src: 'img/8.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 40,
		end: 45,
		text: 'Whistles and parades all along Jane St.',
		target: 'subtitles'
	});

	pop.image({
		start: 40,
		end: 45,
		src: 'img/9.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 45,
		end: 50,
		text: 'The streets become blurs of red, yellow, and green. With many smiles.',
		target: 'subtitles'
	});

	pop.image({
		start: 45,
		end: 50,
		src: 'img/10.jpg',
		target: 'images'
	});

	pop.footnote({
		start: 50,
		end: 5000,
		text: "It's a great day for the Ghanese community in Toronto.",
		target: 'subtitles'
	});

	pop.image({
		start: 50,
		end: 5000,
		src: 'img/11.jpg',
		target: 'images'
	});


	$('#audio').click(function() {
		pop.play();
		console.log('Some audio please');

		$('html,body').scrollTop(0);
	});




}, false);




