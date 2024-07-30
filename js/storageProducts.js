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
        newItem.classList.add("item");
        span.innerHTML = `${item.name}  <hr>------>  <span class='local-text'>${item.local}</span></hr>`;
        newItem.appendChild(span);
        storageList.appendChild(newItem);
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
