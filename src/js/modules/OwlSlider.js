import $ from 'jquery';

require('owl.carousel');

class OwlSlider {
	constructor() {
		this.els = $('.owl-carousel'); 
		this.initOwl();
	}

	initOwl() {
		this.els.owlCarousel({ 
			loop:true,
	        nav:false,
	        responsive:{
	            0:{
	                items:1
	            },
	            650: {
	            	items: 2
	            },
	            991:{
	                items:3
	            },
	            1600:{
	                items:4
	            }
	        }
    	});
	}
}

export default OwlSlider;