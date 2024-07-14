let currentIndex = 0;
let batchSize = 18;
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close-lightbox');
const prevButton = document.getElementById('prev-image');
const nextButton = document.getElementById('next-image');


function showOverlay() {
	overlay.style.display = 'flex';
}

function hideOverlay() {
	setTimeout(function(){
		overlay.style.display = 'none';
	},1500);
}

function loadImages() {
	showOverlay(); // Tampilkan overlay loading

	setTimeout(() => {
		for (let i = 0; i < batchSize; i++) {
			if (currentIndex >= images.length) {
				currentIndex = 0; // Mulai dari awal
			}
			
			const img = document.createElement('img');
			img.src = images[currentIndex];
			img.alt = `Image ${currentIndex + 1}`;
			
			const imageLink = document.createElement('a');
			imageLink.href = img.src;
			// Set image link to image source
			imageLink.appendChild(img);

			// Add click event listener to open lightbox
			imageLink.addEventListener('click', openLightbox);
			
			gallery.appendChild(imageLink);
			currentIndex++;
		}

		hideOverlay(); // Sembunyikan overlay loading setelah selesai memuat
	}, 1000); // Jeda 0.5 detik sebelum memuat foto berikutnya
}



function openLightbox(event) {
	event.preventDefault();
	lightbox.style.display = 'flex';
	lightboxImage.src = this.href;
	updateNavigationButtons();
	// Update button states
}

function closeLightbox() {
	lightbox.style.display = 'none';
}

function updateNavigationButtons() {
	prevButton.disabled = currentIndex === 0;
	nextButton.disabled = currentIndex === images.length - 1;
}

function navigateImage(direction) {
	if (direction === 'prev') {
		currentIndex--;
	} else if (direction === 'next') {
		currentIndex++;
	}
	currentIndex = Math.max(0, Math.min(currentIndex, images.length - 1));
	lightboxImage.src = images[currentIndex];
	updateNavigationButtons();
}

window.addEventListener('load', () => {
	if (window.matchMedia('(max-width: 400px)').matches) {
		batchSize = 8;
	} else if (window.matchMedia('(max-width: 800px)').matches) {
		batchSize = 10;
	} else if (window.matchMedia('(max-width: 1000px)').matches) {
		batchSize = 13;
	} else {
		batchSize = 18;
	}
	loadImages();
});

window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
		loadImages();
	}
});

closeButton.addEventListener('click', closeLightbox);
prevButton.addEventListener('click', ()=>navigateImage('prev'));
nextButton.addEventListener('click', ()=>navigateImage('next'));

loadImages();
