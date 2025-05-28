function renderViewedCourses(courses) {
    const viewedList = document.getElementById("viewedList");
    if (!viewedList) {
        console.error('Element with id "viewedList" not found.');
        return;
    }
    viewedList.innerHTML = '';

    let copyCourse = [...courses]

    filtered = copyCourse.sort(() => Math.random() - 0.5);
    
    filtered.forEach(course => {
        const {
            id,
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;
        
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
      <a href="./amin.html?id=${id}" class="card">
        <main class="card__content">
          <img src="/assets/${img}" width="236" height="132" alt="${title}">
        </main>
        <header class="card__header">
          <h4 class="card__title">${title}</h4>
          <p class="card__author">${author}</p>
        </header>
        <footer class="card__footer">
          <div class="card__stars-wrapper">
            <span class="card__rating">${rating && !isNaN(rating) ? rating.toFixed(1) : '0.0'}</span>
            <div class="card__stars">${renderStars(rating)}</div>
            <span class="card__reviews">(${comments && Array.isArray(comments) ? comments.length : 0})</span>
          </div>
          <div class="card__price">
            <span class="card__price--current">$${discountPrice !== undefined ? discountPrice : price}</span>
            <span class="card__price--previous">$${price}</span>
          </div>
          <div class="card__badge">Bestseller</div>
        </footer>
      </a>
    `;
        
        viewedList.appendChild(slide);
    });
    
  
    if (typeof Swiper !== "undefined") {
        new Swiper('.viewed-slider', {
            slidesPerView: 5,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true,
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 } 
            }
        });
    } else {
        console.error('Swiper is not defined. Please make sure Swiper library is loaded.');
    }
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
        '<i class="fas fa-star"></i>'.repeat(fullStars) +
        (halfStar ? '<i class="fas fa-star-half-alt"></i>' : '') +
        '<i class="far fa-star"></i>'.repeat(emptyStars)
    );
}

renderViewedCourses(courses);


function renderLearnList(courses) {
    const learnList = document.getElementById("learnList");
    if (!learnList) {
        console.error('Element with id "learnList" not found.');
        return;
    }

    let copyCourse = [...courses]

    filtered = copyCourse.sort(() => Math.random() - 0.5);
    
    learnList.innerHTML = ''; 
    
    filtered.forEach(course => {
        const {
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;
        
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <li class="card">
        <main class="card__content">
          <img src="/assets/${img}" width="236" height="132" alt="${title}">
        </main>
        <header class="card__header">
          <h4 class="card__title">${title}</h4>
          <p class="card__author">${author}</p>
        </header>
        <footer class="card__footer">
          <div class="card__stars-wrapper">
            <span class="card__rating">${rating && !isNaN(rating) ? rating.toFixed(1) : '0.0'}</span>
            <div class="card__stars">${renderStars(rating)}</div>
            <span class="card__reviews">(${comments && Array.isArray(comments) ? comments.length : 0})</span>
          </div>
          <div class="card__price">
            <span class="card__price--current">$${discountPrice !== undefined ? discountPrice : price}</span>
            <span class="card__price--previous">$${price}</span>
          </div>
          <div class="card__badge">Bestseller</div>
        </footer>
      </li>
        `;
        
        learnList.appendChild(slide);
    });
    
    if (typeof Swiper !== "undefined") {
        new Swiper('.learn-slider', {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.learn-button-next',
                prevEl: '.learn-button-prev',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
            }
        });
    } else {
        console.error("Swiper is not defined. Please include Swiper library.");
    }
}

renderLearnList(courses);


