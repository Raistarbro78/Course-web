let clear = document.querySelector(".btn-clear")
let headerwrapper = document.querySelector('.header-top')
clear.addEventListener("click" , ()=>{
    headerwrapper.classList.add("none")
})
let secinput = document.querySelector(".cuppon-input")
let secbutton = document.querySelector(".cuppon-btn")
let sectxt = document.querySelector('.textsecret')

secbutton.addEventListener("click", () => {
  if(secinput.value === "sarvar") {
    sectxt.innerHTML = "sarvar salom! , bu sitedan chiqib keting";
  } else if(secinput.value === "includes") {
    sectxt.innerHTML = "30% chegirma cupponini yutib oldingiz!";
  } else {
    sectxt.innerHTML = "no togri pormokod kirtidingiz"
  }
});

let decwrapper = document.querySelector(".description-list")
let showbtn = document.querySelector(".show-more-txt")
let item1 = document.querySelector(".opa")
let item2 = document.querySelector(".opar")
let showmore = document.querySelector(".show-more-txt")
let addwrapp = document.querySelector(".wrapper-add-from-here")
let backer = document.querySelector(".show-more-back")

showbtn.addEventListener("click" , () =>{
    addwrapp.insertAdjacentHTML("beforeend" ,    `<li class="description-item another">In 2024, React is still the #1 skill to learn if you want to become a successful front-end developer!</li>
            <li class="description-item another">But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.!</li>
            <li class="description-item another">That's why you came here... And you came to the right place! This is THE ultimate React course for 2024 and
beyond.</li>
            <li class="description-item another">A practice-heavy approach to master React by building polished apps, backed up by diagrams, theory,
and looks under the hood of React.</li>`)
item1.classList.add("full")
item2.classList.add("full")
showmore.classList.add("none")
})


let showmethemoney = document.querySelector(".show-more-button")
let addwrapz = document.querySelector(".wrapper-add-from-heree")
let item1z = document.querySelector(".opaz")
let item2z = document.querySelector(".oparz")
showmethemoney.addEventListener("click" , () =>{
    addwrapz.insertAdjacentHTML("beforeend" , `<li class="instructor-item">In 2024, React is still the #1 skill to learn if you want to become a successful front-end developer!</li>
            <li class="instructor-item">But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.!</li>
            <li class="instructor-item">That's why you came here... And you came to the right place! This is THE ultimate React course for 2024 and
beyond.</li>
            <li class="instructor-item">A practice-heavy approach to master React by building polished apps, backed up by diagrams, theory,
and looks under the hood of React.</li>`)
item1z.classList.add("fullz")
item2z.classList.add("fullz")
showmethemoney.classList.add("none")
})

let showmorebtn = document.querySelector('.showmore-btn')
let boughtlist = document.querySelector('.bought-list')

