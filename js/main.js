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
        id: 6,
        name: "Combo 5 đầu mỏ hàn, mũi hàn 936",
        local: "3B23 -- gần khu vực này xem chi tiết loại đặt hàng",
    },
    {
        id: 7,
        name: "Led dán màu 10c",
        local: "4B64",
    },
    {
        id: 8,
        name: "DK1023",
        local: "A321",
    },
    {
        id: 9,
        name: "Ic quang PC817",
        local: "A322",
    },
    {
        id: 10,
        name: "Ic quang PC814",
        local: "A322",
    },
    {
        id: 11,
        name: "Tụ khởi động",
        local: "trong kho (cuối kho)",
    },
    {
        id: 12,
        name: "Cầu diode GBJ2510",
        local: "A222",
    },
    {
        id: 13,
        name: "Cặp sò C5200",
        local: "A164 - Hỏi xem loại thường hay tháo máy",
    },
    {
        id: 14,
        name: "Ic Chức năng TL494",
        local: "A165",
    },
    {
        id: 15,
        name: "Rơ le nhiệt nồi cơm",
        local: "1C34 - Xem kỹ có đúng loại không?",
    },
    {
        id: 16,
        name: "Viper 22V",
        local: "A14-A15",
    },
    {
        id: 17,
        name: "Tụ CBB 2uF",
        local: "khay hết lấy thêm ở cầu thang",
    },
    {
        id: 18,
        name: "Tụ CBB 400V 225J",
        local: "3E31",
    },
    {
        id: 19,
        name: "HER508 HER307 Diode xung",
        local: "3B61",
    },
    {
        id: 20,
        name: "Tụ chống sét",
        local: "2D6",
    },
    {
        id: 21,
        name: "Động cơ quay đĩa lò vi sóng",
        local: "2C25",
    },
    {
        id: 22,
        name: "IGBT tháo máy FGH40N60",
        local: "A224",
    },
    {
        id: 23,
        name: "Tụ hóa 25V 4700uF",
        local: "A275",
    },
    {
        id: 24,
        name: "Chiết áp đơn quay vòng",
        local: "3C1",
    },
    {
        id: 25,
        name: "Chiết áp đơn 10K",
        local: "A334",
    },
    {
        id: 26,
        name: "Tụ hóa 16V 10000uF",
        local: "A262",
    },
    {
        id: 27,
        name: "Thạch anh 12mhz",
        local: "2C44",
    },
    {
        id: 28,
        name: "Tụ điều hòa daikin shizuki",
        local: "1F54",
    },
    {
        id: 29,
        name: "Biến áp máy giặt",
        local: "1C31",
    },
    {
        id: 30,
        name: "IGBT 50N322",
        local: "A225",
    },
    {
        id: 31,
        name: "Pin CR1220 loại NẰM",
        local: "A413",
    },
    {
        id: 32,
        name: "Chiết áp đơn 500K",
        local: "A333",
    },
    {
        id: 33,
        name: "Nhựa thông hàn chì hộp nhỏ",
        local: "A225",
    },
    {
        id: 34,
        name: "Chiết áp đơn RK097N B10K 15mm ",
        local: "1C5 or 1C6",
    },
    {
        id: 35,
        name: "NE555 loại ...",
        local: "4C23",
    },
    {
        id: 36,
        name: "Chiết áp đơn RV09",
        local: "Dãy 1D",
    },
    {
        id: 37,
        name: "Hẹn giờ nồi áp suất 45P or 30P",
        local: "2B25",
    },
    {
        id: 38,
        name: "Ic LM358 CẮM",
        local: "A311",
    },
    {
        id: 39,
        name: "Ic LM358 DÁN",
        local: "A313",
    },
    {
        id: 40,
        name: "Mỏ hàn 908V 80W",
        local: "ngay trên khay 3D25",
    },
    {
        id: 41,
        name: "Combo mũi hàn",
        local: "3B23",
    },
    {
        id: 42,
        name: "Transistor B688 mới chính hãng",
        local: "A182",
    },
    {
        id: 43,
        name: "IC nguồn MIP0223SY TO-220 chính hãng Panasonic",
        local: "1F31",
    },
    {
        id: 44,
        name: "Pin CR2450 hàn mạch chân NẰM chất lượng",
        local: "A424",
    },
    {
        id: 45,
        name: "IC nguồn UC3842b chân dán",
        local: "A172",
    },
    {
        id: 46,
        name: "Tụ Audio màu đỏ 2.7uf 250V",
        local: "3C21",
    },
    {
        id: 47,
        name: "Diode zener 1W 15V TÚI 10 CON",
        local: "3B65",
    },
    {
        id: 48,
        name: "Relay nhiệt ksd301 160 độ",
        local: "A252",
    },
    {
        id: 49,
        name: "Đầu mỏ hàn dao 936 màu trắng",
        local: "2B21",
    },
    {
        id: 50,
        name: "Cuộn cảm vạch 1W 0510 1W 1mH (10 chiếc)",
        local: "3D24",
    },
    {
        id: 51,
        name: "Tụ hóa 16V 4700uF JCON",
        local: "A263",
    },
    {
        id: 52,
        name: "Cầu chì thủy tinh hàn chân 10A 5X20MM TÚI 10 CON",
        local: "A132",
    },
    {
        id: 53,
        name: "Đôi kẹp cá sấu nhỏ 26mm chất lượng tốt (1 đen + 1 đỏ)",
        local: "A143",
    },
    {
        id: 54,
        name: "IGBT bếp từ H20PR5 tháo máy CLT",
        local: "A212",
    },
    {
        id: 55,
        name: "Phích cắm nhỏ",
        local: "4C31",
    },
    {
        id: 56,
        name: "Mỏ hàn thiếc TQ936 60W 220V",
        local: "trên 3D25",
    },
    {
        id: 57,
        name: "Chiết áp công tắc chân cong",
        local: "2C53",
    },
    {
        id: 58,
        name: "Biến trở tam giác RM063 20K",
        local: "4B15",
    },
    {
        id: 59,
        name: "DB207 diode cầu",
        local: "2D23",
    },
    {
        id: 60,
        name: "Diode zener 5w 5.1V rỏ đỏ ",
        local: "trên 2F25",
    },
    {
        id: 61,
        name: "Tua vit trợ lực",
        local: "Thùng cạnh cửa",
    },
    {
        id: 62,
        name: "Jack nguồn dc cái 5.5x2.1",
        local: "A154",
    },
    {
        id: 63,
        name: "Tấm chắn sóng lò vi sóng",
        local: "1C35",
    },
    {
        id: 64,
        name: "Rơ le nồi cơm điện SUOER: KHÔNG VỎ",
        local: "(trong kho) - đối diện điện trở dán",
    },
    {
        id: 65,
        name: "HER508 Diode xung 5A 1000V",
        local: "3B45",
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
