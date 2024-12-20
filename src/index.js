import "./styles.css";
import image1 from "../assets/carousel-images/image-1.jpg";
import image2 from "../assets/carousel-images/image-2.jpg";
import image3 from "../assets/carousel-images/image-3.jpg";
import image4 from "../assets/carousel-images/image-4.jpg";
import image5 from "../assets/carousel-images/image-5.jpg";
import image6 from "../assets/carousel-images/image-6.jpg";
import image7 from "../assets/carousel-images/image-7.jpg";

import { ImageCarousel } from "./image-carousel";

const images = [image1, image2, image3, image4, image5, image6, image7];

const carousel = new ImageCarousel(images);
carousel.buildSlideContainer();

const body = document.querySelector("body");
body.appendChild(carousel.frame);