showmorebtn.addEventListener("click" , () =>{
boughtlist.insertAdjacentHTML("beforeend" , `
    <li class="bought-item"><img src="/1362070_b9a1_2.jpg.png" alt="" class="bought-item-img">
                            <div class="bought-box">
<div class="left-bought">
                                <h1 class="bought-box-title">React - The Complete Guide 2025 (incl.
Next.js, Redux)</h1><div class="bought-box-bottom">
    <button class="header-box-btn">Bestseller</button>
    <span class="green">71.5 total hours</span>
    <p class="bought-update">Updated 4/2025</p>
</div>
</div>

<div class="bought-box-info">
    <p class="header-star">4.7 <img src="/SVG.svg" alt="" /></p>
    <p class="bought-peoples"><img src="/icon-people.svg" alt="" class="icon-people"> 962,106</p>
    <div class="bought-price-box">
        $9.99 <br>
        <del>$74.99</del>
    </div>
    <button class="heart"><img src="/SVG (6).svg" alt=""></button>
</div>

                            </div>
                        </li>


                         <li class="bought-item"><img src="/1362070_b9a1_2.jpg.png" alt="" class="bought-item-img">
                            <div class="bought-box">
<div class="left-bought">
                                <h1 class="bought-box-title">React - The Complete Guide 2025 (incl.
Next.js, Redux)</h1><div class="bought-box-bottom">
    <button class="header-box-btn">Bestseller</button>
    <span class="green">71.5 total hours</span>
    <p class="bought-update">Updated 4/2025</p>
</div>
</div>

<div class="bought-box-info">
    <p class="header-star">4.7 <img src="/SVG.svg" alt="" /></p>
    <p class="bought-peoples"><img src="/icon-people.svg" alt="" class="icon-people"> 962,106</p>
    <div class="bought-price-box">
        $9.99 <br>
        <del>$74.99</del>
    </div>
    <button class="heart"><img src="/SVG (6).svg" alt=""></button>
</div>

                            </div>
                        </li>


                         <li class="bought-item"><img src="/1362070_b9a1_2.jpg.png" alt="" class="bought-item-img">
                            <div class="bought-box">
<div class="left-bought">
                                <h1 class="bought-box-title">React - The Complete Guide 2025 (incl.
Next.js, Redux)</h1><div class="bought-box-bottom">
    <button class="header-box-btn">Bestseller</button>
    <span class="green">71.5 total hours</span>
    <p class="bought-update">Updated 4/2025</p>
</div>
</div>

<div class="bought-box-info">
    <p class="header-star">4.7 <img src="/SVG.svg" alt="" /></p>
    <p class="bought-peoples"><img src="/icon-people.svg" alt="" class="icon-people"> 962,106</p>
    <div class="bought-price-box">
        $9.99 <br>
        <del>$74.99</del>
    </div>
    <button class="heart"><img src="/SVG (6).svg" alt=""></button>
</div>

                            </div>
                        </li>


                         <li class="bought-item"><img src="/1362070_b9a1_2.jpg.png" alt="" class="bought-item-img">
                            <div class="bought-box">
<div class="left-bought">
                                <h1 class="bought-box-title">React - The Complete Guide 2025 (incl.
Next.js, Redux)</h1><div class="bought-box-bottom">
    <button class="header-box-btn">Bestseller</button>
    <span class="green">71.5 total hours</span>
    <p class="bought-update">Updated 4/2025</p>
</div>
</div>

<div class="bought-box-info">
    <p class="header-star">4.7 <img src="/SVG.svg" alt="" /></p>
    <p class="bought-peoples"><img src="/icon-people.svg" alt="" class="icon-people"> 962,106</p>
    <div class="bought-price-box">
        $9.99 <br>
        <del>$74.99</del>
    </div>
    <button class="heart"><img src="/SVG (6).svg" alt=""></button>
</div>

                            </div>
                        </li>


                         <li class="bought-item"><img src="/1362070_b9a1_2.jpg.png" alt="" class="bought-item-img">
                            <div class="bought-box">
<div class="left-bought">
                                <h1 class="bought-box-title">React - The Complete Guide 2025 (incl.
Next.js, Redux)</h1><div class="bought-box-bottom">
    <button class="header-box-btn">Bestseller</button>
    <span class="green">71.5 total hours</span>
    <p class="bought-update">Updated 4/2025</p>
</div>
</div>

<div class="bought-box-info">
    <p class="header-star">4.7 <img src="/SVG.svg" alt="" /></p>
    <p class="bought-peoples"><img src="/icon-people.svg" alt="" class="icon-people"> 962,106</p>
    <div class="bought-price-box">
        $9.99 <br>
        <del>$74.99</del>
    </div>
    <button class="heart"><img src="/SVG (6).svg" alt=""></button>
</div>

                            </div>
                        </li>


    `)
    showmorebtn.classList.add("none")
})


let showingMore = document.querySelector(".dontshoworepls")
let adderWrapper = document.querySelector(".rating-main")

