/*--------------------The following code is for a carousel--------------------*/

var objCarousel = {
	theSlides: document.getElementsByClassName("sheet-info"),
	allSlides: 2,
	currentSlide: 0,
	loadSlide: function () {
			this.moveSlide(this.currentSlide);
		},
	moveSlide: function (index) {
			var s = 0;
			if (index >= 0 && index <= this.allSlides) {
				for (s = 0; s <= this.allSlides; s++) {
					if (s === index) {
						this.theSlides[s].style.display = "block";
					} else {
						this.theSlides[s].style.display = "none";
					}
				}
			}
		},
	nextSlide: function () {
			if (this.currentSlide === this.allSlides) {
				this.currentSlide = 0;
			} else {
				this.currentSlide += 1;
			}
		
			this.moveSlide(this.currentSlide);

		},

	prevSlide: function () {
			if (this.currentSlide === 0) {
				this.currentSlide = this.allSlides;
			} else {

				this.currentSlide -= 1;

			}

			this.moveSlide(this.currentSlide);

		}
};

objCarousel.loadSlide();

/*--------------------End of code for a carousel--------------------*/