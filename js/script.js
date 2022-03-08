const loadProducts = () => {
  const data = [
    {
      brand: "Apple ",
      phone_name: "iPhone 13 mini",
      slug: "apple_iphone_13_mini-11104",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 13 Pro",
      slug: "apple_iphone_13_pro-11102",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 13 Pro Max",
      slug: "apple_iphone_13_pro_max-11089",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 13",
      slug: "apple_iphone_13-11103",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 12 Pro Max",
      slug: "apple_iphone_12_pro_max-10237",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 12 Pro",
      slug: "apple_iphone_12_pro-10508",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 12",
      slug: "apple_iphone_12-10509",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 12 mini",
      slug: "apple_iphone_12_mini-10510",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone SE (2020)",
      slug: "apple_iphone_se_(2020)-10170",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 11 Pro Max",
      slug: "apple_iphone_11_pro_max-9846",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 11 Pro",
      slug: "apple_iphone_11_pro-9847",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 11",
      slug: "apple_iphone_11-9848",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone XS Max",
      slug: "apple_iphone_xs_max-9319",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone XR",
      slug: "apple_iphone_xr-9320",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone XS",
      slug: "apple_iphone_xs-9318",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
    },
  ];
  showProducts(data);
};

// show all product in UI
const showProducts = (products) => {
  const allProducts = products.map((pd) => pd);
  for (const product of allProducts) {
    const image = product.images;
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<div class="single-product">
        <div>
      <img class="product-image" src=${product.image}></img>
        </div>
        <h3>${product.brand}</h3>
        <p>${product.phone_name}</p>
        <h2> ${product.slug}</h2>
      
        <button onclick="addToCart(${product.brand},${product.slug})" id="addToCart-btn" class="buy-now btn btn-success">Details</button>
        </div>
        `;
    document.getElementById("all-products").appendChild(div);
  }
};

loadProducts();

// let count = 0;
// const addToCart = (id, price) => {
//   count = count + 1;
//   updatePrice("price", price);

//   updateTaxAndCharge();
//   document.getElementById("total-Products").innerText = count;
// };

// const getInputValue = (id) => {
//   const element = document.getElementById(id).innerText;
//   // console.log(element);

//   const converted = Number(element);
//   // console.log(converted);
//   return converted;
// };

// // main price update function
// const updatePrice = (id, value) => {
//   const convertedOldPrice = getInputValue(id);
//   const convertPrice = parseFloat(value);
//   // console.log(id, value);
//   const total = convertedOldPrice + convertPrice;
//   // console.log(convertedOldPrice, convertPrice);
//   document.getElementById(id).innerText = total.toFixed(2);
//   updateTotal();
// };

// // set innerText function
// const setInnerText = (id, value) => {
//   document.getElementById(id).innerText = value.toFixed(2);
//   // console.log(id, value);
// };

// // update delivery charge and total Tax
// const updateTaxAndCharge = () => {
//   const priceConverted = getInputValue("price");
//   if (priceConverted > 200) {
//     setInnerText("delivery-charge", 30);
//     setInnerText("total-tax", priceConverted * 0.2);
//   }
//   if (priceConverted > 400) {
//     setInnerText("delivery-charge", 50);
//     setInnerText("total-tax", priceConverted * 0.3);
//   }
//   if (priceConverted > 500) {
//     setInnerText("delivery-charge", 60);
//     setInnerText("total-tax", priceConverted * 0.4);
//   }
// };

// //grandTotal update function
// const updateTotal = () => {
//   const grandTotal =
//     getInputValue("price") +
//     getInputValue("delivery-charge") +
//     getInputValue("total-tax");
//   document.getElementById("total").innerText = grandTotal.toFixed(2);
// };
// loadProducts();