showingMore.addEventListener("click" , ()=>{
adderWrapper.insertAdjacentHTML('beforeend' , `
     <div class="rating-item">
      <div class="rating-header">
        <div class="rating-avatar">CB</div>
        <div>
          <div class="rating-name">Carlos B.</div>
          <div class="rating-meta"><img src="/icon-rating-star.svg" alt="" class="rating-star-rate"> • 8 weeks ago</div>
        </div>
      </div>
      <p class="rating-text">Sim não se pode pedir muito mais, abordou-se muitos temas e foi um ensino sincero...</p>
      <div class="rating-footer">
        <span>Helpful?</span>
        <span class="goodorbadbtn"><p class="plsoni"></p><button class="goodboy"><img src="/Button.svg" alt="" class="good"></button><p class="mnsoni"></p><button class="badboy"><img src="/Button (1).svg" alt="" class="bad"></button></span>
      </div>
    </div>

    <div class="rating-item">
      <div class="rating-header">
        <div class="rating-avatar">MZ</div>
        <div>
          <div class="rating-name">Mao Z.</div>
          <div class="rating-meta"><img src="/icon-rating-star.svg" alt="" class="rating-star-rate"> • 8 weeks ago</div>
        </div>
      </div>
      <p class="rating-text">Jonas is absolutely an excellent teacher, this course is well prepared and presented...</p>
      <div class="rating-footer">
        <span>Helpful?</span>
        <span><button class="goodboy"><img src="/Button.svg" alt="" class="good"></button><button class="badboy"><img src="/Button (1).svg" alt="" class="bad"></button></span>
      </div>
    </div>

    <div class="rating-item">
      <div class="rating-header">
        <div class="rating-avatar">CB</div>
        <div>
          <div class="rating-name">Carlos B.</div>
          <div class="rating-meta"><img src="/icon-rating-star.svg" alt="" class="rating-star-rate"> • 8 weeks ago</div>
        </div>
      </div>
      <p class="rating-text">Sim não se pode pedir muito mais, abordou-se muitos temas e foi um ensino sincero...</p>
      <div class="rating-footer">
        <span>Helpful?</span>
        <span class="goodorbadbtn"><p class="plsoni"></p><button class="goodboy"><img src="/Button.svg" alt="" class="good"></button><p class="mnsoni"></p><button class="badboy"><img src="/Button (1).svg" alt="" class="bad"></button></span>
      </div>
    </div>


    <div class="rating-item">
      <div class="rating-header">
        <div class="rating-avatar">CB</div>
        <div>
          <div class="rating-name">Carlos B.</div>
          <div class="rating-meta"><img src="/icon-rating-star.svg" alt="" class="rating-star-rate"> • 8 weeks ago</div>
        </div>
      </div>
      <p class="rating-text">Sim não se pode pedir muito mais, abordou-se muitos temas e foi um ensino sincero...</p>
      <div class="rating-footer">
        <span>Helpful?</span>
        <span class="goodorbadbtn"><p class="plsoni"></p><button class="goodboy"><img src="/Button.svg" alt="" class="good"></button><p class="mnsoni"></p><button class="badboy"><img src="/Button (1).svg" alt="" class="bad"></button></span>
      </div>
    </div>
    `)
    showingMore.classList.add("none")
})
let yoifyourntsarvardontfuckinignoreme = document.querySelector(".jonas-report-btn")
let reportWrapper = document.querySelector(".jonas-course-list")
yoifyourntsarvardontfuckinignoreme.addEventListener("click" , () =>{
reportWrapper.insertAdjacentHTML("beforeend" , `
    
    <div class="jonas-course-card">
      <img src="/851712_fc61_6.jpg.png" alt="JavaScript Course" class="jonas-course-img">
      <h3 class="jonas-course-title">The Complete JavaScript Course 2025: From Zero to Hero</h3>
      <p class="jonas-instructor-name">Jonas Schmedtmann</p>
      <div class="jonas-course-meta">
        <span class="jonas-rating"> ⭐</span>
        <span class="jonas-reviews">(229,281)</span>
      </div>
      <div class="jonas-course-details">71 total hours • 437 lectures • All Levels</div>
      <div class="jonas-course-price">$9.99 <span class="jonas-price-old">$74.99</span></div>
    </div>

    <div class="jonas-course-card">
      <img src="/851712_fc61_6.jpg.png" alt="Node Course" class="jonas-course-img">
      <h3 class="jonas-course-title">Node.js, Express, MongoDB & More: The Complete</h3>
      <p class="jonas-instructor-name">Jonas Schmedtmann</p>
      <div class="jonas-course-meta">
        <span class="jonas-rating">4.6 ⭐</span>
        <span class="jonas-reviews">(95,391)</span>
      </div>
      <div class="jonas-course-details">42 total hours • 229 lectures • All Levels</div>
      <div class="jonas-course-price">$9.99 <span class="jonas-price-old">$74.99</span></div>
    </div>

    <div class="jonas-course-card">
      <img src="/851712_fc61_6.jpg.png" alt="HTML CSS Course" class="jonas-course-img">
      <h3 class="jonas-course-title">Build Responsive Real-World Websites with HTML and CSS</h3>
      <p class="jonas-instructor-name">Jonas Schmedtmann</p>
      <div class="jonas-course-meta">
        <span class="jonas-rating">4.7 ⭐</span>
        <span class="jonas-reviews">(135,513)</span>
      </div>
      <div class="jonas-course-details">37.5 total hours • 149 lectures • All Levels</div>
      <div class="jonas-course-price">$9.99 <span class="jonas-price-old">$74.99</span></div>
    </div>

    `)
    yoifyourntsarvardontfuckinignoreme.classList.add("none")
})

function renderCommentsFromURL(courses) {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = parseInt(urlParams.get("id"));

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    console.warn("Kurs topilmadi!");
    return;
  }

  const commentsHTML = course.comments.map(comment => {
    return `
      <div class="rating-item">
        <div class="rating-header">
          <div class="rating-avatar">${comment.username.slice(0, 2).toUpperCase()}</div>
          <div>
            <div class="rating-name">${comment.username}</div>
            <div class="rating-meta">
              <img src="${comment.ratingImage}" alt="" class="rating-star-rate">
              • ${comment.date}
              • ${'⭐️'.repeat(comment.rating)}
            </div>
          </div>
        </div>
        <p class="rating-text">${comment.comment}</p>
        <div class="rating-footer">
          <span>Helpful?</span>
          <span class="goodorbadbtn">
            <p class="plsoni"></p>
            <button class="goodboy"><img src="/Button.svg" alt="" class="good"></button>
            <p class="mnsoni"></p>
            <button class="badboy"><img src="/Button (1).svg" alt="" class="bad"></button>
          </span>
        </div>
      </div>
    `;
  }).join("");

  const adderWrapper = document.getElementById("rating-main"); 
  adderWrapper.innerHTML = commentsHTML;
}

 renderCommentsFromURL(courses) 
