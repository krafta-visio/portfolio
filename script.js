const images = [

'images/RSTU4013f1d2s_.jpg', 'images/RSTU4017f1d2s_.jpg', 'images/RSTU4035f1d2s_.jpg', 

	
'images/12136560.jpg', 'images/13150058.jpg', 'images/13609523.jpg', 'images/14233850.jpg', 'images/14488014.jpg', 'images/16399632.jpg', 
'images/18532812.jpg', 'images/20023538.jpg', 'images/21118233.jpg', 'images/22624934.jpg', 'images/22963961.jpg', 'images/24084547.jpg', 
'images/24345057.jpg', 'images/25681681.jpg', 'images/2789725.jpg', 'images/2801542.jpg', 'images/29070055.jpg', 'images/30967946.jpg', 
'images/3124774.jpg', 'images/34437458.jpg', 'images/35383538.jpg', 'images/36257761.jpg', 'images/37110957.jpg', 'images/39439077.jpg', 
'images/40324615.jpg', 'images/42479745.jpg', 'images/43983940.jpg', 'images/43999585.jpg', 'images/44508370.jpg', 'images/45982762.jpg', 
'images/46325240.jpg', 'images/47656005.jpg', 'images/51660719.jpg', 'images/52092569.jpg', 'images/54032269.jpg', 'images/54361098.jpg', 
'images/55648193.jpg', 'images/5634508.jpg', 'images/56854697.jpg', 'images/56926970.jpg', 'images/56964961.jpg', 'images/57027202.jpg', 
'images/57325267.jpg', 'images/57638542.jpg', 'images/58735434.jpg', 'images/60282914.jpg', 'images/60388135.jpg', 'images/61318156.jpg', 
'images/64460152.jpg', 'images/6520045.jpg', 'images/65504211.jpg', 'images/65882776.jpg', 'images/65921835.jpg', 'images/66675182.jpg', 
'images/66759496.jpg', 'images/6877635.jpg', 'images/70315568.jpg', 'images/71401689.jpg', 'images/71754272.jpg', 'images/73736420.jpg', 
'images/74345723.jpg', 'images/75055814.jpg', 'images/75143856.jpg', 'images/75322642.jpg', 'images/75647709.jpg', 'images/76721496.jpg', 
'images/79185819.jpg', 'images/79568087.jpg', 'images/80647522.jpg', 'images/81398623.jpg', 'images/83498947.jpg', 'images/83499875.jpg', 
'images/84290158.jpg', 'images/85669431.jpg', 'images/8649043.jpg', 'images/87496104.jpg', 'images/87895981.jpg', 'images/8807163.jpg', 
'images/88883561.jpg', 'images/89593844.jpg', 'images/89873953.jpg', 'images/91204138.jpg', 'images/92328233.jpg', 'images/92431451.jpg', 
'images/93190455.jpg', 'images/93521751.jpg', 'images/94652009.jpg', 'images/94896483.jpg', 'images/95213092.jpg', 'images/96124551.jpg', 
'images/96189433.jpg', 'images/9726165.jpg', 'images/98193023.jpg', 'images/99016115.jpg', 

'images/118464674.jpg', 'images/120069656.jpg', 'images/125271106.jpg', 'images/126822633.jpg', 'images/127363904.jpg', 'images/134821140.jpg', 
'images/146753747.jpg', 'images/158119413.jpg', 'images/159169638.jpg', 'images/171177750.jpg', 'images/185001438.jpg', 'images/188944927.jpg', 
'images/207157526.jpg', 'images/211449448.jpg', 'images/216240551.jpg', 'images/217084670.jpg', 'images/217751111.jpg', 'images/219487341.jpg', 
'images/223147837.jpg', 'images/224889546.jpg', 'images/225820712.jpg', 'images/229975737.jpg', 'images/234931718.jpg', 'images/244267763.jpg', 
'images/245717570.jpg', 'images/257001588.jpg', 'images/260376797.jpg', 'images/262435393.jpg', 'images/264573675.jpg', 'images/272647740.jpg', 
'images/273357539.jpg', 'images/276275283.jpg', 'images/277373613.jpg', 'images/280356359.jpg', 'images/281417999.jpg', 'images/283034790.jpg', 
'images/289111159.jpg', 'images/290955091.jpg', 'images/306174362.jpg', 'images/313959154.jpg', 'images/318096739.jpg', 'images/326532770.jpg', 
'images/328676137.jpg', 'images/335386638.jpg', 'images/339177138.jpg', 'images/346441989.jpg', 'images/354713220.jpg', 'images/355423735.jpg', 
'images/357189915.jpg', 'images/357368936.jpg', 'images/359172829.jpg', 'images/361801402.jpg', 'images/373452428.jpg', 'images/373962845.jpg', 
'images/375375361.jpg', 'images/377311114.jpg', 'images/400768583.jpg', 'images/402158573.jpg', 'images/412614264.jpg', 'images/421807616.jpg', 
'images/425666353.jpg', 'images/433383004.jpg', 'images/434515865.jpg', 'images/438636909.jpg', 'images/449096578.jpg', 'images/455809122.jpg', 
'images/461016400.jpg', 'images/461307996.jpg', 'images/462023757.jpg', 'images/462891025.jpg', 'images/471262072.jpg', 'images/472076840.jpg', 
'images/475271335.jpg', 'images/478399518.jpg', 'images/481237166.jpg', 'images/484383613.jpg', 'images/494731332.jpg', 'images/497517133.jpg', 
'images/501852703.jpg', 'images/503973249.jpg', 'images/504685104.jpg', 'images/504727001.jpg', 'images/505922932.jpg', 'images/511030501.jpg', 
'images/511724672.jpg', 'images/521404792.jpg', 'images/524265074.jpg', 'images/531341975.jpg', 'images/545844798.jpg', 'images/547125886.jpg', 
'images/555324172.jpg', 'images/565439000.jpg', 'images/574249458.jpg', 'images/575893381.jpg', 'images/588684009.jpg', 'images/593782115.jpg', 
'images/593947569.jpg', 'images/594378055.jpg', 'images/598779256.jpg', 'images/601852792.jpg', 'images/602530179.jpg', 'images/615224394.jpg', 
'images/621390813.jpg', 'images/621541681.jpg', 'images/624645231.jpg', 'images/649803819.jpg', 'images/671731337.jpg', 'images/686355481.jpg', 
'images/689447132.jpg', 'images/694165384.jpg', 'images/701382991.jpg', 'images/703549967.jpg', 'images/704759363.jpg', 'images/704934330.jpg', 
'images/707223424.jpg', 'images/722470723.jpg', 'images/723468719.jpg', 'images/728401714.jpg', 'images/729653121.jpg', 'images/732161277.jpg', 
'images/737280547.jpg', 'images/749293386.jpg', 'images/753659449.jpg', 'images/755350114.jpg', 'images/757348782.jpg', 'images/759030743.jpg', 
'images/765596121.jpg', 'images/769989127.jpg', 'images/774982605.jpg', 'images/784429272.jpg', 'images/785122001.jpg', 'images/795597781.jpg', 
'images/799560370.jpg', 'images/815210207.jpg', 'images/816530197.jpg', 'images/819040995.jpg', 'images/827476167.jpg', 'images/828379997.jpg', 
'images/829827298.jpg', 'images/834251858.jpg', 'images/837491645.jpg', 'images/850946697.jpg', 'images/858442889.jpg', 'images/864048918.jpg', 
'images/867992943.jpg', 'images/878796886.jpg', 'images/892500153.jpg', 'images/894872703.jpg', 'images/895641475.jpg', 'images/899130356.jpg', 
'images/902982187.jpg', 'images/909464751.jpg', 'images/915003388.jpg', 'images/918271098.jpg', 'images/920150086.jpg', 'images/925211970.jpg', 
'images/936190695.jpg', 'images/939645109.jpg', 'images/948005854.jpg', 'images/950756621.jpg', 'images/952557170.jpg', 'images/956443252.jpg', 
'images/957475909.jpg', 'images/960200810.jpg', 'images/965678083.jpg', 'images/970791151.jpg', 'images/982691400.jpg', 'images/987853918.jpg' 
];





