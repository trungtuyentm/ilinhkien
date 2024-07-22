var list = document.querySelector(".list");
var filter = document.querySelector(".filter");

var listProducts = [
    {
        id: 1,
        name: "Tụ quạt CBB61",
        local: "1B12",
    },
    {
        id: 2,
        name: "Tụ CBB 630 475J",
        local: "A451",
    },
    {
        id: 3,
        name: "Tụ lọc nguồn 1uF 22mm",
        local: "A341",
    },
    {
        id: 4,
        name: "Rơ le nhiệt 50 độ thường",
        local: "A241",
    },
    {
        id: 5,
        name: "Cầu chì nhiệt nồi cơm 10A",
        local: "2B61",
    },
    {
        id: 5,
        name: "Combo 5 đầu mỏ hàn, mũi hàn 936",
        local: "3B23 -- gần khu vực này xem chi tiết loại đặt hàng",
    },
    {
        id: 5,
        name: "Led dán màu 10c",
        local: "4B64",
    },
    {
        id: 5,
        name: "DK1023",
        local: "A321",
    },
    {
        id: 5,
        name: "Ic quang PC817",
        local: "A322",
    },
    {
        id: 5,
        name: "Ic quang PC814",
        local: "A322",
    },
    {
        id: 5,
        name: "Tụ khởi động",
        local: "trong kho (cuối kho)",
    },
    {
        id: 5,
        name: "Cầu diode GBJ2510",
        local: "A222",
    },
    {
        id: 5,
        name: "Cặp sò C5200",
        local: "A164 - Hỏi xem loại thường hay tháo máy",
    },
    {
        id: 5,
        name: "Ic Chức năng TL494",
        local: "A165",
    },
    {
        id: 5,
        name: "Rơ le nhiệt nồi cơm",
        local: "1C34 - Xem kỹ có đúng loại không?",
    },
    {
        id: 5,
        name: "Viper 22V",
        local: "A14-A15",
    },
    {
        id: 5,
        name: "Tụ CBB 2uF",
        local: "khay hết lấy thêm ở cầu thang",
    },
    {
        id: 5,
        name: "Tụ CBB 400V 225J",
        local: "3E31",
    },
    {
        id: 5,
        name: "HER508 HER307 Diode xung",
        local: "3B61",
    },
    {
        id: 5,
        name: "Tụ chống sét",
        local: "2D6",
    },
    {
        id: 5,
        name: "Động cơ quay đĩa lò vi sóng",
        local: "2C25",
    },
    {
        id: 5,
        name: "IGBT tháo máy FGH40N60",
        local: "A224",
    },
    {
        id: 5,
        name: "Tụ hóa 25V 4700uF",
        local: "A275",
    },
    {
        id: 5,
        name: "Chiết áp đơn quay vòng",
        local: "3C1",
    },
    {
        id: 5,
        name: "Chiết áp đơn 10K",
        local: "A334",
    },
    {
        id: 5,
        name: "Tụ hóa 16V 10000uF",
        local: "A262",
    },
    {
        id: 5,
        name: "Thạch anh 12mhz",
        local: "2C44",
    },
    {
        id: 5,
        name: "Tụ điều hòa daikin shizuki",
        local: "1F54",
    },
    {
        id: 5,
        name: "Biến áp máy giặt",
        local: "1C31",
    },
    {
        id: 5,
        name: "IGBT 50N322",
        local: "A225",
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
