let wrapper = document.querySelector(".wrapper")

function displaycode(courses) {
    for (const el of courses) {
      wrapper.insertAdjacentHTML("beforeend", `
        <div class="card_wrapper">
        <a href="./detail.html?id=${el.id}">
        <div class="course-title">${el.title}</div>
        <div class="instructor">${el.author}</div>
        <div class="rating">
            <span class="rating-number">${el.rating}</span>
            <span class="stars">★★★★★</span>
        </div>
        <div class="price">
            <span class="current-price">${el.price}</span>
            <span class="original-price">${el.discountPrice}</span>
        </div>x
        <div class="reviews">
            <img src="${el.img}" alt="salom">
        </div>
        <div class="bestseller">Bestseller</div></a>
        </div>
        `
      )
    }
  }
  
  displaycode(courses)