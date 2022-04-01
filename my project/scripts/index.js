// ................................................................................................

let firstSlideshow = () => {
  var images_arr = [
    {
      image:
        "https://n.nordstrommedia.com/id/0ec0e6da-7cff-49c0-b351-5fa01f0d0b2a.jpeg?h=720&w=1608",
      title: "Wedding Guest Styles for Women & Men",
      para: "From Alexia Admor, Adornia, Original Penguin, Nautica and more.",
      women: "Women's Wedding Guest Attire",
    },
    {
      image:
        "https://n.nordstrommedia.com/id/b7a37c8e-0482-443a-a64f-93fce761cc27.jpeg?h=720&w=1608",
      title: "Max Studio, Vince Camuto, St. John Collection & More",
      para: "Fresh work looks that are anything but business as usual.",
      women: "Wear to Work",
    },
    {
      image:
        "https://n.nordstrommedia.com/id/ab81079f-e944-4595-98f7-5aa7ae4335ca.jpeg?h=720&w=1608",
      title: "Ends Today Online & In Stores",
      para: "Valid only on select red-tag clearance items. Online prices as marked; in-store markdowns taken at register.",
      women:
        "All Clearance  Women's Clearance  Men's Clearance  See Restrictions",
    },
    {
      image:
        "https://n.nordstrommedia.com/id/512aeac9-001f-49fd-8041-e773a77e6b17.jpeg?h=720&w=1608",
      title: "Starting at $50",
      para: "New Balance, Steve Madden, Franco Sarto and more.",
      women: "Spring Shoes",
    },
    {
      image:
        "https://n.nordstrommedia.com/id/9a9e24d8-83ed-4bfe-bfce-daa102440d7b.jpeg?h=720&w=1608",
      title: "Alexia Admor, AFRM & More0",
      para: "You've got the plans. We've got the outfits..",
      women: "Men's and women's Dress Up Styles",
    },
    {
      image:
        "https://n.nordstrommedia.com/id/91b0c6fc-d7b3-4764-b973-610578b0376f.jpeg?h=720&w=1608",
      title: "Activewear for All",
      para: "From Nike, adidas, Z by Zella and more of the best brands in the game.",
      women: "Men's and women's Dress Up Styles",
    },
  ];

  let slideshow = document.getElementById("sagar");
  let maintext = document.getElementById("h3");
  let para1 = document.getElementById("p");
  let para2 = document.querySelector(".moredetails");

  let i = 0;

  x = setInterval(() => {
    if (i == images_arr.length) {
      i = 0;
    }

    slideshow.src = images_arr[i].image;
    maintext.innerText = images_arr[i].title;
    para1.innerText = images_arr[i].para;
    para2.innerText = images_arr[i].women;

    i = i + 1;
    // console.log(i);
  }, 3000);
};
firstSlideshow();

// for 2nd slideshow

let firstSlideshow1 = () => {
  var images_arr = [
    {
      image:
        "https://n.nordstrommedia.com/id/5b9ab3a0-65b1-41d8-b552-0d8df8a9c0a0.jpeg?h=200&w=1608",
      // title: "Go-to Styles From Nordstrom Made Brands",
      // para: "Save big for the whole family..",
      // women: "Women's Wedding Guest Attire",
    },
    {
      image:
        "https://n.nordstrommedia.com/id/306b15d0-7abe-4757-97b3-f65f26b1240e.jpeg?h=200&w=1608",
      // title: "Kids' Styles & Toys From $10",
      // para: "Online and in stores now..",
      // women: "Kids' Easter Shop",
    },
  ];

  let slide = document.getElementById("sagar1");
  // let text1 = document.getElementById("text1")
  // let text2 = document.getElementById("text2")
  // let text3 = document.querySelector(".text3")

  let i = 0;

  x = setInterval(() => {
    if (i == images_arr.length) {
      i = 0;
    }
    slide.src = images_arr[i].image;
    // text1.innerText = images_arr[i].title
    // text2.innerText = images_arr[i].para
    // text3.innerText = images_arr[i].women

    i = i + 1;
    // console.log(i);
  }, 5000);
};
firstSlideshow1();

