const loader = document.getElementById("loader");
const body = document.body;

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("Hidden");
    body.classList.add("Visible");
    body.classList.remove("scrollHidden");
  }, 1500);

  const productSec = document.querySelector(".products");

  const products = [
    {
      id: 1,
      name: "chair",
      img: "assets/imgs/products/chair(1).jpg",
      madeOut: "wooden",
      price: 50,
      companyName: "godrage",
      quality: 5,
      sale: true,
    },
    {
      id: 2,
      name: "table",
      img: "assets/imgs/products/tabel(1).jpg",
      madeOut: "wood",
      price: 80,
      companyName: "furnitureCo",
      quality: 4,
      sale: true,
    },
    {
      id: 3,
      name: "lamp",
      img: "assets/imgs/products/lamp(1).jpg",
      madeOut: "metal",
      price: 30,
      companyName: "lightingCorp",
      quality: 3,
      sale: false,
    },
    {
      id: 4,
      name: "bookshelf",
      img: "assets/imgs/products/bookshelf(1).jpg",
      madeOut: "wood / metal",
      price: 60,
      companyName: "bookFurnish",
      quality: 4,
      sale: false,
    },
    {
      id: 2.2,
      name: "table",
      img: "assets/imgs/products/tabel(2).jpg",
      madeOut: "glass",
      price: 90.99,
      companyName: "furnitureCo",
      quality: 4,
      sale: true,
    },
    {
      id: 2.3,
      name: "table",
      img: "assets/imgs/products/tabel(4).jpg",
      madeOut: "wood",
      price: 90.99,
      companyName: "furnitureCo",
      quality: 3,
      sale: true,
    },
    {
      id: 4.1,
      name: "bookshelf",
      img: "assets/imgs/products/bookshelf(2).jpg",
      madeOut: "wood",
      price: 60,
      companyName: "bookFurnish",
      quality: 3,
      sale: false,
    },
    {
      id: 10.1,
      name: "sofa",
      img: "assets/imgs/products/sofa(2).jpg",
      madeOut: "fabric",
      price: 199.99,
      companyName: "comfyCouch",
      quality: 5,
      sale: true,
    },
    {
      id: 5,
      name: "bed",
      img: "assets/imgs/products/bed.jpg",
      madeOut: "wood ",
      price: 200,
      companyName: "dreamSleep",
      quality: 5,
      sale: true,
    },
    {
      id: 6.1,
      name: "desk",
      img: "assets/imgs/products/desk(2).jpg",
      madeOut: "wood",
      price: 120,
      companyName: "officeCraft",
      quality: 4,
      sale: false,
    },
    {
      id: 6,
      name: "desk",
      img: "assets/imgs/products/desk(1).jpg",
      madeOut: "glass",
      price: 170,
      companyName: "officeCraft",
      quality: 4,
      sale: false,
    },
    {
      id: 7,
      name: "cabinet",
      img: "assets/imgs/products/cabinet(1).jpg",
      madeOut: "plywood",
      price: 200,
      companyName: "woodCrafters",
      quality: 5,
      sale: false,
    },
    {
      id: 3.1,
      name: "lamp",
      img: "assets/imgs/products/lamp(2).jpg",
      madeOut: "metal",
      price: 30,
      companyName: "lightingCorp",
      quality: 3,
      sale: false,
    },
    {
      id: 7.2,
      name: "cabinet",
      img: "assets/imgs/products/cabinet(2).jpg",
      madeOut: "wood",
      price: 240,
      companyName: "woodCrafters",
      quality: 5,
      sale: true,
    },
    {
      id: 8,
      name: "mirror",
      img: "assets/imgs/products/mirror.jpg",
      madeOut: "coper",
      price: 29.99,
      companyName: "reflectiveDesigns",
      quality: 4,
      sale: true,
    },
    {
      id: 10,
      name: "sofa",
      img: "assets/imgs/products/sofa(1).jpg",
      madeOut: "fabric",
      price: 180,
      companyName: "comfyCouch",
      quality: 5,
      sale: true,
    },
    {
      id: 11,
      name: "dining table",
      img: "assets/imgs/products/diningTable.jpg",
      madeOut: "wood",
      price: 150,
      companyName: "elegantDine",
      quality: 4,
      sale: false,
    },
  ];

  // Function to convert quality into stars
  function convertToStars(quality) {
    const starRating = "★".repeat(quality);
    return `<span class="star-rating">${starRating}</span>`;
  }
  // Now, you have an array of 11 objects in the 'products' array.
  // Function to generate HTML for each product
  function generateProductCard(product) {
    return `
      <div class="product-card ${product.name} ">
        <h2 class='pro-name'>${product.name}</h2>
        <div class="img-container">
        <img loading='lazy' src=${product.img} alt=${product.name}>
        </div>
        <p class='madOutOf'>Made Out: ${product.madeOut}</p>
        <p class='price'>$${product.price}</p>
        <p class='companyName'>Company: ${product.companyName}</p>
        <p class='rating'>${convertToStars(product.quality)}</p>
        <img class='cartIcon' src='assets/imgs/icon/cart.png' alt='cart icon' />
        ${
          product.sale
            ? `<p class="sale"><img src='assets/imgs/icon/sale.png' alt=${product.sale} /></p>`
            : ""
        }
      </div>
    `;
  }

  // Map over the products and append the generated HTML to the container
  products.forEach((product) => {
    const productHTML = generateProductCard(product);
    productSec.innerHTML += productHTML;
  });

  const prod = document.querySelectorAll(".product-card");
  const proSrch = document.getElementById("proSrch");

  proSrch.addEventListener("input", () => {
    const searchValue = proSrch.value.toLowerCase();

    prod.forEach((product) => {
      const productName = product.querySelector("h2").textContent.toLowerCase();
      const productPrice = product
        .querySelector(".madOutOf")
        .textContent.toLowerCase();
      const productCompanyName = product
        .querySelector(".companyName")
        .textContent.toLowerCase();
      const productType = product
        .querySelector(".price")
        .textContent.toLowerCase();

      if (
        productName.includes(searchValue) ||
        productCompanyName.includes(searchValue) ||
        productType.includes(searchValue) ||
        productPrice.includes(searchValue)
      ) {
        gsap.to(product, {
          display: "block",
          ease: "power4",
          duration: 0.27,
          stagger: 0.27,
          opacity: 1,
          y: 0,
        });
      } else {
        gsap.to(product, {
          display: "none",
          ease: "power4",
          duration: 0.27,
          stagger: 0.27,
          opacity: 0,
          y: 10,
        });
      }
    });
  });
  const fillterBtns = document.querySelectorAll(".fillter-btn");
  fillterBtns.forEach((fillterBtn) => {
    fillterBtn.addEventListener("click", (e) => {
      // / Remove active class from all buttons
      fillterBtns.forEach((btn) => btn.classList.remove("active-fill"));
      const targeted = e.target;
      targeted.classList.add("active-fill");
      prod.forEach((product) => {
        const productName = product
          .querySelector("h2")
          .textContent.toLowerCase();
        const fillterBtnValue = fillterBtn.textContent.toLocaleLowerCase();
        if (fillterBtnValue === "all") {
          gsap.to(product, {
            display: "block",
            ease: "power4",
            duration: 0.27,
            stagger: 0.27,
            opacity: 1,
            y: 0,
          });
        } else if (productName.includes(fillterBtnValue)) {
          gsap.to(product, {
            display: "block",
            ease: "power4",
            duration: 0.27,
            stagger: 0.27,
            opacity: 1,
            y: 0,
          });
        } else {
          gsap.to(product, {
            display: "none",
            ease: "power4",
            duration: 0.27,
            stagger: 0.27,
            opacity: 0,
            y: 10,
          });
        }
      });
    });
  });
});
