export class ImageCarousel {
    constructor(images) {
        this.images = images;
        this.focusIndex = 0;

        this.frame = document.createElement("div");
        this.frame.classList.add("frame");
        const slideContainer = document.createElement("div");
        slideContainer.classList.add("slide-container");
        this.frame.appendChild(slideContainer);

        const nextButton = document.createElement("button");
        nextButton.classList.add("next-btn");
        nextButton.addEventListener("click", this.next.bind(this));

        const prevButton = document.createElement("button");
        prevButton.classList.add("prev-btn");
        prevButton.addEventListener("click", this.prev.bind(this));

        this.frame.appendChild(nextButton);
        this.frame.appendChild(prevButton);

        const navBar = document.createElement("div");
        navBar.classList.add("nav-bar");

        this.images.forEach((image, index) => {
            const btn = document.createElement("button");
            btn.classList.add("nav-btn");
            btn.addEventListener("click", () => {
                this.setFocus.bind(this)(index);
            })
            navBar.appendChild(btn);
        })

        this.frame.appendChild(navBar);
    }

    

    buildSlideContainer() {
        
        const slideContainer = this.frame.querySelector(".slide-container");
        slideContainer.innerHTML = "";

        this.images.forEach((image, index) => {
            const imgElement = document.createElement("img");
            imgElement.src = image;
            const status = this.getImageStatus(index);
            imgElement.classList.add(status);
            
            slideContainer.appendChild(imgElement);
        })

    }

    getImageStatus(index) {
        const nextIndex = this.focusIndex === this.images.length - 1 ? 0 : this.focusIndex + 1;
        const prevIndex = this.focusIndex === 0 ? this.images.length - 1 : this.focusIndex - 1;
        console.log(nextIndex, prevIndex);
        if (index === this.focusIndex) {
            return "focus";
        } else if (index === nextIndex) {
            return "next";
        } else if (index === prevIndex) {
            return "prev";
        } else {
            return "hidden";
        }
    }

    setFocus(index) {
        if (index < 0 || index > this.images.length) {
            return;
        }
        this.focusIndex = index;
        this.buildSlideContainer();
    }

    next() {
        if (this.focusIndex === this.images.length - 1) {
            this.setFocus(0);
        } else {
            this.setFocus(this.focusIndex + 1);
        }
    }

    prev() {
        if (this.focusIndex === 0) {
            this.setFocus(this.images.length - 1);
        } else {
            this.setFocus(this.focusIndex - 1);
        }
    }
}