// .........................................................................................
// bag data append

var bagData = [
  {
    url: "https://m.media-amazon.com/images/I/41-ZuAdIKoL.jpg",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "1",
  },
    {
    url: "https://images-eu.ssl-images-amazon.com/images/I/81uaPOjfBPL._AC._SR360,460.jpg",
    productName: "Tote Bags Online India : Buy Tote Bags",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "1",
  },
  {
    url: "https://media.darveys.com/catalog/product/cache/1/image/485x548/a4e40ebdc3e371adff845072e1c73f37/2/4/24-lot3473_1.jpg",
    productName: "Cherry Solid Large Tote",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "1",
  },
  {
    url: "https://rukminim1.flixcart.com/image/880/1056/kod858w0/hand-messenger-bag/s/b/m/jmm-04-c-hb-004-tote-uptouch-original-imag2uc2aapwrueq.jpeg?q=50",
    productName: "Women Purple Tote",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "1",
  },
  {
    url: "https://rukminim1.flixcart.com/image/880/1056/l0mr7gw0/hand-messenger-bag/e/s/w/leatherette-dual-color-tan-tote-bag-17-jaj-btot-duac-tote-jajv-original-imaex562y8g9anxx.jpeg?q=50",
    productName: "Women Tan, Red Tote",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "1",
  },
  //  ............................................................................................
  {
    url: "https://m.media-amazon.com/images/I/61Ymqi3ZY6L._UX679_.jpg",
    productName: "Luxe Bags",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
    id: "2",
  },
  {
    url: "https://rukminim1.flixcart.com/image/714/857/kq2o2vk0/hand-messenger-bag/i/l/m/women-s-combonetic-shoulder-bag-sb6928114-shoulder-bag-carrylux-original-imag45gtr7pcxgnm.jpeg?q=50",
    productName: "Women Orange Shoulder Bag - Regular Size",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
    id: "2",
  },
  {
    url: "https://rukminim1.flixcart.com/image/880/1056/knxiavk0/hand-messenger-bag/n/q/j/women-s-stylish-handbags-rosewood-onion-pnk-single-shoulder-bag-original-imag2gavs6pgbgh8.jpeg?q=50",
    productName: "Women Pink Shoulder Bag - Regular Size",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
    id: "2",
  },
  {
    url: "https://rukminim1.flixcart.com/image/880/1056/kp4difk0/hand-messenger-bag/r/v/x/women-s-combonetic-shoulder-bag-sb6928114-hand-held-bag-carrylux-original-imag3fhaabnrspgg.jpeg?q=50",
    productName: "Women Maroon Shoulder Bag - Extra Spacious ",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
    id: "2",
  },
  {
    url: "https://rukminim1.flixcart.com/image/880/1056/l0cr4i80/hand-messenger-bag/l/1/o/tote-bags-women-travel-college-shopping-hand-bags-women-style-original-imagc5grg2thzzcv.jpeg?q=50",
    productName: "Women Pink Tote",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
    id: "2",
  },
  // ..........................................................................................
  {
    url: "https://d8.cnnx.io/image/obj/10080172432;sq=400;p=0;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "3",
  },
  {
    url: "https://d8.cnnx.io/image/obj/10080172432;sq=400;p=0;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "3",
  },
  {
    url: "https://d8.cnnx.io/image/obj/10080172432;sq=400;p=0;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "3",
  },
  {
    url: "https://d8.cnnx.io/image/obj/10080172432;sq=400;p=0;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "3",
  },
  {
    url: "https://d8.cnnx.io/image/obj/10080172432;sq=400;p=0;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "3",
  },
  // .................................................................................................
  {
    url: "https://n.nordstrommedia.com/id/sr3/df92e8eb-ce57-4695-9434-4d9cb6aef976.jpeg?h=365&w=240&dpr=2;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>(1)
    </p>`,
    id: "4",
  },
  {
    url: "https://n.nordstrommedia.com/id/sr3/df92e8eb-ce57-4695-9434-4d9cb6aef976.jpeg?h=365&w=240&dpr=2;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "4",
  },
  {
    url: "https://n.nordstrommedia.com/id/sr3/df92e8eb-ce57-4695-9434-4d9cb6aef976.jpeg?h=365&w=240&dpr=2;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "4",
  },
  {
    url: "https://n.nordstrommedia.com/id/sr3/df92e8eb-ce57-4695-9434-4d9cb6aef976.jpeg?h=365&w=240&dpr=2;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "4",
  },
  {
    url: "https://n.nordstrommedia.com/id/sr3/df92e8eb-ce57-4695-9434-4d9cb6aef976.jpeg?h=365&w=240&dpr=2;t=ooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t41nt2tHyrUA6AUh0cAAzg3lZ_k-H1Z_JA15up45uLjEgMaQKL-Q==",
    productName: "DAGNE DOVER",
    price: "$129.99",
    ratting: `<p class="yellow"><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>(1)
        </p>`,
    id: "4",
  },

];

function filteringHere(n) {
  var filteredArray = bagData.filter(function (elem) {
    return elem.id == n;
  });
  populate(filteredArray);
}

function populate(bagData) {
  document.querySelector(".bag_variety").innerHTML = "";

  bagData.map(function (data) {
    // console.log(data)
    var card = document.createElement("div");
    card.id = "card";

    var img = document.createElement("img");
    img.setAttribute("id", "image");
    img.src = data.url;

    var h = document.createElement("p");
    h.innerText = data.productName;

    var p1 = document.createElement("p");
    p1.innerText = data.price;

    var p2 = document.createElement("p");
    p2.innerHTML = data.ratting;

    card.append(img, h, p1, p2);
    document.querySelector(".bag_variety").append(card);
  });
}

// .................................................................................

    var bagData2 = [
        {
            url:"https://n.nordstrommedia.com/id/sr3/0e8051c1-bf83-4a33-828b-f981c2ff42d8.jpeg?h=365&w=240&dpr=2g",
            productName: "Luxe Bags",
            price: "$129.99",
            ratting:`<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
        },
        {
            url:"https://rukminim1.flixcart.com/image/580/696/ksoz53k0/sling-bag/0/0/m/mod-gs-2777-brown-sling-bag-gold-sky-original-imag678ta3khgsr8.jpeg?q=50",
            productName: "GOLD SKY",
            price: "$129.99",
            ratting:`<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
        },
        {
            url:"https://rukminim1.flixcart.com/image/580/696/jvzkb680/travel-pouch/k/q/z/waist-belt-bag-wallet-pouch-purse-phone-case-with-zipper-original-imafgrupdg2k8de6.jpeg?q=50",
            productName: "GOCART Universal Outdoor",
            price: "$129.99",
            ratting:`<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
        },
        {
            url:"https://rukminim1.flixcart.com/image/580/696/k5y7tzk0/wallet-card-wallet/x/z/z/oliver-ubf130blk1017-wallet-urban-forest-original-imafzg4xuvgpntdu.jpeg?q=50",
            productName: "Men Black Genuine Leather",
            price: "$129.99",
            ratting:`<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
        },
        {
            url:"https://rukminim1.flixcart.com/image/580/696/kgmla4w0/backpack/p/z/q/057-057-laptop-backpack-heroz-45-original-imafwtbhyy3hf7up.jpeg?q=50",
            productName: "HEROZ Bags",
            price: "$129.99",
            ratting:`<p class="yellow"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>(1)
            </p>`,
        },

];


    localStorage.setItem("bagData", JSON.stringify(bagData2))
        var bagdata2 = JSON.parse(localStorage.getItem("bagData"))
        // document.querySelector(".bag_variety").innerHTML = "";

        bagdata2.map(function (data) {
            // console.log(data)
            var card = document.createElement("div");
            card.id = "card";

            var img = document.createElement("img");
            img.setAttribute("id", "image");
            img.src = data.url;

            var h = document.createElement("p");
            h.innerText = data.productName;

            var p1 = document.createElement("p");
            p1.innerText = data.price;

            var p2 = document.createElement("p");
            p2.innerHTML = data.ratting;

            card.append(img, h, p1, p2);
            document.querySelector(".bag_variety").append(card);
        });

// .................................................................................
// .................................................................................
//cloth data append

var clothData = [
    {
        link: "https://img.shop.com/Image/280000/289600/289605/products/1907969553.jpg?size=400x400",
        title: "Dolce & Gabbana Black Polka Dots Casual Trouser Pants ",
      price: "$69.97 45% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(21)
          </p>`,
    },
    {
        link: "https://img.shop.com/Image/260000/269300/269358/products/1867144984.jpg?size=400x400",
        title: "My Hero Academia Chibi All Over Print Sleep Pants ",
      price: "$19.99 20% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
    {
        link: "https://img.shop.com/Image/280000/288000/288080/products/1892927186.jpg?size=400x400",
        title: "Floral Forest Printed FeatherSoft Women's Leggings ",
      price: "$49.99 10% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
    {
        link: "https://img.shop.com/Image/280000/288000/288080/products/1893549602.jpg?size=400x400",
        title: "Solid Black Jogger FeatherSoft Women's Pants ",
      price: "$100.99 25% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
    {
        link:"https://img.shop.com/Image/260000/269300/269358/products/1914798397.jpg?size=400x400",
        title:
          "Peanuts Charlie Brown Snoopy and Woodstock Sueded Fleece Sleep Pants ",
      price: "$79.99 45% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
  ];

localStorage.setItem("clothData", JSON.stringify(clothData));
var clothdata = JSON.parse(localStorage.getItem("clothData"));

var product = document.querySelector("#cloth_display");
clothdata.map(function (data) {
  // console.log(data)
  var card = document.createElement("div");
  card.id = "card";

  var img = document.createElement("img");
  img.setAttribute("id", "image");
  img.src = data.link;

  var h = document.createElement("p");
  h.innerText = data.title;

  var p1 = document.createElement("p");
  p1.innerText = data.price;

  var p2 = document.createElement("p");
  p2.innerHTML = data.ratting;

  card.append(img, h, p1, p2);
  product.append(card);
});

// .................................................................................
// .................................................................................

var springData = [
  {
    url: "https://n.nordstrommedia.com/id/32fb9fcf-8bcf-42ca-8de7-8c0971bc69b7.jpeg?h=501&w=536",
    productName: "Looks for Warmer Weather",
    para: "Everything you want to wear right now, all in one place",
    ratting: "Women's Young Adult",
  },
  {
    url: "https://n.nordstrommedia.com/id/41acd1e0-5e10-4755-a7f4-305d86f5e8d7.jpeg?h=501&w=536",
    productName: "Looks for Warmer Weather",
    para: "Everything you want to wear right now, all in one place",
    ratting: "Women's Young Adult",
  },
  {
    url: "https://n.nordstrommedia.com/id/93faaf39-c99d-4a19-a48b-066e8cc1d2d7.jpeg?h=501&w=536",
    productName: "Looks for Warmer Weather",
    para: "Everything you want to wear right now, all in one place",
    ratting: "Women's Young Adult",
  },
];

var productSpring = document.querySelector("#spring_div");
springData.map(function (data) {
  // console.log(data)
  var card = document.createElement("div");
  card.id = "springcard";

  var img = document.createElement("img");
  img.setAttribute("id", "spring_image");
  img.src = data.url;

  var h = document.createElement("h5");
  h.innerText = data.productName;

  var p1 = document.createElement("p");
  p1.innerText = data.para;

  var p2 = document.createElement("a");
  p2.innerHTML = data.ratting;

  card.append(img, h, p1, p2);
  productSpring.append(card);
});

// .................................................................................
// .................................................................................

var MoretoKnowData = [
  {
    url: "https://n.nordstrommedia.com/id/b696c8a3-f2e2-4738-bfdd-dcffba6ee55a.jpeg?h=188&w=402",
    productName: "An Exclusive Offer",
    para: "Just for new Nordstrom credit cardmembers. Restrictions apply.",
    ratting: "Apply Now",
  },
  {
    url: "	https://n.nordstrommedia.com/id/a0139f47-eff3-4670-980a-1af9213a9c46.jpeg?h=188&w=402",
    productName: "An Exclusive Offer",
    para: "Just for new Nordstrom credit cardmembers. Restrictions apply.",
    ratting: "Apply Now",
  },
  {
    url: "https://n.nordstrommedia.com/id/2961092c-5387-4c52-9c94-1379fe2ac7ec.jpeg?h=188&w=402",
    productName: "An Exclusive Offer",
    para: "Just for new Nordstrom credit cardmembers. Restrictions apply.",
    ratting: "Apply Now",
  },
  {
    url: "https://n.nordstrommedia.com/id/f557ba91-d185-4c98-bed7-b20449496ad2.jpeg?h=188&w=402",
    productName: "An Exclusive Offer",
    para: "Just for new Nordstrom credit cardmembers. Restrictions apply.",
    ratting: "Apply Now",
  },
];

var MoretoKnowproduct = document.querySelector("#More_to_Know_div");
MoretoKnowData.map(function (data) {
  // console.log(data)
  var card = document.createElement("div");
  card.id = "MoretoKnow";

  var img = document.createElement("img");
  img.setAttribute("id", "MoretoKnow_image");
  img.src = data.url;

  var h = document.createElement("h6");
  h.innerText = data.productName;

  var p1 = document.createElement("p");
  p1.innerText = data.para;

  var p2 = document.createElement("a");
  p2.innerHTML = data.ratting;

  card.append(img, h, p1, p2);
  MoretoKnowproduct.append(card);
});

// .................................................................................
// .................................................................................


let firstSlideshow3 = () => {
  var images_arr3 = [
    {
      url1: "https://cdn.dashhudson.com/media/640/1628598956.37983440346.jpeg",
      url2: "https://cdn.dashhudson.com/media/640/1625812071.39856985243.jpeg",
      url3: "https://cdn.dashhudson.com/media/640/1626312391.206982943516.jpeg",
      url4: "	https://cdn.dashhudson.com/media/640/1619542695.85628681795.jpeg",
      url5: "https://cdn.dashhudson.com/media/640/1605751594.398433781061.jpeg",
    },
    {
      url1: "https://cdn.dashhudson.com/media/640/1635798101.057760741882.jpeg",
      url2: "https://cdn.dashhudson.com/media/640/1628869281.24676919833.jpeg",
      url3: "https://cdn.dashhudson.com/media/640/1630336568.132611839758.jpeg",
      url4: "https://cdn.dashhudson.com/media/640/1640118992.0353518732.jpeg",
      url5: "https://cdn.dashhudson.com/media/640/1637789505.085481611408.jpeg",
    },
  ];

  let slide1 = document.getElementById("one");
  let slide2 = document.getElementById("two");
  let slide3 = document.getElementById("three");
  let slide4 = document.getElementById("four");
  let slide5 = document.getElementById("five");

  let i = 0;

  x = setInterval(() => {
    if (i == images_arr3.length) {
      i = 0;
    }

    slide1.src = images_arr3[i].url1;
    slide2.src = images_arr3[i].url2;
    slide3.src = images_arr3[i].url3;
    slide4.src = images_arr3[i].url4;
    slide5.src = images_arr3[i].url5;

    i = i + 1;
    // console.log(i);
  }, 3000);
};
firstSlideshow3();
// .................................................................................
// .................................................................................

//trend data append

var trendData = [
    {
        link: "https://img.shop.com/Image/280000/288000/288080/products/1893108937.jpg?size=400x400",
    title: "Exquisite Printed FeatherSoft Women's Leggings ",
      price: "$69.97 45% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(21)
          </p>`,
    },
    {
        link: "https://img.shop.com/Image/250000/254500/254570/products/1891099815.jpg?size=400x400",
        title: "Calvin Girl's Glamorous Girls T-shirt",
      price: "$19.99 20% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
    {
        link: "https://img.shop.com/Image/280000/288000/288080/products/1892927208.jpg?size=400x400",
    title: "Levis Fox Life - Kids FeatherSoft leggings ",
      price: "$49.99 10% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
    {
        link: "https://img.shop.com/Image/240000/243400/243406/products/1720064871.jpg?size=400x400",
        title: "Tommy Hilfiger Men's Quilted Puffer Jacket, Created for Macy's ",
      price: "$100.99 25% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
    {
        link: "https://img.shop.com/Image/270000/278100/278132/products/1914730509.jpg?size=400x400",
    title:
      "Sun + Stone Mens Gray Camouflage Long Sleeve Oversized Fit Draw String Thermal Hoodie ",
      price: "$79.99 45% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
    {
        link: "https://img.shop.com/Image/280000/288000/288080/products/1892927854.jpg?size=400x400",
        title: "Layla - Maroon Top Quality Fashion Women's Top ",
      price: "$79.99 45% off",
      ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(1)
          </p>`,
    },
  ];

localStorage.setItem("trendData", JSON.stringify(trendData));
var trenddata = JSON.parse(localStorage.getItem("trendData"));

var product = document.querySelector("#trend_display");
trenddata.map(function (data) {
  // console.log(data)
  var card = document.createElement("div");
  card.id = "card";

  var img = document.createElement("img");
  img.setAttribute("id", "image");
  img.src = data.link;

  var h = document.createElement("p");
  h.innerText = data.title;

  var p1 = document.createElement("p");
  p1.innerText = data.price;

  var p2 = document.createElement("p");
  p2.innerHTML = data.ratting;

  card.append(img, h, p1, p2);
  product.append(card);
});

// .................................................................................
// .................................................................................
//best data append

var bestData = [
    {
        link: "https://img.shop.com/Image/270000/273200/273200/products/1877396174.jpg?size=400x400",
        title: "Rag & Bone Womens Nina Animal Print Ankle High-Waist Jeans ",
        price: "$69.97 45% off",
        type: "jeans",
        cashBack: 7,
        percentCashBack: 11,
        ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(20)
          </p>`,
      },
      {
        link: "https://img.shop.com/Image/280000/289900/289943/products/1907393978.jpg?size=400x400",
        title: "Brook Taverner Womens/Ladies Austin Chino Skirt ",
        price: "$79.99 45% off",
        type: "skirt",
        cashBack: 16,
          percentCashBack: 19,
          ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(5)
          </p>`,
      },
      {
        link: "https://img.shop.com/Image/270000/273200/273200/products/1880097218.jpg?size=400x400",
        title: "BCBGMAXAZRIA Womens Tammi Spaghetti Strap Racer Back Sports Bra ",
        price: "$100.99 25% off",
        type: "bra",
        cashBack: 5,
          percentCashBack: 5,
          ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(22)
          </p>`,
      },

      {
        link: "https://img.shop.com/Image/280000/288000/288080/products/1907996998.jpg?size=400x400",
        title: "Solid Caramel Fleece FeatherSoft Women's Leggings ",
        price: "$49.99 10% off",
        type: "Leggings",
        cashBack: 2,
          percentCashBack: 6,
          ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(15)
          </p>`,
      },
      {
        link: "https://img.shop.com/Image/280000/288000/288080/products/1909562249.jpg?size=400x400",
        title: "Christmas Lights - Two Pockets Holiday Wide Band Leggings ",
        price: "$69.97 45% off",
        type: "Leggings",
        cashBack: 1,
          percentCashBack: 1,
          ratting: `<p class="yellow"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>(12)
          </p>`,
      },

  ];

localStorage.setItem("bestData", JSON.stringify(bestData));
var bestdata = JSON.parse(localStorage.getItem("bestData"));

var product = document.querySelector("#best_display");
bestdata.map(function (data) {
  // console.log(data)
  var card = document.createElement("div");
  card.id = "card";

  var img = document.createElement("img");
  img.setAttribute("id", "image");
  img.src = data.link;

  var h = document.createElement("p");
    h.innerText = data.title;
    h.style.textDecoration="bold"

  var hp = document.createElement("p");
    hp.innerText = data.type;

  var p1 = document.createElement("p");
  p1.innerText = data.price;

  var p2 = document.createElement("p");
  p2.innerHTML = data.ratting;

  card.append(img,h,hp, p1, p2);
  product.append(card);
});

// .................................................................................
// .................................................................................