let currentIndex = 0;

function getItemsPerLoad() {
	const width = window.innerWidth;
	if (width >= 1200) {
		return 30; // Desktop
	} else if (width >= 768) {
		return 20; // Tablet
	} else {
		return 10; // Smartphone
	}
}

function loadImages() {
	const gallery = document.getElementById('gallery');
	const loadingOverlay = document.getElementById('loading-overlay');

	// Tampilkan loading overlay
	loadingOverlay.style.display = 'flex';

	const itemsPerLoad = getItemsPerLoad();
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < itemsPerLoad; i++) {
		const index = currentIndex % images.length; // Ulangi array jika sudah selesai
		const colDiv = document.createElement('div');
		colDiv.className = 'col-6 col-sm-4 col-md-3 col-lg-2 gallery-item';

		const link = document.createElement('a');
		link.href = images[index]; // URL besar untuk popup
		link.className = 'popup-link';

		const img = document.createElement('img');
		img.src = images[index]; // Thumbnail
		img.alt = `Image ${index + 1}`;
		img.className = 'img-fluid rounded';

		link.appendChild(img);
		colDiv.appendChild(link);
		fragment.appendChild(colDiv);

		currentIndex++;
	}
	gallery.appendChild(fragment);

	// Tunggu hingga semua gambar selesai dimuat sebelum menginisialisasi ulang Masonry
	imagesLoaded(gallery, () => {
		new Masonry(gallery, {
			itemSelector: '.gallery-item',
			columnWidth: '.gallery-item',
			percentPosition: true
		});

		// Sembunyikan loading overlay setelah gambar dimuat dan delay 5 detik
		setTimeout(() => {
			loadingOverlay.style.display = 'none';
		}, 500);
	});

	// Inisialisasi Magnific Popup
	$('.popup-link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
}

let isLoading = false;

window.addEventListener('scroll', () => {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isLoading) {
		isLoading = true;
		loadImages();
		setTimeout(() => { 
			isLoading = false; 
		}, 500);
	}
});

window.addEventListener('resize', () => {
	currentIndex = 0;
	const gallery = document.getElementById('gallery');
	gallery.innerHTML = '';
	loadImages();
});

document.addEventListener('DOMContentLoaded', () => {
	loadImages();
});