function renderShortAndSweetList(courses) {
    const shortAndSweetList = document.getElementById("shortAndSweetList");
    if (!shortAndSweetList) {
        console.error('Element with id "shortAndSweetList" not found.');
        return;
    }
    
    shortAndSweetList.innerHTML = ''; 
    const filteredCourses = courses.filter(course => {
        const priceToCheck = course.discountPrice ?? course.price;
        return priceToCheck < 15;
    });
    
    filteredCourses.forEach(course => {
        const {
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;
        
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
            <li class="card">
                <main class="card__content">
                    <img src="/assets/${img}" width="236" height="132" alt="${title}">
                </main>
                <header class="card__header">
                    <h4 class="card__title">${title}</h4>
                    <p class="card__author">${author}</p>
                </header>
                <footer class="card__footer">
                    <div class="card__stars-wrapper">
                        <span class="card__rating">${rating?.toFixed(1) ?? '0.0'}</span>
                        <div class="card__stars">${renderStars(rating)}</div>
                        <span class="card__reviews">(${comments?.length ?? 0})</span>
                    </div>
                    <div class="card__price">
                        <span class="card__price--current">$${discountPrice ?? price}</span>
                        <span class="card__price--previous">$${price}</span>
                    </div>
                    <div class="card__badge">Bestseller</div>
                </footer>
            </li>
        `;
        
        shortAndSweetList.appendChild(slide);
    });
    
    if (typeof Swiper !== "undefined") {
        new Swiper('.shortandsweet-slider', {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.shortandsweet-button-next',
                prevEl: '.shortandsweet-button-prev',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
            }
        });
    } else {
        console.error("Swiper is not defined. Please include Swiper library.");
    }
}
renderShortAndSweetList(courses);


function renderTopCoursesInDevelopmentList(courses) {
    const container = document.getElementById("topCoursesInDevelopmentList");
    if (!container) {
        console.error('Element with id "topCoursesInDevelopmentList" not found.');
        return;
    }
    
    container.innerHTML = '';
    
    const devKeywords = ["java", "development", "react", "node", "backend", "frontend", "web", "spring", "html", "css"];
    
    const filtered = courses.filter(course =>
        devKeywords.some(keyword =>
            course.title?.toLowerCase().includes(keyword)
        )
    );
    
    filtered.forEach(course => {
        const {
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;
        
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        slide.innerHTML = `
      <li class="card">
        <main class="card__content">
          <img src="/assets/${img}" width="236" height="132" alt="${title}">
        </main>
        <header class="card__header">
          <h4 class="card__title">${title}</h4>
          <p class="card__author">${author}</p>
        </header>
        <footer class="card__footer">
          <div class="card__stars-wrapper">
            <span class="card__rating">${rating?.toFixed(1) ?? '0.0'}</span>
            <div class="card__stars">${renderStars(rating)}</div>
            <span class="card__reviews">(${comments?.length ?? 0})</span>
          </div>
          <div class="card__price">
            <span class="card__price--current">$${discountPrice ?? price}</span>
            <span class="card__price--previous">$${price}</span>
          </div>
          <div class="card__badge">Bestseller</div>
        </footer>
      </li>
    `;
        
        container.appendChild(slide);
    });
    
    if (typeof Swiper !== "undefined") {
        new Swiper('.topdev-slider', {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.topdev-button-next',
                prevEl: '.topdev-button-prev',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
            }
        });
    } else {
        console.error("Swiper is not defined. Please include Swiper library.");
    }
}

renderTopCoursesInDevelopmentList(courses);

function renderTopCoursesInDevelopmentList(courses) {
    const container = document.getElementById("topCoursesInDevelopmentList");
    if (!container) {
        console.error('Element with id "topCoursesInDevelopmentList" not found.');
        return;
    }
    
    container.innerHTML = ''; 

    let filtered = courses.filter(course => course.rating >= 4.5);
    
    filtered = filtered.sort(() => Math.random() - 0.5);
    
    filtered.forEach(course => {
        const {
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;
        
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        
        slide.innerHTML = `
            <li class="card">
                <main class="card__content">
                    <img src="/assets/${img}" width="236" height="132" alt="${title}">
                </main>
                <header class="card__header">
                    <h4 class="card__title">${title}</h4>
                    <p class="card__author">${author}</p>
                </header>
                <footer class="card__footer">
                    <div class="card__stars-wrapper">
                        <span class="card__rating">${rating?.toFixed(1) ?? '0.0'}</span>
                        <div class="card__stars">${renderStars(rating)}</div>
                        <span class="card__reviews">(${comments?.length ?? 0})</span>
                    </div>
                    <div class="card__price">
                        <span class="card__price--current">$${discountPrice ?? price}</span>
                        <span class="card__price--previous">$${price}</span>
                    </div>
                    <div class="card__badge">Top Rated</div>
                </footer>
            </li>
        `;
        
        container.appendChild(slide);
    });
    
    if (typeof Swiper !== "undefined") {
        new Swiper(".topdev-slider", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".topdev-button-next",
                prevEl: ".topdev-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
            }
        });
    } else {
        console.error("Swiper is not defined.");
    }
}

renderTopCoursesInDevelopmentList(courses);


function renderTopCoursesInDesignList(courses) {
    const container = document.getElementById("topCoursesInDesignList");
    if (!container) {
        console.error('Element with id "topCoursesInDesignList" not found.');
        return;
    }
    
    container.innerHTML = ''; 

    let filtered = courses.filter(course =>  course.rating >= 4.5
        
    );
    
    
    filtered = filtered.sort(() => Math.random() - 0.5);
    
    filtered.forEach(course => {
        const {
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;
        
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        
        slide.innerHTML = `
            <li class="card">
                <main class="card__content">
                    <img src="/assets/${img}" width="236" height="132" alt="${title}">
                </main>
                <header class="card__header">
                    <h4 class="card__title">${title}</h4>
                    <p class="card__author">${author}</p>
                </header>
                <footer class="card__footer">
                    <div class="card__stars-wrapper">
                        <span class="card__rating">${rating?.toFixed(1) ?? '0.0'}</span>
                        <div class="card__stars">${renderStars(rating)}</div>
                        <span class="card__reviews">(${comments?.length ?? 0})</span>
                    </div>
                    <div class="card__price">
                        <span class="card__price--current">$${discountPrice ?? price}</span>
                        <span class="card__price--previous">$${price}</span>
                    </div>
                    <div class="card__badge">Top Rated</div>
                </footer>
            </li>
        `;
        
        container.appendChild(slide);
    });
    
    if (typeof Swiper !== "undefined") {
        new Swiper(".topdesign-slider", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".topdesign-button-next",
                prevEl: ".topdesign-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
            }
        });
    } else {
        console.error("Swiper is not defined.");
    }
}
renderTopCoursesInDesignList(courses);

function renderTopCoursesInBusinessList(courses) {
    const container = document.getElementById("topCoursesInBusinessList");
    if (!container) {
        console.error('Element with id "topCoursesInBusinessList" not found.');
        return;
    }

    container.innerHTML = ''; 

    let filtered = courses.filter(course => 
       course.rating >= 4.5
       
    );

    filtered = filtered.sort(() => Math.random() - 0.5);

    filtered.forEach(course => {
        const {
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;

        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        slide.innerHTML = `
            <li class="card">
                <main class="card__content">
                    <img src="/assets/${img}" width="236" height="132" alt="${title}">
                </main>
                <header class="card__header">
                    <h4 class="card__title">${title}</h4>
                    <p class="card__author">${author}</p>
                </header>
                <footer class="card__footer">
                    <div class="card__stars-wrapper">
                        <span class="card__rating">${rating?.toFixed(1) ?? '0.0'}</span>
                        <div class="card__stars">${renderStars(rating)}</div>
                        <span class="card__reviews">(${comments?.length ?? 0})</span>
                    </div>
                    <div class="card__price">
                        <span class="card__price--current">$${discountPrice ?? price}</span>
                        <span class="card__price--previous">$${price}</span>
                    </div>
                    <div class="card__badge">Top Rated</div>
                </footer>
            </li>
        `;

        container.appendChild(slide);
    });

    if (typeof Swiper !== "undefined") {
        new Swiper(".topbusiness-slider", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".topbusiness-button-next",
                prevEl: ".topbusiness-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
            }
        });
    } else {
        console.error("Swiper is not defined.");
    }
}
renderTopCoursesInBusinessList(courses);


function renderTopCoursesInITList(courses) {
    const container = document.getElementById("topCoursesInITList");
    if (!container) {
        console.error('Element with id "topCoursesInITList" not found.');
        return;
    }

    container.innerHTML = ''; 

    let filtered = courses.filter(course => 
        course.rating >= 4.5
        
    );

    filtered = filtered.sort(() => Math.random() - 0.5);

    filtered.forEach(course => {
        const {
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;

        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        slide.innerHTML = `
            <li class="card">
                <main class="card__content">
                    <img src="/assets/${img}" width="236" height="132" alt="${title}">
                </main>
                <header class="card__header">
                    <h4 class="card__title">${title}</h4>
                    <p class="card__author">${author}</p>
                </header>
                <footer class="card__footer">
                    <div class="card__stars-wrapper">
                        <span class="card__rating">${rating?.toFixed(1) ?? '0.0'}</span>
                        <div class="card__stars">${renderStars(rating)}</div>
                        <span class="card__reviews">(${comments?.length ?? 0})</span>
                    </div>
                    <div class="card__price">
                        <span class="card__price--current">$${discountPrice ?? price}</span>
                        <span class="card__price--previous">$${price}</span>
                    </div>
                    <div class="card__badge">Top Rated</div>
                </footer>
            </li>
        `;

        container.appendChild(slide);
    });

    if (typeof Swiper !== "undefined") {
        new Swiper(".topit-slider", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".topit-button-next",
                prevEl: ".topit-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
            }
        });
    } else {
        console.error("Swiper is not defined.");
    }
}

renderTopCoursesInITList(courses);

function renderTopCoursesInPersonalDevList(courses) {
    const container = document.getElementById("topCoursesInPersonalDevList");
    if (!container) {
        console.error('Element with id "topCoursesInPersonalDevList" not found.');
        return;
    }

    container.innerHTML = ''; 

    let filtered = courses.filter(course => 
         course.rating >= 4.5
    );

    filtered = filtered.sort(() => Math.random() - 0.5);

    filtered.forEach(course => {
        const {
            title,
            author,
            rating,
            price,
            discountPrice,
            img,
            comments
        } = course;

        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        slide.innerHTML = `
            <li class="card">
                <main class="card__content">
                    <img src="/assets/${img}" width="236" height="132" alt="${title}">
                </main>
                <header class="card__header">
                    <h4 class="card__title">${title}</h4>
                    <p class="card__author">${author}</p>
                </header>
                <footer class="card__footer">
                    <div class="card__stars-wrapper">
                        <span class="card__rating">${rating?.toFixed(1) ?? '0.0'}</span>
                        <div class="card__stars">${renderStars(rating)}</div>
                        <span class="card__reviews">(${comments?.length ?? 0})</span>
                    </div>
                    <div class="card__price">
                        <span class="card__price--current">$${discountPrice ?? price}</span>
                        <span class="card__price--previous">$${price}</span>
                    </div>
                    <div class="card__badge">Top Rated</div>
                </footer>
            </li>
        `;

        container.appendChild(slide);
    });

    if (typeof Swiper !== "undefined") {
        new Swiper(".toppersonal-slider", {
            slidesPerView: 5,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".toppersonal-button-next",
                prevEl: ".toppersonal-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
            }
        });
    } else {
        console.error("Swiper is not defined.");
    }
}
renderTopCoursesInPersonalDevList(courses);