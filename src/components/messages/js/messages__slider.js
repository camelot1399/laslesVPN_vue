let sliderBox = [
    {
        id: 1,
        img: 'Ellipse 175.png',
        name: 'Viezh Robert',
        location: 'Warsaw, Poland',
        rating: 4.5,
        message: 'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best'
    },
    {
        id: 2,
        img: 'Ellipse 176.png',
        name: 'Yessica Christy',
        location: 'Shanxi, China',
        rating: 4.5,
        message: 'I like it because I like to travel far and still can connect with high speed.'
    },
    {
        id: 3,
        img: 'Ellipse 177.png',
        name: 'Kim Young Jou',
        location: 'Seoul, South Korea',
        rating: 4.5,
        message: 'This is very unusual for my business that currently requires a virtual private network that has high security.'
    },
    {
        id: 4,
        img: 'Ellipse 175.png',
        name: 'Viezh Robert',
        location: 'Warsaw, Poland',
        rating: 4.5,
        message: 'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best'
    },
    {
        id: 5,
        img: 'Ellipse 176.png',
        name: 'Yessica Christy',
        location: 'Shanxi, China',
        rating: 4.5,
        message: 'I like it because I like to travel far and still can connect with high speed.'
    },
    {
        id: 6,
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
        this.offset = 0;
        this.currentSlideActive = 1;
        this.totalSlide = 0;
    }

    init() {
        this._render();
        this._initHandler();
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
                            <div class="messages__slider_navLeft"></div>
                            <div class="messages__slider_navRight">
                                <button class="btn messages__slider_btn" data-control="left"><i class="fas fa-arrow-left" data-control="left"></i></button>
                                <button class="btn messages__slider_btn" data-control="right"><i class="fas fa-arrow-right" data-control="right"></i></button>
                            </div>
                        </div>`;
        
        wrap.insertAdjacentHTML('afterbegin', wrapper);
        
        sliderBox.forEach( (el, index) => {
            html += `<div class="messages__slider_item" data-id="${el.id}" id="slideItem_${el.id}">
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
            if (index === 0) {
                paginations += `<div class="messages__slider_pagination messages__slider_pagActive" id="paginationId_${el.id}"></div>`;
            } else {
                paginations += `<div class="messages__slider_pagination" id="paginationId_${el.id}"></div>`;
            }
          
        });

        let wrapItems = document.querySelector(items);
        let wrapPaginations = document.querySelector(selectorPaginations);

        wrapItems.insertAdjacentHTML('afterbegin', html);
        wrapPaginations.insertAdjacentHTML('afterbegin', paginations);
    }
    _initHandler() {
        let btnBox = document.querySelector('.messages__slider_navRight');
        let viewBox = document.querySelector('.messages__slider_viewBox');
        this.totalSlide = sliderBox.length;

        btnBox.addEventListener('click', (el) => {

            if (el.target.dataset.control === 'left') {
                
                console.log(`this.currentSlideActive: ${this.currentSlideActive}, this.totalSlide: ${this.totalSlide}`);
                if (this.currentSlideActive !== 1) {
                    this.currentSlideActive--;
                    let nextSlide = document.querySelector('#slideItem_' + this.currentSlideActive);
                    console.log(nextSlide);
                    this.offset = this.offset + nextSlide.offsetWidth;
                    viewBox.style.left = this.offset + 'px';

                    document.querySelector('.messages__slider_pagActive').classList.remove('messages__slider_pagActive');
                    document.querySelector('#paginationId_' + this.currentSlideActive).classList.add('messages__slider_pagActive');
                    
                }
                
            }

            if (el.target.dataset.control === 'right') {
                console.log(`this.currentSlideActive: ${this.currentSlideActive}, this.totalSlide: ${this.totalSlide}`);

                if (this.currentSlideActive <= this.totalSlide - 1) {
                    this.currentSlideActive++;
                    let nextSlide = document.querySelector('#slideItem_' + this.currentSlideActive);
                    console.log(nextSlide);

                    this.offset = this.offset - nextSlide.offsetWidth;
                    viewBox.style.left = this.offset + 'px';

                    document.querySelector('.messages__slider_pagActive').classList.remove('messages__slider_pagActive');
                    document.querySelector('#paginationId_' + this.currentSlideActive).classList.add('messages__slider_pagActive');
                    
                }
                
                
            }

        })
    }
}

export function slider(selector) {
    
    let slide = new Slider(selector);
    slide.init();

}