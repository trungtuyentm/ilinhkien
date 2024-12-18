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
        name: "Ic quang PC817 EL817C DIP-4 chính hãng Everlight",
        local: "2E31",
    },
    {
        id: 10,
        name: "Tụ nhôm 50V 47uF",
        local: "1D21",
    },
    {
        id: 11,
        name: "Tụ khởi động",
        local: "trong kho (cuối kho)",
    },
    {
        id: 12,
        name: "GBJ2510 Diode cầu chỉnh lưu 25A 1000V chính hãng chất lượng",
        local: "2B64",
    },
    {
        id: 13,
        name: "Cặp sò C5200 A1943",
        local: "3E45",
    },
    {
        id: 15,
        name: "Rơ le nhiệt nồi cơm",
        local: "1C34 - Xem kỹ có đúng loại không?",
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
        local: "3B31",
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
        local: "2B64",
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
        local: "3A33",
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
        local: "2E12",
    },
    {
        id: 39,
        name: "Ic LM358 DÁN",
        local: "2E12",
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
        local: "1F21",
    },
    {
        id: 44,
        name: "Pin CR2450 hàn mạch chân NẰM chất lượng",
        local: "A424",
    },
    {
        id: 45,
        name: "IC nguồn UC3842b chân dán (IL0040_02)",
        local: "3E32",
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
        name: "Jack nguồn dc cái 5.5x2.1mm đấu dây vỏ nhựa",
        local: "1A54",
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
        name: "LM339N DIP-14 thường (có thể dùng thay thế loại tốt)",
        local: "A313",
    },
    {
        id: 66,
        name: "IC nguồn TOP258PN DIP-7",
        local: "2F43",
    },
    {
        id: 67,
        name: "K75T60 IGBT",
        local: "A213",
    },
    {
        id: 68,
        name: "Tụ Audio màu đỏ 6.8uF 400V",
        local: "3C22",
    },
    {
        id: 69,
        name: "Cầu chì lò vi sóng hộp trắng 0.85A 2kV chất lượng tốt",
        local: "3B13",
    },
    {
        id: 71,
        name: "Tụ hóa 16V 1500uF JCON",
        local: "A285",
    },
    {
        id: 72,
        name: "TM1628 IC quét led và phím bấn chất lượng tốt",
        local: "A315",
    },
    {
        id: 73,
        name: "Triac BTA16 600B",
        local: "A322",
    },
    {
        id: 74,
        name: "IC nguồn SG3525 3525 DIP-16 chất lượng tốt (CẮM)",
        local: "2E14",
    },
    {
        id: 75,
        name: "Cuộn cảm vạch (lấy trong kho) ",
        local: "Dẫy 2, ở vị trí đầu - T4",
    },
    {
        id: 76,
        name: "Cuộn cảm vạch 1W 0510 1W 3.3uH (10 chiếc)",
        local: "3D24",
    },
    {
        id: 77,
        name: "IC nguồn UC3842b chân CẮM",
        local: "A173",
    },
    {
        id: 78,
        name: "10D151k TỤ BẢO VỆ QUÁ ÁP",
        local: "1D54",
    },
    {
        id: 79,
        name: "Keo tản nhiệt CPU laptop HY510 hộp nhỏ",
        local: "2C14",
    },
    {
        id: 80,
        name: "Cảm biến nhiệt 10K mf58 túi 10 con",
        local: "2E25",
    },
    {
        id: 81,
        name: "IC nguồn TEA1721 EA1721 TEA1721BT chất lượng tốt",
        local: "1D61",
    },
    {
        id: 82,
        name: "Rơ le nhiệt ksd301 80 độ",
        local: "A251",
    },
    {
        id: 83,
        name: "Ampe kìm 3266TA",
        local: "Trong kho (kệ ngay cạnh ống GEN)",
    },
    {
        id: 84,
        name: "Led dán",
        local: "4B64",
    },
    {
        id: 85,
        name: "78L06",
        local: "1D35",
    },
    {
        id: 86,
        name: "Mosfet 110A",
        local: "3D44",
    },
    {
        id: 87,
        name: "Biến trở tam giác RM065 500R",
        local: "4B11",
    },
    {
        id: 88,
        name: "Cầu chì sứ 6A 5X20MM (10 CON)",
        local: "A112",
    },
    {
        id: 89,
        name: "Tụ hóa 35V 10000uF JCON",
        local: "A382",
    },
    {
        id: 90,
        name: "Điện trở sứ 5W 0.25R chân đứng",
        local: "3B35",
    },
    {
        id: 91,
        name: "IRF460 Mosfet",
        local: "2E65",
    },
    {
        id: 92,
        name: "Tấm chắn sóng, tấm amiang lò vi sóng Media, Electrolux, Sharp 10x11.8cm chịu nhiệt độ cao",
        local: "1C35",
    },
    {
        id: 93,
        name: "Diode zener 1W 12V (TÚI 10 CON)",
        local: "3B64",
    },
    {
        id: 94,
        name: "Diode zener 1W 24V (TÚI 10 CON)",
        local: "3B63",
    },
    {
        id: 95,
        name: "Diode zener 1W 22V (TÚI 10 CON)",
        local: "Rỏ cam",
    },
    {
        id: 96,
        name: "Biến trở vi chỉnh 3296W 10K",
        local: "3A21",
    },
    {
        id: 97,
        name: "Biến trở vi chỉnh 3296W 20K",
        local: "3A22",
    },
    {
        id: 98,
        name: "Đầu kẹp cá sấu nhỏ màu đỏ",
        local: "A153",
    },
    {
        id: 99,
        name: "Jack nguồn DC đực 5.5x2.5 loại tốt",
        local: "A152",
    },
    {
        id: 100,
        name: "Tụ hóa 35V 100uF JCON",
        local: "A275",
    },
    {
        id: 101,
        name: "Tụ hóa 35V 1000uF",
        local: "A265",
    },
    {
        id: 102,
        name: "Tụ hóa 16V 1000uF JCON",
        local: "A262",
    },
    {
        id: 103,
        name: "Tụ hóa 50V 1uF tần số cao",
        local: "Dưới A274",
    },
    {
        id: 104,
        name: "Tụ hóa 35V 470uF JCON",
        local: "A265",
    },
    {
        id: 105,
        name: "Tụ hóa 16V 330uF JCON",
        local: "3A14",
    },
    {
        id: 106,
        name: "Cầu chì hộp 2A 250V (TÚI 10 CON)",
        local: "2F22",
    },
    {
        id: 107,
        name: "K2698 Mosfet",
        local: "2E65",
    },
    {
        id: 108,
        name: "Dây nguồn nồi cơm điện dài 1.8m lõi 3x0.75mm",
        local: "Thùng dưới gầm bàn máy tính",
    },
    {
        id: 109,
        name: "Cầu đấu 3P KF128 2.54mm màu xanh",
        local: "1C64",
    },
    {
        id: 110,
        name: "Transistor S8050 SMD (TÚI 10 CON)",
        local: "A325",
    },
    {
        id: 111,
        name: "Triac BT151 500R",
        local: "A323",
    },
    {
        id: 112,
        name: "Cuộn cảm vạch 1W 0510 1W 2.2mH (10 chiếc)",
        local: "3D24",
    },
    {
        id: 114,
        name: "Tụ hóa 16V 10000uF JCON",
        local: "Dưới A263",
    },
    {
        id: 115,
        name: "Rơ le nhiệt ksd301 60 độ",
        local: "A242",
    },
    {
        id: 116,
        name: "Tụ lọc nguồn AC 0.33uF 275V 15mm",
        local: "A342",
    },
    {
        id: 117,
        name: "Cầu chì thủy tinh 15A 3x10mm chất lượng tốt",
        local: "1E41",
    },
    {
        id: 119,
        name: "Cầu chì sứ hàn chân 20A 6X30mm (TÚI 10 CON)",
        local: "1E45",
    },
    {
        id: 120,
        name: "Triac BTA16 800B",
        local: "2E32",
    },
    {
        id: 121,
        name: "IC nguồn TNY280PN DIP-7 thường",
        local: "3D31",
    },
    {
        id: 122,
        name: "Tụ CBB, tụ keo 630V 10nF",
        local: "???",
    },
    {
        id: 123,
        name: "N531 IC lái bếp từ chất lượng tốt (CẮM)",
        local: "2E11",
    },
    {
        id: 124,
        name: "N531 IC lái bếp từ chất lượng tốt. (DÁN)",
        local: "2E11",
    },
    {
        id: 125,
        name: "IGBT GT40Q321 GT40Q322 GT40Q323 40A 1200V dùng cho bếp từ, nồi cơm tháo máy nguyên bản chất lượng tốt",
        local: "3E13",
    },
    {
        id: 126,
        name: "IGBT bếp từ 40RR22 40A 1353V hàng zin tháo máy chất lượng tốt",
        local: "2B52",
    },
    {
        id: 127,
        name: "40T65 IGBT FGH40T65 40A 650V",
        local: "2E61",
    },
    {
        id: 128,
        name: "LED dán 0805 (10 CHIẾC) xanh dương (xanh lam)",
        local: "4B64",
    },
    {
        id: 129,
        name: "Rơ le nhiệt 30-110 độ (xem kỹ thống số trên máy và núm)",
        local: "1C25",
    },
    {
        id: 130,
        name: "Kẹp cá sấu lớn bằng đồng đỏ + đen",
        local: "1E15",
    },
    {
        id: 131,
        name: "Cầu chì dẹp chân to 32V 20A",
        local: "1E51",
    },
    {
        id: 132,
        name: "Tụ hóa 50V 2200uF tần số cao",
        local: "A272",
    },
    {
        id: 133,
        name: "Pin CR2032 3V lithium Tianqi",
        local: "A463",
    },
    {
        id: 134,
        name: "Jack nguồn DC cái 5.5x2.5mm loại tốt",
        local: "1A61",
    },
    {
        id: 135,
        name: "10A10 Diode chỉnh lưu 10A 1000V loại tốt",
        local: "3B32",
    },
    {
        id: 136,
        name: "Jack nguồn DC cái 5.5x2.5mm đấu dây vỏ nhựa",
        local: "2E61",
    },
    {
        id: 137,
        name: "Tụ hóa 25V 220uF JCON",
        local: "2E61",
    },
    {
        id: 138,
        name: "Pin 18650 1800mAh xanh dương đậm",
        local: "1F53",
    },
    {
        id: 139,
        name: "IC VIPER12A SOP-8",
        local: "A162",
    },
    {
        id: 140,
        name: "Lá ủ nồi cơm điện 40W 220V chất lượng tốt",
        local: "2B12",
    },
    {
        id: 141,
        name: "TM1638 IC quét led và phím bấm chất lượng tốt",
        local: "2E15",
    },
    {
        id: 142,
        name: "Chụp đầu đèn lò vi sóng lỗ lục giác",
        local: "1C14",
    },
    {
        id: 143,
        name: "IGBT bếp từ H20R1353 -add không mới",
        local: "2B51",
    },
    {
        id: 144,
        name: "Transistor C1815 NPN (TÚI 10 CON)",
        local: "A323",
    },
    {
        id: 145,
        name: "B772 2SB772 PNP Transistor 3A 30V TO-126 chính hãng",
        local: "A181",
    },
    {
        id: 146,
        name: "Tụ lọc nguồn AC 1uF 275V chân 22mm",
        local: "A341",
    },
    {
        id: 147,
        name: "IC nguồn MIP2F2 DIP-7 chính hãng Panasonic",
        local: "2D33",
    },
    {
        id: 147,
        name: "Thạch Anh 32.768KHz Chân cắm",
        local: "A372",
    },
    {
        id: 147,
        name: "Biến trở EC11 TRỤC TRÒN 15MM",
        local: "3C53",
    },
    {
        id: 147,
        name: "Biến trở EC11 TRỤC VÁT 15MM",
        local: "3C53 - Có ốc",
    },
    {
        id: 147,
        name: "Cầu chì sứ 20A 5X20MM (10 CON)",
        local: "A113",
    },
    {
        id: 147,
        name: "Cảm biến nhiệt 50K mf58 (TÚI 10 CON)",
        local: "2E25",
    },
    {
        id: 147,
        name: "Tụ hóa 16V 470uF JCON",
        local: "3A14",
    },
    {
        id: 147,
        name: "KIA7805A TO-220 chính hãng",
        local: "3E43",
    },
    {
        id: 147,
        name: "Mosfet IRF3205 110A 55V TO-220 chính hãng IR",
        local: "3D44",
    },
    {
        id: 147,
        name: "Công tắc nồi cơm điện tiếp điểm đồng 3650W",
        local: "2B55",
    },
    {
        id: 147,
        name: "Tụ quạt 4uf 450V 4 chân jack cắm",
        local: "Trên 1B35",
    },
    {
        id: 147,
        name: "Mắt nhận hồng ngoại HT1838",
        local: "4B51",
    },
    {
        id: 147,
        name: "Rơ le nhiệt nồi áp suất",
        local: "2B52",
    },
    {
        id: 147,
        name: "Rơ le nhiệt nồi cơm SUOER loại tốt có vỏ hộp",
        local: "Kệ Tầng 1 cạnh anh Lộc",
    },
    {
        id: 147,
        name: "IC nguồn 78L05 cắm chính hãng đóng dây",
        local: "2E12",
    },
    {
        id: 147,
        name: "IC nguồn 78M12",
        local: "3E55",
    },
    {
        id: 147,
        name: "Tay hàn HAKKO 907A cổ nhựa",
        local: "Trong kho (T2- Kệ cạnh Gen)",
    },
    {
        id: 147,
        name: "Sensor nhiệt 80W loại gắn",
        local: "2C52",
    },
    {
        id: 147,
        name: "Sensor nhiệt 80W loại hàn - (3127_80W)",
        local: "3C55",
    },
    {
        id: 147,
        name: "IC nguồn LNK626PG DIP-7 chính hãng Power Integrations",
        local: "2D65",
    },
    {
        id: 147,
        name: "IGBT bếp từ 50N324 (50A-1000V) bóc máy",
        local: "2B54",
    },
    {
        id: 147,
        name: "TM1628 IC quét led và phím bấm chất lượng tốt",
        local: "A315",
    },
    {
        id: 147,
        name: "Chiết áp đôi WH148 50K",
        local: "3A34",
    },
    {
        id: 147,
        name: "Chiết áp đôi RK097G xanh 15mm 50K",
        local: "3A55",
    },
    {
        id: 147,
        name: "Công tắc bập bênh đôi KCD6-212N 16A 250V 6 chân (CÓ ĐÈN) - (IL1156)",
        local: "3D42",
    },
    {
        id: 147,
        name: "Công tắc bập bênh KCD3 16A/250V 3P 13x31mm có đèn (Công tắc Lioa)",
        local: "A365",
    },
    {
        id: 147,
        name: "Rơ le nhiệt ksd301 95 độ",
        local: "A251",
    },
    {
        id: 147,
        name: "Cầu chì ống sứ 1A 5X20MM 10 CON",
        local: "A111",
    },
    {
        id: 147,
        name: "Công tắc gạt SS12D00G3 chất lượng tốt",
        local: "A364",
    },
    {
        id: 147,
        name: "Tụ hóa 50V 10uF tần số cao",
        local: "Dưới A274",
    },
    {
        id: 147,
        name: "LED 5mm xanh dương",
        local: "4B31",
    },
    {
        id: 147,
        name: "Mỏ hàn thiếc no907 + kèm thiếc",
        local: "Rổ xanh dương (chỗ để mỏ hàn)",
    },
    {
        id: 147,
        name: "Đế gác nhỏ hàn 1",
        local: "Rổ vàng (cạnh công tắc ấm siêu tốc)",
    },
    {
        id: 147,
        name: "Keo tản nhiệt CPU laptop HY610 chất lượng tốt",
        local: "1C33",
    },
    {
        id: 147,
        name: "Rơ le nhiệt ksd301 140 ĐỘ ĐẾ SỨ",
        local: "1F12",
    },
    {
        id: 147,
        name: "Mỡ hàn NT 70G",
        local: "Hết trong thùng lấy ở cầu thang",
    },
    {
        id: 147,
        name: "Dimmer loại núm rời 2000W",
        local: "Chỗ công tắc ấm siêu tốc",
    },
    {
        id: 147,
        name: "Công tắc bập bênh KCD3 16A 250V 3 chế độ 3 chân màu đen",
        local: "A365",
    },
    {
        id: 147,
        name: "Công tắc bập bênh KCD3 xanh lá",
        local: "A365",
    },
    {
        id: 147,
        name: "IC nguồn Viper22A chất lượng tốt",
        local: "A172",
    },
    {
        id: 147,
        name: "Chiết áp công tắc 100k WH148",
        local: "3A43",
    },
    {
        id: 147,
        name: "Tua vít trợ lực",
        local: "Cạnh cửa",
    },
    {
        id: 147,
        name: "Đế ấm siêu tốc kiểu 1 thông dụng",
        local: "có 2 cái: 1C51 và 1C52",
    },
    {
        id: 147,
        name: "Pin 9V Panasonic chính hãng chất lượng cao",
        local: "A471",
    },
    {
        id: 147,
        name: "Relay nhiệt nồi cơm điện lõi nhỏ chân tròn",
        local: "1C34",
    },
    {
        id: 147,
        name: "Tô vít đen nhỏ 4 cạnh",
        local: "1F15",
    },
    {
        id: 147,
        name: "Jack nguồn DC cái 5.5x2.1mm loại tốt",
        local: "A152",
    },
    {
        id: 147,
        name: "D882 2SD882 NPN Transistor 3A 40V TO-126 chính hãng.",
        local: "3E41",
    },
    {
        id: 147,
        name: "Tụ hóa 35V 4700uF JCON",
        local: "A382",
    },
    {
        id: 147,
        name: "Pin aaa duracell vỉ 2 viên",
        local: "A483",
    },
    {
        id: 147,
        name: "Relay 3V Songle 5 chân chất lượng tốt",
        local: "3C65",
    },
    {
        id: 147,
        name: "Pin AAA panasonic",
        local: "A433",
    },
    {
        id: 147,
        name: "Nút nhấn 4 chân dán 4x4x4.3mm chất lượng cao túi 10 chiếc",
        local: "2E22",
    },
    {
        id: 147,
        name: "Nút nhấn 4 chân dán 4x4x1.7mm chất lượng cao túi 10 chiếc",
        local: "3D45",
    },
    {
        id: 147,
        name: "Cút nối dây điện",
        local: "2C15",
    },
    {
        id: 147,
        name: "Relay nhiệt ksd301 170 độ",
        local: "2F21",
    },
    {
        id: 147,
        name: "Relay nhiệt ksd301 180 độ",
        local: "1F11",
    },
    {
        id: 147,
        name: "HF115F-024-1ZS3 Relay 24V 16A/250V 8 chân",
        local: "??? (Nếu hết- trong kho T2 đằng sau thùng carton",
    },
    {
        id: 147,
        name: "Lõi nhiệt 1321 cho trạm hàn 936 chính hãng",
        local: "Trong kho dưới đất- Cạnh thùng mỡ hàn thiếc",
    },
    {
        id: 147,
        name: "Tụ mica 0.68nF - 220nF 2A 100V ( túi 10 chiếc )",
        local: "3E35",
    },
    {
        id: 147,
        name: "Động cơ quay đĩa lò vi sóng 30V SM-16T TRỤC VÁT chất lượng tốt.",
        local: "2C25",
    },
    {
        id: 147,
        name: "Ic chức năng HC4053 74HC4053 TSSOP-16 chính hãng NXP chất lượng",
        local: "2F15",
    },
    {
        id: 147,
        name: "Linh kiện Diac DB3 chất lượng tốt",
        local: "Trong kho",
    },
    {
        id: 147,
        name: "IGBT bếp từ H20R1203 chân dài 2cm",
        local: "Trên A224",
    },
    {
        id: 147,
        name: "KBPC5010 Diode cầu 50V 1000V DIP-4 chính hãng SEP chân đồng",
        local: "4C13",
    },
    {
        id: 147,
        name: "10K WH148 chiết áp đơn",
        local: "3A31",
    },
    {
        id: 147,
        name: "Tụ hóa 25V 3300uF 13x25mm tần số cao",
        local: "A275",
    },
    {
        id: 147,
        name: "IGBT GT60M303 60M303 60A 900V tháo máy",
        local: "2B55",
    },
    {
        id: 147,
        name: "IC nguồn 7912",
        local: "2E14",
    },
    {
        id: 147,
        name: "IC nguồn Viper12A",
        local: "3E33",
    },
    {
        id: 147,
        name: "Nút nhấn 4 chân 6x6x5 chân đồng chất lượng tốt",
        local: "2C63",
    },
    {
        id: 147,
        name: "Relay 3V Songle 5 chân chất lượng tốt",
        local: "3C65",
    },
    {
        id: 147,
        name: "LED 5mm vàng",
        local: "4B32",
    },
    {
        id: 147,
        name: "Jack nguồn DC cái 5.5x2.1mm tròn DC-022",
        local: "A154",
    },
    {
        id: 147,
        name: "Jack nguồn DC đực 5.5x2.1mm loại tốt lõi nhựa vàng",
        local: "1A55",
    },
    {
        id: 147,
        name: "ABS10 Diode cầu 1A 1000V SOP-4",
        local: "2D45",
    },
    {
        id: 147,
        name: "Biến trở EC12",
        local: "3C54",
    },
    {
        id: 147,
        name: "Chiết áp đơn 3590S 2W xoay nhiều vòng 50K",
        local: "3A85",
    },
    {
        id: 147,
        name: "Chiết áp đơn 3590S 2W xoay nhiều vòng 100K",
        local: "3A85",
    },
    {
        id: 147,
        name: "Chiết áp đơn RV09 3 chân đứng 100K",
        local: "3A15",
    },
    {
        id: 147,
        name: "Biến trở tam giác RM063 50K",
        local: "4B15",
    },
    {
        id: 147,
        name: "Cọc đồng trụ đồng m3 đực cái chất lượng cao (15mm cái cái)",
        local: "??? chưa có",
    },
    {
        id: 147,
        name: "Điện trở sứ 5W 22K",
        local: "Kho - T1 - kệ đối diện kệ TỤ KHỞI ĐỘNG",
    },
    {
        id: 147,
        name: "Diode máy hàn D92 02 20A 200V tháo máy nguyên bản chất lượng tốt",
        local: "A213",
    },
    {
        id: 147,
        name: "PIN đũa Maxell AAA 1.5V (vỉ 2 viên)",
        local: "1F51 - hết có thể thay thế A471 pin Panasonic - nhưng phải hỏi trước",
    },
    {
        id: 147,
        name: "Đế pin CR2025/CR2032 DIP chân cắm đứng",
        local: "A472",
    },
    {
        id: 147,
        name: "Pin cúc áo CR2032 3V hàn mạch chân đứng chất lượng",
        local: "A411",
    },
    {
        id: 147,
        name: "Bo nguồn bếp từ 5V 12v 18v Chất lượng tốt độ bền cao",
        local: "2B65",
    },
    {
        id: 147,
        name: "Công tắc bập bênh tròn KCD1-105 6(4)A 250V 2P không đèn",
        local: "3D34",
    },
    {
        id: 147,
        name: "Công tắc volume vô cấp EC11 15mm 20mm 3 chân Ilinhkien",
        local: "2C51 - Có ốc",
    },
    {
        id: 147,
        name: "Bút thử điện cảm ứng có còi báo",
        local: "4C21",
    },
    {
        id: 147,
        name: "Núm vặn nồi áp suất",
        local: "1C55",
    },
    {
        id: 147,
        name: "OB2269CP SOP-8",
        local: "2D31",
    },
    {
        id: 147,
        name: "IC nguồn TOP257YN TOP257 chính hãng",
        local: "3D33",
    },
    {
        id: 147,
        name: "Mắt hồng ngoại HX1838 VS1838",
        local: "4B31",
    },
    {
        id: 147,
        name: "Mạch nguồn 12V 400mA",
        local: "4C43",
    },
    {
        id: 147,
        name: "Cặp sò âm thanh NJW0281G NJW0302G tháo máy nguyên bản",
        local: "3E13",
    },
    {
        id: 147,
        name: "H30PR5 tháo máy IGBT 30A 1350VC",
        local: "Dưới bàn máy tính",
    },
    {
        id: 147,
        name: "Công tắc ấm siêu tốc SL - 888",
        local: "3C65",
    },
    {
        id: 147,
        name: "Tụ kẹo 400V 335j 3.3uF",
        local: "3E33",
    },
    {
        id: 147,
        name: "Điện trở nhiệt NTC 10D-11",
        local: "4D61",
    },
    {
        id: 147,
        name: "Led dán 0603 hồng",
        local: "4B65",
    },
    {
        id: 147,
        name: "Tụ dán 1206 SMD 22nF",
        local: "1D15",
    },
    {
        id: 147,
        name: "20A10 Diode chỉnh lưu 20A 1000V loại tốt",
        local: "3B33",
    },
    {
        id: 147,
        name: "PIN CR2025 Panasonic chính hãng chất lượng tốt",
        local: "A443",
    },
    {
        id: 147,
        name: "LM324 LM324DR SOP-14 chính hãng TI",
        local: "A165",
    },
    {
        id: 147,
        name: "Pin CR1220 hàn mạch chân nằm chất lượng tốt",
        local: "A413",
    },
    {
        id: 147,
        name: "IC quang EL6N137 DIP-8 chính hãng Everlight",
        local: "A161",
    },
    {
        id: 147,
        name: "IC quang MOC3020",
        local: "2F14",
    },
    {
        id: 147,
        name: "Triac MAC97A8 0.8A 600V chân cắm chất lượng tốt.",
        local: "2E34",
    },
    {
        id: 147,
        name: "Triac BTA12",
        local: "2D55",
    },
    {
        id: 147,
        name: "IC nguồn 7805 chính hãng",
        local: "1F51",
    },
    {
        id: 147,
        name: "IC nguồn SM7028 SM7028B chân cắm chất lượng tốt",
        local: "2D34",
    },
    {
        id: 147,
        name: "IC nguồn 7812",
        local: "3E35",
    },
    {
        id: 147,
        name: "IC nguồn 7815",
        local: "3E34",
    },
    {
        id: 147,
        name: "IC nguồn 7805 thường",
        local: "3E35",
    },
    {
        id: 147,
        name: "Pin CR1220 Panasonic chính hãng chất lượng tốt",
        local: "A482",
    },
    {
        id: 147,
        name: "Pin 9V Tianqiu chất lượng cao.",
        local: "A462",
    },
    {
        id: 147,
        name: "TM1668 IC quét led và bàn phím chất lượng tốt",
        local: "2E15",
    },
    {
        id: 147,
        name: "IC nguồn TNY279PN DIP-7 chính hãng Power Integrations",
        local: "2D45",
    },
    {
        id: 147,
        name: "FAN7393 SOP-14 chính hãng",
        local: "2F25",
    },
    {
        id: 147,
        name: "IGBT bếp từ H20MR5 IHW20N120R5 40A 1200V tháo máy chất lượng tốt",
        local: "2B51",
    },
    {
        id: 147,
        name: "Tụ sứ vàng 50V 100nF túi 10 con",
        local: "kệ 3E",
    },
    {
        id: 147,
        name: "IGBT H25R1203 25A 1200V tháo máy.",
        local: "2B52",
    },
    {
        id: 147,
        name: "Công tắc gạt MTS-202 5A 125V Xanh 6 chân 2 chế độ ON-ON",
        local: "A334",
    },
    {
        id: 147,
        name: "Công tắc hành trình KW11-N 3P có con lăn",
        local: "3B25",
    },
    {
        id: 147,
        name: "PIN CR1620 Panasonic chính hãng chất lượng",
        local: "A474",
    },
    {
        id: 147,
        name: "Mũi hàn T12 cong",
        local: "4C61",
    },
    {
        id: 147,
        name: "IGBT GT60N321 60N321 60A 1000V tháo máy",
        local: "2B55",
    },
    {
        id: 147,
        name: "GBJ5010 Diode cầu 50A 1000V chính hãng SEB Đài Loan",
        local: "A211",
    },
    {
        id: 147,
        name: "Công tắc gạt SS12F15 G6 6mm 3P",
        local: "A355",
    },
    {
        id: 147,
        name: "Pin Camelion AG13/LR44/A76/SR44W/GP76A/357 chính hãng chất lượng",
        local: "A464",
    },
    {
        id: 147,
        name: "RJH60F5 60F IGBT máy hàn, bếp từ 80A 600V nguyên bản tháo máy chất lượng tốt",
        local: "2B63",
    },
    {
        id: 147,
        name: "Chân cắm đèn lò vi sóng màu trắng bền bỉ",
        local: "3B14",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Thạch anh 12mhz 49SMD",
        local: "2C43",
    },
    {
        id: 147,
        name: "IC quang TLP351 P351 SOP-8 Toshiba",
        local: "3D12",
    },
    {
        id: 147,
        name: "IC quang TLP350 SOP-8 Toshiba",
        local: "3D12",
    },
    {
        id: 147,
        name: "10D151k TỤ BẢO VỆ QUÁ ÁP",
        local: "2D64",
    },
    {
        id: 147,
        name: "PN8034 DIP-7 chính hãng chipown",
        local: "2D43",
    },
    {
        id: 147,
        name: "IGBT FGA25N120 THÁO MÁY",
        local: "2B52",
    },
    {
        id: 147,
        name: "Diode xung FR307 (10con)",
        local: "3B61",
    },
    {
        id: 147,
        name: "KA3525 DIP-16 chính hãng Fairchild",
        local: "2D32",
    },
    {
        id: 147,
        name: "LM2596 Mạch hạ áp DC 3A LM2596S",
        local: "4B52",
    },
    {
        id: 147,
        name: "IGBT RJH1BF7 1BF7 60A 1100V tháo máy chất lượng tốt",
        local: "A232",
    },
    {
        id: 147,
        name: "IC nguồn TNY276PN DIP-7 chính hãng Power Integrations",
        local: "3D32",
    },
    {
        id: 147,
        name: "IGBT bếp từ H30R1202",
        local: "A222",
    },
    {
        id: 147,
        name: "SI2301 A1SHB",
        local: "1F22",
    },
    {
        id: 147,
        name: "SI2302 SI2302 A2SHB túi 10 con",
        local: "1F12 - 10 CON",
    },
    {
        id: 147,
        name: "Triac BT138",
        local: "A323",
    },
    {
        id: 147,
        name: "Triac BT131",
        local: "2E34",
    },
    {
        id: 147,
        name: "Triac BT134",
        local: "2E34",
    },
    {
        id: 147,
        name: "Diode xung SF58 dòng điện 5A điện áp 600V DO-201AD loại tốt",
        local: "3B35",
    },
    {
        id: 147,
        name: "HP4066 CD74HC4066PW TSSOP-14 chính hãng TI",
        local: "2F15",
    },
    {
        id: 147,
        name: "Chiết áp đơn RV09 3 chân đứng 1K",
        local: "3A65",
    },
    {
        id: 147,
        name: "Đôi jack bắp chuối cái 4mm (đen+đỏ)",
        local: "1A81",
    },
    {
        id: 147,
        name: "Mosfet 5N60 lưng nhựa chất lượng tốt",
        local: "3D14",
    },
    {
        id: 147,
        name: "78L05A 7805 SOP-8 chính hãng ST",
        local: "2F12",
    },
    {
        id: 147,
        name: "IC nguồn MIP2K3",
        local: "2D33",
    },
    {
        id: 147,
        name: "IC nguồn MIP2E5DMY TO-220 chính hãng Panasonic",
        local: "1F21",
    },
    {
        id: 147,
        name: "Điện trở vuông 3362P 100K",
        local: "3A12",
    },
    {
        id: 147,
        name: "PN8024R DIP-7 chính hãng chipown",
        local: "2D43",
    },
    {
        id: 147,
        name: "IGBT bếp từ H30R1353 tháo máy",
        local: "2B53",
    },
    {
        id: 147,
        name: "PIN CR2032 hàn mạch chân nằm chất lượng",
        local: "4A12",
    },
    {
        id: 147,
        name: "IC MIP283 tháo máy chất lượng tốt",
        local: "2D33",
    },
    {
        id: 147,
        name: "LM393 chân cắm",
        local: "3A14",
    },
    {
        id: 147,
        name: "Biến trở vuông 3362P 5K",
        local: "3A13",
    },
    {
        id: 147,
        name: "Giăng nồi áp suất điện đa năng 22cm 24cm chất lượng tốt (3L/4L)",
        local: "Trong kho trên tụ hóa",
    },
    {
        id: 147,
        name: "IC nguồn THX202",
        local: "3D45",
    },
    {
        id: 147,
        name: "Diode 1N5408 3A 1000V chân cắm chất lượng tốt.",
        local: "3B34",
    },
    {
        id: 147,
        name: "GBU2510 Diode cầu 25A 1000V DIP-4 chính hãng SEB",
        local: "2B62",
    },
    {
        id: 147,
        name: "Tụ mica 100V (10 chiếc) 2A102J 1nF",
        local: "3E41",
    },
    {
        id: 147,
        name: "Tụ mica 100V (10 chiếc) 2A472J 4.7nF",
        local: "1F44",
    },
    {
        id: 147,
        name: "A1015 PNP Transistor 0.15A 60V TO-92 (10c)",
        local: "1F22",
    },
    {
        id: 147,
        name: "LM393 LM393DR LM393P Ic khuếch đại thuật toán",
        local: "2E14",
    },
    {
        id: 147,
        name: "Công tắc gạt SS12D00G5 1P2T tay gạt 5mm",
        local: "trên 4D62 (hàng này lấy hàng bên khác)",
    },
    {
        id: 147,
        name: "IGBT 40WR21 40QR21 40A 1800V tháo máy chất lượng tốt",
        local: "2B54",
    },
    {
        id: 147,
        name: "Công tắc quạt treo tường",
        local: "4B54 phía trong (có lò xo và giấy)",
    },
    {
        id: 147,
        name: "IGBT bếp từ FGH60T65",
        local: "3B44",
    },
    {
        id: 147,
        name: "Cầu chì lò vi sóng 900mA chất lượng tốt",
        local: "2B44",
    },
    {
        id: 147,
        name: "Dây bus 2P XH2.54 dây 22AWG 2 đầu cắm (15cm)",
        local: "Dưới 4D62",
    },
    {
        id: 137,
        name: "Công tắc gạt SS12F15 G6 6mm",
        local: "2E61",
    },
    {
        id: 147,
        name: "SR3100 SS310-SMA Diode Schottky 3A 100V",
        local: "1F31",
    },
    {
        id: 147,
        name: "SR5200 Schottky Diode 5A 200V DO-27 DIP",
        local: "3B35",
    },
    {
        id: 147,
        name: "Chiết áp công tắc đơn 50K RV097NS xanh 5 chân",
        local: "3A62",
    },
    {
        id: 147,
        name: "Chiết áp công tắc đơn 100K RV097NS xanh 5 chân",
        local: "3A62",
    },
    {
        id: 147,
        name: "Chiết áp công tắc đơn 10K RV097NS xanh 5 chân",
        local: "3A61",
    },
    {
        id: 147,
        name: "DK1203 DIP-8 chính hãng DKS",
        local: "A321",
    },
    {
        id: 147,
        name: "Công tắc volume vô cấp EC16 trục vát 15mm 3 chân",
        local: "1C65 - Không ốc",
    },
    {
        id: 147,
        name: "Transistor S8050 chính hãng đóng dây túi 10 con",
        local: "A231",
    },
    {
        id: 147,
        name: "Diode xung FR207 (10 CON)",
        local: "3B33",
    },
    {
        id: 147,
        name: "Động cơ điện túp năng quạt loại tốt",
        local: "Rổ phía trong cùng cạnh bóng đèn HALOGEN",
    },
    {
        id: 147,
        name: "Tụ nhôm 50V 47uf",
        local: "1D21",
    },
    {
        id: 147,
        name: "Tụ nhôm 50V 22uf",
        local: "1D21",
    },
    {
        id: 147,
        name: "Transistor TIP41C 6A 100V Chất lượng tốt",
        local: "3E23",
    },
    {
        id: 147,
        name: "Đế IC 16 chân DIP-16 loại tròn chất lượng tốt",
        local: "1D44",
    },
    {
        id: 147,
        name: "Chiết áp đơn 3590S 2W xoay nhiều vòng 10K",
        local: "3A84",
    },
    {
        id: 147,
        name: "Chiết áp đơn WXD3-13-2W 680R",
        local: "3A74",
    },
    {
        id: 147,
        name: "IC nguồn TOP250YN chính hãng",
        local: "2D44",
    },
    {
        id: 147,
        name: "IC nguồn TOP253PN DIP chính hãng",
        local: "1D64",
    },
    {
        id: 147,
        name: "Tụ dán 0603 SMD 1uF",
        local: "1D15",
    },
    {
        id: 147,
        name: "Tụ dán 0603 SMD 2.2uF",
        local: "1D15",
    },
    {
        id: 147,
        name: "Công tắc đèn pin KAN-28 18x12mm",
        local: "2B25",
    },
    {
        id: 147,
        name: "Mosfet IRF3205 TO-220 55V 110A",
        local: "3D44",
    },
    {
        id: 147,
        name: "UC3843B DIP-8 chính hãng ST",
        local: "3D42",
    },
    {
        id: 147,
        name: "IC nguồn AP8012 thay thế cho Viper12A chất lượng tốt.",
        local: "3E33",
    },
    {
        id: 147,
        name: "Relay bảo vệ 15A tự động",
        local: "Trong kho",
    },
    {
        id: 147,
        name: "Transistor 2N3904 MMBT3904 1AM 0.2A 40V SOT-23 túi 10 con",
        local: "1F13",
    },
    {
        id: 147,
        name: "Tụ sứ vàng 50V 100nF túi 10 con",
        local: "1E11 - 0,1uF",
    },
    {
        id: 147,
        name: "Quạt tản nhiệt 24V 12x12x2.5 Dưới nhà",
        local: "Dưới nhà",
    },
    {
        id: 147,
        name: "LM339 LM339DR DIP-14 cắm loại thường",
        local: "2E13",
    },
    {
        id: 147,
        name: "Transistor TIP42C 6A 100V chất lượng tốt",
        local: "3E23",
    },
    {
        id: 147,
        name: "MCR100 Thyristor 1A 600V chất lượng cao (cắm)",
        local: "1F11",
    },
    {
        id: 147,
        name: "Kẹp móc màu đỏ.",
        local: "1C25",
    },
    {
        id: 147,
        name: "Đế IC 8 chân DIP-8 loại tròn chất lượng tốt",
        local: "1D45",
    },
    {
        id: 147,
        name: "Thạch anh 2 chân 455E CRB-455E",
        local: "2C33",
    },
    {
        id: 147,
        name: "Động cơ quay đĩa lò vi sóng 220V trục vát chất lượng tốt",
        local: "2C55",
    },
    {
        id: 147,
        name: "Thanh gậy màn hình tròn dài đầu dẹp",
        local: "4C41",
    },
    {
        id: 147,
        name: "D25XB80 Diode cầu 25A 1000V DIP-4",
        local: "3E44",
    },
    {
        id: 147,
        name: "Tụ bếp từ 10uF nằm màu xanh",
        local: "Dưới nhà phía trong",
    },
    {
        id: 147,
        name: "IGBT bếp từ 40RR22",
        local: "3E32",
    },
    {
        id: 147,
        name: "6A10 Diode chỉnh lưu 6A 1000V",
        local: "3B32",
    },
    {
        id: 147,
        name: "Mosfet 20N60 lưng nhựa chất lượng tốt.",
        local: "3D15",
    },
    {
        id: 147,
        name: "Thiếc hàn 10G nhỏ",
        local: "sn63 1mm 1m",
    },
    {
        id: 147,
        name: "IC nguồn 7809 chính hãng",
        local: "1F51",
    },
    {
        id: 147,
        name: "Còi chíp 3V TMB09A03 9x5.5",
        local: "2E23",
    },
    {
        id: 147,
        name: "Chiết áp đơn RV09 3 chân đứng 10K",
        local: "1D54",
    },
    {
        id: 147,
        name: "ICE2QS03 DIP-8 chính hãng infineon",
        local: "2E11",
    },
    {
        id: 147,
        name: "GBJ3510 Diode cầu 35A 1000V tháo máy cắt chân",
        local: "2B65",
    },
    {
        id: 147,
        name: "IC nguồn AP8022 DIP-8",
        local: "3E44",
    },
    {
        id: 147,
        name: "TA8316 IC lái IGBT nồi cơm cao tần chất lượng tốt",
        local: "3E31",
    },
    {
        id: 147,
        name: "290N08 TFP290N08 N-Mosfet 290A 80V",
        local: "3E13",
    },
    {
        id: 147,
        name: "Công tắc bập bênh KCD3 16A 250V 3 chế độ 3 chân màu đen",
        local: "3D41",
    },
    {
        id: 147,
        name: "Công tắc bập bênh XL601-106 6A 250V 3 chế độ 6 chân màu đen",
        local: "3D32",
    },
    {
        id: 147,
        name: "chiết áp đơn RK097N xanh 15mm 50K chất lượng tốt",
        local: "3A45",
    },
    {
        id: 147,
        name: "Công tắc đèn pin 2P YT-1712 Đen",
        local: "2B25",
    },
    {
        id: 147,
        name: "TL431 TL431A Cắm chính hãng",
        local: "3E54",
    },
    {
        id: 147,
        name: "Công tắc bập bênh KCD4 15A/250V 6 chân 3 chế độ không đèn",
        local: "3D43",
    },
    {
        id: 147,
        name: "Công tắc gạt MSK-12C02 SMD 7P loại tốt đóng dây (IL0769)",
        local: "3D31",
    },
    {
        id: 147,
        name: "IGBT RJH60F7 60F7 90A 600V tháo máy nguyên bản (IL0058_0)",
        local: "2B63",
    },
    {
        id: 147,
        name: "IC nguồn 7812 chính hãng (IL3187_5)",
        local: "1F52",
    },
    {
        id: 147,
        name: "LM358 LM358DR dán IC so sánh chất lượng tốt",
        local: "2F43",
    },
    {
        id: 147,
        name: "Công tắc bập bênh KCD3 xanh lá",
        local: "3D41",
    },
    {
        id: 147,
        name: "Công tắc bập bênh KCD1-104R 6A250V 15x21mm 4P đèn xanh",
        local: "3D33",
    },
    {
        id: 147,
        name: "IC TDA2030 ic âm thanh chất lượng cao",
        local: "2D65",
    },
    {
        id: 147,
        name: "NE555 cắm - (IL1979_C)",
        local: "3E21",
    },
    {
        id: 147,
        name: "Led dán 0805 10 chiếc Đỏ - (IL0621_7) ",
        local: "3F53",
    },
    {
        id: 147,
        name: "Chiết áp đơn WTH118-2W 4.7K",
        local: "3A51",
    },
    {
        id: 147,
        name: "Tụ sứ vàng 50V 3.3nF túi 10 con - (IL0645_1)",
        local: "1E13",
    },
    {
        id: 147,
        name: "IGBT H30R1602 THÁO MÁY",
        local: "2B52",
    },
    {
        id: 147,
        name: "Công tắc bập bênh RY1-101 6A 250V 2P 15x21mm không đèn",
        local: "3D35",
    },
    {
        id: 147,
        name: "KBP310 Diode cầu 3A 1000V DIP4 chính hãng SEP (thay thế KBP307, KBP306)",
        local: "2B62",
    },
    {
        id: 147,
        name: "KBP210 Diode cầu 2A 1000V DIP-4 loại tốt",
        local: "2B62",
    },
    {
        id: 147,
        name: "Cuộn Cảm Cắm 6x8mm 0608 100uH",
        local: "2D13",
    },
    {
        id: 147,
        name: "Jack nguồn DC đực 3.5x1.3mm loại tốt",
        local: "1A55",
    },
    {
        id: 147,
        name: "Triac BT151 500R",
        local: "2E33",
    },
    {
        id: 147,
        name: "Công tắc gạt MTS-103 3A 250V xanh 3 chân 3 chế độ ON-OFF-ON",
        local: "1D64",
    },
    {
        id: 147,
        name: "Chiết áp đơn WTH118-2W 470K",
        local: "3A54",
    },
    {
        id: 147,
        name: "Triac BTA41 600B",
        local: "2D54",
    },
    {
        id: 147,
        name: "Biến trở tam giác RM065 500R",
        local: "2F31",
    },
    {
        id: 147,
        name: "Công tắc đèn pin 2P chân cắm YT-1288",
        local: "2B25",
    },
    {
        id: 147,
        name: "D718 8A 160V TO-3P MỚI chính hãng",
        local: "3E42",
    },
    {
        id: 147,
        name: "D688 8A 160V TO-3P MỚI chính hãng",
        local: "3E42",
    },
    {
        id: 147,
        name: "PN8044 DIP-7 chính hãng Chipown",
        local: "1D63",
    },
    {
        id: 147,
        name: "Diode zener dán SMD 1W 3.3V",
        local: "3B23",
    },
    {
        id: 147,
        name: "IGBT bếp từ H20PR5 IHW20N135R5 20A 1350V TO-247 tháo máy chất lượng tốt",
        local: "2B51",
    },
    {
        id: 147,
        name: "AMS1117-3.3V IC ổn áp 3.3V 1A SOT-223",
        local: "1F14",
    },
    {
        id: 147,
        name: "AMS1117-1.2V IC ổn áp 1.2V 1A SOT-223",
        local: "1F15",
    },
    {
        id: 147,
        name: "IC nguồn 78L12",
        local: "1D41",
    },
    {
        id: 147,
        name: "TL084 TL084C SOP-14 chính hãng TI chất lượng tốt",
        local: "2D34",
    },
    {
        id: 147,
        name: "IC nguồn 79L12 12V 0.1A -12V TO-92",
        local: "2F54",
    },
    {
        id: 147,
        name: "40T120FDS IGBT 40A-1200V TO-3P tháo máy manachip",
        local: "3E11",
    },
    {
        id: 147,
        name: "Triac BT136 chính hãng",
        local: "3E22",
    },
    {
        id: 147,
        name: "TOP246YN IC nguồn chính hãng",
        local: "2F41",
    },
    {
        id: 147,
        name: "IC nguồn 78L15",
        local: "2F52",
    },
    {
        id: 147,
        name: "IC nguồn 78L06",
        local: "2F51",
    },
    {
        id: 147,
        name: "Ic nguồn 78L08 0.1A 8V SOT-89",
        local: "2F53",
    },
    {
        id: 147,
        name: "Chiết áp đơn RV09 3 chân đứng 10K",
        local: "3A65",
    },
    {
        id: 147,
        name: "R39MF5 DIP-7 Phototriac chính hãng Sharp",
        local: "3E32",
    },
    {
        id: 147,
        name: "Mạch nguồn 5V 700MA",
        local: "4B35",
    },
    {
        id: 147,
        name: "SDH8302 DIP-8 chất lượng tốt",
        local: "2F55",
    },
    {
        id: 147,
        name: "Mosfet 80NF70 80A 70V mới chính hãng",
        local: "2D22",
    },
    {
        id: 147,
        name: "Tụ tantalum 35V 4.7uF",
        local: "3E51",
    },
    {
        id: 147,
        name: "Công tắc đèn pin 2P chân cắm vuông 112D",
        local: "3D15",
    },
    {
        id: 147,
        name: "Cầu chì hộp 4A 250V túi 10 con",
        local: "2F23",
    },
    {
        id: 147,
        name: "UF4007 Diode xung 1A 1000V DIP chính hãng MIC đóng dây",
        local: "3B25 (10 CON)",
    },
    {
        id: 147,
        name: "2A165 ICE2A165 DIP-8 chính hãng Infineon",
        local: "1D62",
    },
    {
        id: 147,
        name: "BU406 Transistor 7A 400V",
        local: "2D55",
    },
    {
        id: 147,
        name: "IGBT GT60M303 60M303 60A 900V tháo máy",
        local: "2B55",
    },
    {
        id: 147,
        name: "Thạch anh 24mhz 49smd",
        local: "2C43",
    },
    {
        id: 147,
        name: "Thay H20R 1353 --> H20PR5",
        local: "???",
    },
    {
        id: 147,
        name: "Thay H30R 1353 --> H30PR5",
        local: "???",
    },
    {
        id: 147,
        name: "Thay Công tắc ấm siêu tốc trắng cho mọi loại",
        local: "???",
    },
    {
        id: 147,
        name: "Thay H25R1203 --> H20R",
        local: "???",
    },
    {
        id: 147,
        name: "Thay kẹp acquy nhỏ --> acquy to",
        local: "???",
    },
    {
        id: 147,
        name: "Thay chặn lồng đen --> trắng",
        local: "???",
    },
    {
        id: 147,
        name: "Thay nhíp ESD-11 --> nhíp lỗ",
        local: "3E32",
    },
    {
        id: 147,
        name: "Thay 10A10 --> 20A10",
        local: "3E32",
    },
    {
        id: 147,
        name: "Thay VIPER12A --> VIPER22A",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
    {
        id: 147,
        name: "Tụ 104j 2000v",
        local: "3E32",
    },
];

