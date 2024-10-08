var storageProducts = [
    {
        id: 1,
        name: "Tụ quạt CBB61",
        local: "Kệ 3 tầng 1",
    },
    {
        id: 2,
        name: "Tụ CBB 630 475J",
        local: "Kệ 1 tầng 2",
    },
    {
        id: 2,
        name: "Quạt tản nhiệt 24V 12x12x2.5 Dưới nhà",
        local: "???",
        image: "./img/3.jpg",
    },
    {
        id: 2,
        name: "Triac DB3",
        local: "Kệ 1 tầng 2",
        image: "./img/1.jpg",
    },
    {
        id: 2,
        name: "Ổ cắm điện nồi cơm 3 chân đồng màu đen trắng chất lượng cao.",
        local: "Kệ 1 tầng 2",
        image: "./img/4.jpg",
    },
    {
        id: 2,
        name: "Tụ bếp từ",
        local: "Kệ 1 tầng 2",
        image: "./img/5.jpg",
    },
];
var storageList = document.querySelector(".search-inner-storage .list");
var storageFilter = document.querySelector(".search-inner-storage .filter");
var storageInput = document.querySelector(".search-inner-storage input");
var storageFormatText = document.querySelector(
    ".search-inner-storage .information"
);

// Auto focus()
storageInput.focus();

// Display product information
let storageProductFIlter = [];
function storageShowProducts(storageProductFIlter) {
    storageList.innerHTML = "";
    storageProductFIlter.forEach(function (item) {
        let newItem = document.createElement("div");
        let span = document.createElement("span");
        let imgDiv = document.createElement("div");

        imgDiv.className = "picture";
        newItem.classList.add("item");
        span.innerHTML = `${item.name}  <hr>------>  <span class='local-text'>${item.local}</span></hr>`;

        imgDiv.innerHTML = `<img src="${item.image}" alt="" class='component-picture'>`;

        newItem.appendChild(span);
        storageList.appendChild(newItem);
        storageList.append(imgDiv);
    });
}
storageShowProducts(storageProductFIlter);

storageFilter.addEventListener("submit", function (e) {
    e.preventDefault();
    let valueFilter = e.target.elements.name.value.toLowerCase();
    storageProductFIlter = storageProducts.filter(function (item) {
        if (valueFilter === "") {
            return false;
        }
        return item.name.toLowerCase().includes(valueFilter);
    });
    storageShowProducts(storageProductFIlter);
});

// format Text after clicking to Trung Tuyển text
storageFormatText.addEventListener("click", function () {
    storageFormat();
});
// format content
var storageFormat = function () {
    storageInput.value = "";
    storageList.innerHTML = "";
    storageInput.focus();
};

storageBtn.addEventListener("click", function () {
    searchInnerBackground.style.display = "block";
    searchInnerStorageBackground.style.display = "none";
    storageFormat();
});
