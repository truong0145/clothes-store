var stringUrl = window.location.href;
var url = new URL(stringUrl);
var clothesName = url.searchParams.get("name");
var clothesBrand = url.searchParams.get("brand");
var clothesPrice = url.searchParams.get("price");
var clothesLink = url.searchParams.get("link");
console.log(clothesName);
console.log(clothesBrand);
console.log(clothesPrice);
console.log(clothesLink);

document.getElementById("clothesName").textContent = clothesName;
document.getElementById("clothesBrand").textContent = clothesBrand;
document.getElementById("clothesPrice").textContent = clothesPrice;
document.getElementById("clothesLink").src = "image/" +  clothesLink;