var list = document.querySelector(".list");
var filter = document.querySelector(".filter");
var input = document.querySelector("input");
var formatText = document.querySelector(".information");

// Display product information
let productFIlter = [];
function showProducts(productFIlter) {
    list.innerHTML = "";
    productFIlter.forEach(function (item) {
        let newItem = document.createElement("div");
        let span = document.createElement("span");
        newItem.classList.add("item");
        span.innerHTML = `${item.name}  <hr>------>  <span class='local-text'>${item.local}</span></hr>`;
        newItem.appendChild(span);
        list.appendChild(newItem);
    });
}
showProducts(productFIlter);

filter.addEventListener("submit", submitResult);
function submitResult(e) {
    e.preventDefault();
    let valueFilter = e.target.elements.name.value.toLowerCase();
    productFIlter = listProducts.filter(function (item) {
        if (valueFilter === "") {
            return false;
        }
        return item.name.toLowerCase().includes(valueFilter);
    });
    showProducts(productFIlter);
}

// format Text after clicking to Trung Tuyển text
formatText.addEventListener("click", function () {
    // Auto focus()
    input.focus();

    format();
});

// format content
var format = function () {
    input.value = "";
    list.innerHTML = "";
    input.focus();
};

// Switch between Light & Dark
var packBtn = document.querySelector(".switch-storage i.fa-toggle-off");
var storageBtn = document.querySelector(".switch-storage i.fa-toggle-on");
var searchInnerBackground = document.querySelector(".search-inner");
var searchInnerStorageBackground = document.querySelector(
    ".search-inner-storage"
);

