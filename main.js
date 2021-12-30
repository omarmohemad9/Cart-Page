// images section
let imagesSection = document.querySelectorAll(".sliderShow div");
// to toggle cart
let btnCart = document.getElementById("btnCart");
let pageCart = document.querySelector(".cart-section");

btnCart.onclick = function() {
    pageCart.classList.toggle("dis");
};
// to hide and appear a hide section
// _____ parent the big img

let imghead = document.getElementById("imgappear");
let img = document.getElementById("imageHeader");
let count = 1;
//
let imgHidder = document.querySelector(".imgBehind");
let btntoremove = document.getElementById("blockImgB");
imghead.addEventListener("click", () => {
    imgHidder.classList.add("active");
});

btntoremove.onclick = function() {
    imgHidder.classList.remove("active");
};

// images section
imagesSection.forEach((e) => {
    e.addEventListener("click", function(e) {
        togCls(e);
    });
});

function togCls(e) {
    count = e.currentTarget.dataset.num;

    imagesSection.forEach((el) => {
        el.classList.remove("active");
    });
    imagesSection[count - 1].classList.add("active");
    window.localStorage.setItem("numset", e.currentTarget.dataset.num);
    img.setAttribute("src", `images/image-product-${count}.jpg`);
}
if (localStorage.getItem("numset") == undefined) {
    localStorage.getItem("numset") = 0;
}
let imagesArr = ["images/image-product-1-thumbnail.jpg", "images/image-product-2-thumbnail.jpg", "images/image-product-3-thumbnail.jpg", "images/image-product-4-thumbnail.jpg"]
    // get num from localstorage to add class
function getNum() {
    let valueFromLocal = localStorage.getItem("numset");
    count = valueFromLocal;
    imagesSection[count - 1].classList.add("active");
    img.setAttribute("src", imagesArr[count - 1])

}

getNum();

// behind img

let imgBehindAppear = document.getElementById("imgBe")

let imagesBe = document.querySelectorAll(".sliderShows div ")
let count_2 = 1;
let imagesArr_2 = ["images/image-product-1-thumbnail.jpg", "images/image-product-2-thumbnail.jpg", "images/image-product-3-thumbnail.jpg", "images/image-product-4-thumbnail.jpg"]
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")

imagesBe.forEach((e) => {

    e.addEventListener("click", (e) => {
        count_2 = e.currentTarget.dataset.nums;
        imgClass()

    })
})
prevBtn.onclick = function() {
    count_2--
    if (count_2 == 0) {
        count_2 = 4
    }
    imgClass()

}
nextBtn.onclick = function() {
    count_2++
    if (count_2 > 4) {
        count_2 = 1
    }
    imgClass()
}

function imgClass() {
    imagesBe.forEach((el) => {
        el.classList.remove("active");
    });

    imagesBe[count_2 - 1].classList.add("active");
    imgBehindAppear.setAttribute("src", imagesArr_2[count_2 - 1])

}

function getNum2() {
    let valueFromLocal = localStorage.getItem("numset");
    count_2 = valueFromLocal;
    imagesBe[count_2 - 1].classList.add("active");
    imgBehindAppear.setAttribute("src", imagesArr_2[count_2 - 1])

}

getNum2()

// order times

let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let countInput = document.getElementById("orderCount");
let countIn = 1;

minus.onclick = function() {
    countIn--
    if (countIn < 1) {
        countIn = 1
    }
    countInput.value = countIn;
}
plus.onclick = function() {
    countIn++

    countInput.value = countIn;
}

// order Button 
let orderBtn = document.querySelector(".orderBtn");
// will be inner content 
let boxConCart = document.querySelector(".box-cart");
let iconCount = document.querySelector(".iconCount");
let countCart = 0;
orderBtn.onclick = function() {

    countCart++
    let content = `
                            <div class="box-collection">
                                <div class="img-carts">
                                    <img src="images/image-product-1-thumbnail.jpg" alt="" />
                                    <div class="text-cart">
                                        <p>Fall Limited Edition Sneakers</p>
                                        <p>$125.00 x <span class="countOrder">${countInput.value}</span>
                                            <span class="result">Total : $${(countInput.value *125).toFixed(2)}</span>
                                        </p>
                                    </div>
                                    <button class="parent">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="16">
                                            <defs>
                                                <path
                                                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                                    id="a" />
                                            </defs>
                                            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="button">
                                    <button>Checkout</button>
                                </div>
                            </div>
    `
    boxConCart.innerHTML += content;
    iconCount.textContent = countCart;

    check()
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("parent")) {
        e.target.parentNode.parentElement.remove()
        countCart--
        check()
        iconCount.textContent = countCart;
    }
})
let DivBe = document.querySelector(".chang");

function check() {

    if (countCart >= 1) {
        DivBe.classList.add("none")

    } else {
        DivBe.classList.remove("none")

    }
    // if (countCart >= 1) {

    // }
}
check()

let humborg = document.querySelector(".humburg");
let onphoneSe = document.querySelector(".onphone");
let closePhone = document.getElementById(
    "closePh"
)
humborg.onclick = function() {
    onphoneSe.classList.add("active")
}
closePhone.onclick = function() {
    onphoneSe.classList.remove("active")
}

// lis toggle class
let lisNavArr = Array.from(document.querySelectorAll(".navbar .container ul li"))

lisNavArr.forEach(e => {
    e.addEventListener("click", (e) => {
        lisNavArr.forEach(el => {
            el.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
    })
})