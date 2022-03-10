// Fetching data from API
const getPhones = () => {
  const searchValue = document.getElementById("search-box").value;
  document.getElementById("search-box").innerHTML = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => showPhones(data.data));
};

// Add phones to DOM
const showPhones = (datas) => {
  for (const data of datas) {
    const parent = document.getElementById("phone_container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="col col-md-4 col-lg-3 mb-1">
    <div class="card">
      <div class="pro_pic">
        <img class="w-25 card-img-top" src="${data.image}" alt="" />
      </div>
      <div class="card-body">
        <h2 class="card-title">Brand:${data.brand}</h2>
        <h3>Phone name:${data.phone_name}</h3>
        <h3>Slug:${data.slug}</h3>
        <div class="all-btn" id="all-btn">
          <button onclick="details('${data.slug}')" class="btn btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
    parent.appendChild(div);
  }
};

// Getting details
const details = (info) => {
  const url = `https://openapi.programming-hero.com/api/phone/${info}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => setDetails(data.data));
};

// Setting details in UI
const setDetails = (allInfo) => {
  document.getElementById("details_container").innerHTML = `
  <div>
  <img src="${allInfo.image}" alt="">
  <h1>${allInfo.name}</h1>
  <h4>${
    allInfo.releaseDate ? allInfo.releaseDate : "Sorry, no date is found"
  }</h4>
  <h4>${allInfo.mainFeatures.storage}</h4>
  <h4>${allInfo.mainFeatures.displaySize}</h4>
  <h4>${allInfo.mainFeatures.chipSet}</h4>
  <h4>${allInfo.mainFeatures.sensors}</h4>
  <h4>${allInfo.others.WLAN}</h4>
  </div>
  `;
};
