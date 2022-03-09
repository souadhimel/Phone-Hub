const getPhones = () => {
  const searchValue = document.getElementById("search-box").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showPhones(data.data));
};

const showPhones = (datas) => {
  for (const data of datas) {
    const parent = document.getElementById("phone_container");
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="card border p-5  border-info">
  <div class="pro_pic">
    <img class="w-25" src="${data.image}" alt="">
  </div>
  <h2>Brand:${data.brand}</h2>
  <h3>Phone name:${data.phone_name}</h3>
  <h3>Slug:${data.slug}</h3>
  

 <div class="all-btn" id="all-btn">
  <button onclick="details('${data.slug}')" class="btn btn-primary">Details</button>
 </div>
</div> 
  `;
    parent.appendChild(div);
  }
  console.log(datas);
};

const details = (info) => {
  const url = `https://openapi.programming-hero.com/api/phone/${info}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => setDetails(data.data));
};

const setDetails = (allInfo) => {
  document.getElementById("details_container").innerHTML = `
  <div>
  <img src="${allInfo.image}" alt="">
  <h1>${allInfo.name}</h1>
  <h2>${allInfo.releaseDate}</h2>

  
  
  </div>
  
  
  `;
};

// const getPhones = () => {
//   fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
//     .then((res) => res.json())
//     .then((data) => displayPhones(data));
// };

// const displayPhones = (phoneList) => {
//   //   console.log(phoneList);
// };

// // Selectors
// const form = document.getElementById("form");
// const phoneInput = document.getElementById("phoneInput");
// const phonesLength = document.getElementById("phonesLength");
// const spinner = document.getElementById("spinner");
// const phonesContainer = document.getElementById("phonesContainer");

// // Fetching phones data from API
// // function getPhones(searchText) {
// //   spinner.classList.remove("hide");
// //   phonesContainer.innerHTML = "";
// //   phonesLength.innerHTML = "";

// fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// // {

// //       showPhones(data.docs);
// //       spinner.classList.add("hide");
// //     });
// // }

// // Add phones to the DOM
// // function showPhones(data) {
// //   phonesContainer.innerHTML = "";
// //   phonesLength.innerHTML = `Number of phones found: ${data.length}`;

// //   data.forEach((phone) => {
// //     phonesContainer.innerHTML += `
// //       <div class="col col-md-4 col-lg-3 mb-1">
// //         <div class="card">
// //             <img class="img-fluid"  onerror="this.onerror=null;
// //             this.src='https://images.unsplash.com/photo-1532037001556-decb941504a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'"
// //             src=" https://openapi.programming-hero.com/api/phone/${slug}" class="card-img-top" alt="book" />
// //             <div class="card-body">
// //                 <h3 class="card-title"><b>Title</b>:${phone.brand}</h3>
// //                 <p><b>Author name</b>:${phone.phone_name || ""}</p>
// //                 <p><b>Publisher</b>:${phone.slug || ""}</p>
// //                 // <p><b>Publishing date</b>:${phone.release_date || ""}</p>
// //             </div>
// //         </div>
// //     </div>
// //     `;
// //   });
// // }

// // // Event listeners
// // form.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   if (!phoneInput.value) {
// //     alert("Invalid input.");
// //   } else {
// //     getPhones(phoneInput.value.trim());
// //     phoneInput.value = "";
// //   }
// // });