showingMore.addEventListener("click", () => {
  renderCommentsFromURL();
  showingMore.classList.add("none");
});


ratingWrapper.addEventListener("click", (e) => {
    let target = e.target
    console.log(target);
    
    if (target.classList.contains('good')) {
        target.classList.toggle("goodboyz")
    }

    if (target.classList.contains('bad')) {
        target.classList.toggle("badboyz")
    }
})

let good = document.querySelector(".goodboy")
let bad = document.querySelector(".badboy")
let plusCount = document.querySelector(".plsoni")
let minusCount = document.querySelector(".mnsoni")

// good.addEventListener("click" , () => {
//     good.classList.toggle("goodboyz")
// })

// bad.addEventListener("click" , ()=>{
//     bad.classList.toggle("badboyz")
// })


// let ratingWrapper = document.getElementById("rating-main")

// courses.forEach(course => {
//     let card = document.createElement("div")
//     card.classList.add("rating-item")

//     card.innerHTML = `
//     <div class="rating-header">
//         <div class="rating-avatar">CB</div>
//         <div>
//           <div class="rating-name">Carlos B.</div>
//           <div class="rating-meta">${course.rating}<img src="/icon-rating-star.svg" alt="" class="rating-star-rate"> • 8 weeks ago</div>
//         </div>
//       </div>
//       <p class="rating-text">Sim não se pode pedir muito mais, abordou-se muitos temas e foi um ensino sincero...</p>
//       <div class="rating-footer">
//         <span>Helpful?</span>
//         <span class="goodorbadbtn"><button class="goodboy"><img src="/Button.svg" alt="" class="good"></button><button class="badboy"><img src="/Button (1).svg" alt="" class="bad"></button></span>
//       </div>
//     `
//     ratingWrapper.appendChild(card)
// })

let cartWrapper = document.querySelector(".showsmorewrapper")

let showsmorebtn = document.querySelector(".add-cart")

showsmorebtn.addEventListener("click" , () =>{



courses.forEach(course => {
    let item = document.createElement("li")
    item.classList.add("cart-item")

item.innerHTML = `
 <img
                  src="/assets/${course.img}"
                  alt=""
                  class="cart-item-img"
                />
                <div class="cart-item-info">
                  <div class="item-left-info">
                    <h1 class="cart-item-info-title">
                      ${course.title}
                    </h1>
                    <p class="cart-item-info-creator">Jonas Schmedtmann</p>
                    <p class="header-star">4.7 <img src="/SVG.svg" alt="" /></p>
                    <button class="header-box-btn">Bestseller</button>
                  </div>
                  <div class="item-right-info">
                    <p class="item-right-price">$9.99</p>
                    <p class="item-right-sale"><del>$59.99</del></p>
                  </div>
                </div>
`
cartWrapper.appendChild(item)
})

})
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get('id'); 


let courseCard = document.getElementById('course-card');  



let findCourse = courses.find(courses => courses.id == courseId);


if (findCourse) {
  courseCard.innerHTML = `
    <div class="course-preview">
      <img src="/assets/${findCourse.img}" alt="${findCourse.title}" class="charchadim" />
    </div>

    <div class="price-section">
      <div>
        <span class="price">$${findCourse.price}</span>
        <span class="original-price">$${findCourse.originalPrice}</span>
        <span class="discount">${findCourse.discount} off</span>
      </div>
      <div class="deal-timer">1 day left at this price!</div>
    </div>

    <div class="guarantee">30 Day Money-Back Guarantee</div>

    <div class="buttons">
      <button class="btn btn-primary">Buy now</button>
      <div class="cuppon-box">
        <input type="text" class="cuppon-input" />
        <button class="cuppon-btn">Apply</button>
      </div>
      <p class="textsecret"></p>
    </div>

    <div class="subscribe-section">
      <div class="subscribe-title">
        Subscribe to Udemy's top courses
      </div>
      <div class="subscribe-text">
        Get this course, plus 13,000+ of our top-rated courses, with
        Personal Plan. Learn more
      </div>
      <button class="subscribe-btn">Try Personal Plan for free</button>
      <div class="trial-text">
        Starting at $10.00 per month after trial
        <br />Cancel anytime
      </div>
    </div>
  `;
} else {
  courseCard.innerHTML = `<p>Course not found.</p>`;
}