packBtn.addEventListener("click", function () {
    searchInnerBackground.style.display = "none";
    searchInnerStorageBackground.style.display = "block";
    format();
});

// Search by my voice
const speechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition;

if (speechRecognition) {
    const micBtn = document.querySelector(".mic-btn");
    const micIcon = document.querySelector(".mic-btn i");
    const status = document.querySelector(".status");

    const recognition = new speechRecognition();
    recognition.lang = "vi-VN";

    micBtn.addEventListener("click", voiceBtnClick);
    function voiceBtnClick(e) {
        e.preventDefault();

        if (micIcon.classList.contains("fa-microphone")) {
            recognition.start();

            input.value = "";
            list.innerHTML = "";

            setTimeout(() => {
                recognition.stop();
            }, 3500);
        } else {
            recognition.stop();
        }
    }

    recognition.addEventListener("start", startSpeechRecognition);
    function startSpeechRecognition() {
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        status.classList.add("show");
    }

    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition() {
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        status.classList.remove("show");
    }

    recognition.addEventListener("result", resultSpeechRecognition);
    function resultSpeechRecognition(e) {
        const transcript = e.results[0][0].transcript.trim().toLowerCase();
        console.log(transcript);
        input.value = transcript;
        submitResult({
            preventDefault: () => {},
            target: { elements: { name: { value: transcript } } },
        });
    }
}
