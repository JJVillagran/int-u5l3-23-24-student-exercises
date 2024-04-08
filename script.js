let body = document.querySelector("body");

// Array of image links
let photos = ["https://skin-tracker.com/images/fnskins/icon/fortnite-invincible-outfit.png",
    "https://skin-tracker.com/images/fnskins/icon/fortnite-invincible-outfit.png",
    "https://skin-tracker.com/images/fnskins/icon/fortnite-invincible-outfit.png",
    "https://skin-tracker.com/images/fnskins/icon/fortnite-invincible-outfit.png",
    "https://skin-tracker.com/images/fnskins/icon/fortnite-invincible-outfit.png"
];

// 1. Push an image link of one of your favorite shows to the photos array.
//  - To find the link, right-click an image and choose 'Copy Image Address'

// HTML selectors
let show1 = document.querySelector(".show-1");
let show2 = document.querySelector(".show-2");
let show3 = document.querySelector(".show-3");
let show4 = document.querySelector(".show-4");
let show5 = document.querySelector(".show-5");
let show6 = document.querySelector(".show-6");

show1.src = photos[0];
// 2. Update the src for each show# variable - use the line above as a reference.
show2.src = photos[1];
show3.src = photos[2];
show4.src = photos[3];
show5.src = photos[4];
show6.src = photos[5];
