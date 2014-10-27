(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});
	
	app.controller('GalleryController', function(){
		this.current = 0; 
    
		this.setCurrent = function(val){
			this.current = val || 0;  
		};
    });
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: '...',
			canPurchase: true,
			soldOut: true,
			images: [
				{
					full: 'images/dodecahedron-01-full.jpg',
					thumb: 'images/dodecahedron-01-thumb.jpg'
				}
				{
					full: 'images/dodecahedron-02-full.jpg',
					thumb: 'images/dodecahedron-02-thumb.jpg'
				}
				{
					full: 'images/dodecahedron-03-full.jpg',
					thumb: 'images/dodecahedron-03-thumb.jpg'
				}
			]
		}
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '...',
			canPurchase: false,
			soldOut: true,
			images: [
				{
					full: 'images/pentagonal-01-full.jpg',
					thumb: 'images/pentagonal-01-thumb.jpg'
				}
				{
					full: 'images/pentagonal-02-full.jpg',
					thumb: 'images/pentagonal-02-thumb.jpg'
				}
				{
					full: 'images/pentagonal-03-full.jpg',
					thumb: 'images/pentagonal-03-thumb.jpg'
				}
			]
		}
		{
			name: 'Uncut Gem',
			price: 10.95,
			description: '...',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'images/uncut-01-full.jpg',
					thumb: 'images/uncut-01-thumb.jpg'
				}
				{
					full: 'images/uncut-02-full.jpg',
					thumb: 'images/uncut-02-thumb.jpg'
				}
				{
					full: 'images/uncut-03-full.jpg',
					thumb: 'images/uncut-03-thumb.jpg'
				}
			]
		}
	];
})();