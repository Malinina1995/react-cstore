import React, { Component } from "react";
import { Slide } from "./Slide";
import "./carouselStyle.css";

export class Carousel extends Component {
  state = {
    slideIndex: 0,
    slides: document.getElementsByClassName("mySlides"),
    dots: document.getElementsByClassName("dot"),
    id: null
  };

  componentDidMount = () => {
    this.showSlides();
  };

  plusSlides = n => {
    this.showSlides(true, n);
  };

  componentWillUnmount = () => {
    clearTimeout(this.state.id)
  };

  showSlides = (fromButtons = false, dir = 1) => {
    for (let i = 0; i < this.state.slides.length; i++) {
      this.state.slides[i].style.display = "none";
    }

    const currentIndex = this.state.slideIndex;
    const index =
      (this.state.slideIndex + dir) % (this.state.slides.length + 1) ||
      (dir < 0 && this.state.slides.length) ||
      1;

    for (i = 0; i < this.state.dots.length; i++) {
      this.state.dots[i].classList.remove("active");
    }

    this.setState(
      {
        slideIndex: index
      },
      () => {
        this.state.slides[this.state.slideIndex - 1].style.display = "block";
        this.state.dots[this.state.slideIndex - 1].classList.add("active");
        !fromButtons &&
          this.setState({
            id: setTimeout(this.showSlides.bind(this), 5000)
          });
      }
    );
  };

  dotsActivated = n => {
    this.state.slides[n].style.display = "block";
    this.state.dots[n].classList.add("active");
    this.setState(
      {
        slideIndex: n
      },
      () => {
        this.showSlides();
      }
    );
  };

  render() {
    const width = {
      height: "100%"
    };

    const slidesUrl = [
      "https://static.c-store.ru/upload/files/image/banner-image-id/105/7054_Apple_bz_1920x520.jpg",
      "https://static.c-store.ru/upload/files/image/banner-image-id/888/7156_1920x520.jpg",
      "https://static.c-store.ru/upload/files/image/banner-image-id/457/7055_slider_1920x440.jpg",
      "https://static.c-store.ru/upload/files/image/banner-image-id/639/7056_slider_1920x440.jpg",
      "https://static.c-store.ru/upload/files/image/banner-image-id/138/7088_slider_1920x440.jpg",
      "https://static.c-store.ru/upload/files/image/banner-image-id/205/6688_slider_1920x440.jpg"
    ];

    return (
      <div className="carusel">
        <div className="slideshow-container">
          {slidesUrl.map((url, index) => {
            return <Slide url={url} key={index} />;
          })}

          <button
            className="previous shange-slide_btn"
            onClick={() => {
              this.plusSlides(-1);
            }}
          />
          <button
            className="next shange-slide_btn"
            onClick={() => {
              this.plusSlides(1);
            }}
          />
        </div>
        <div>
          <ul className="dots">
            {slidesUrl.map((url, index) => {
              return (
                <li
                  className="dot"
                  key={index + 10}
                  onClick={() => {
                    this.dotsActivated(index);
                  }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
