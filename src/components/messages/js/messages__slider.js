
let sliderBox = [
    {
        img: 'Ellipse 175.png',
        name: 'Viezh Robert',
        location: 'Warsaw, Poland',
        rating: 4.5,
        message: 'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best'
    },
    {
        img: 'Ellipse 176.png',
        name: 'Yessica Christy',
        location: 'Shanxi, China',
        rating: 4.5,
        message: 'I like it because I like to travel far and still can connect with high speed.'
    },
    {
        img: 'Ellipse 177.png',
        name: 'Kim Young Jou',
        location: 'Seoul, South Korea',
        rating: 4.5,
        message: 'This is very unusual for my business that currently requires a virtual private network that has high security.'
    },
];

class Slider {
    constructor(selector) {
        this.selector = selector;
    }

    init() {
        this._render();
    }

    _render() {
        let wrap = document.querySelector(this.selector);
        let items = '.messages__slider_items';
        let selectorPaginations = '.messages__slider_navLeft';
        let html = ``;
        let paginations = ``;
        let wrapper = `<div class="messages__slider_viewBox">
                            <div class="messages__slider_items"></div>
                        </div>
                        
                        <div class="messages__slider_nav main">
                            <div class="messages__slider_navLeft">
                                <div class="messages__slider_pagination messages__slider_pagActive"></div>
                            </div>
                            <div class="messages__slider_navRight">
                                <button class="btn messages__slider_btn"><i class="fas fa-arrow-left"></i></button>
                                <button class="btn messages__slider_btn"><i class="fas fa-arrow-right"></i></button>
                            </div>
                        </div>`;
        
        wrap.insertAdjacentHTML('afterbegin', wrapper);
        
        sliderBox.forEach(el => {
            html += `<div class="messages__slider_item">
            <div class="messages__slider_header">
              
              <div class="messages__slider_headerLeft">
                <img src="./assets/img/messages/${el.img}" alt="${el.name}" class="messages__slider_photo">
                <div class="messages__slider_info">
                  <div class="messages__slider_name">${el.name}</div>
                  <div class="messages__slider_location">${el.location}</div>
                </div>
              </div>
              
              <div class="messages__slider_rating">${el.rating} <i class="fas fa-star messages__slider_star"></i></div>
            </div>
    
            <p class="messages__slider_p">“${el.message}”.</p>
          </div>`;

          paginations += `<div class="messages__slider_pagination"></div>`;
        });

        let wrapItems = document.querySelector(items);
        let wrapPaginations = document.querySelector(selectorPaginations);

        wrapItems.insertAdjacentHTML('afterbegin', html);
        wrapPaginations.insertAdjacentHTML('afterbegin', paginations);
    }
}

export function slider(selector) {
    
    let slide = new Slider(selector);
    slide.init();

}