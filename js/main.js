var list = document.querySelector(".list");
var filter = document.querySelector(".filter");

var listProducts = [
    {
        id: 1,
        name: "CBB 16A",
        local: "A222",
    },
    {
        id: 2,
        name: "PC817",
        local: "A322",
    },
];

let productFIlter = [];
function showProducts(productFIlter) {
    list.innerHTML = "";
    productFIlter.forEach(function (item) {
        let newItem = document.createElement("div");
        let span = document.createElement("span");
        newItem.classList.add("item");
        span.innerText = `${item.name}  ------>  ${item.local}`;
        newItem.appendChild(span);
        list.appendChild(newItem);
    });
}
showProducts(productFIlter);

filter.addEventListener("submit", function (e) {
    e.preventDefault();
    let valueFilter = e.target.elements.name.value.toLowerCase();
    productFIlter = listProducts.filter(function (item) {
        if (valueFilter === "") {
            return false;
        }
        return item.name.toLowerCase().includes(valueFilter);
    });
    showProducts(productFIlter);
});
