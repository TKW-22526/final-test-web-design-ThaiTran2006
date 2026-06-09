const productList = [
{
    id: 1,
    name: "Lego Star Wars Millennium Falcon",
    price: 4500000,
    image: "assests/lego_starwars.jpg", // Bỏ dấu ../ để tìm trong thư mục chung
    description: `Thương hiệu: LEGO (Đan Mạch).\nDòng sản phẩm: Star Wars.\nSố mảnh ghép: 1,351 mảnh.\nĐộ tuổi phù hợp: 9+\nĐặc điểm: Mô hình tàu vũ trụ Millennium Falcon huyền thoại siêu chi tiết.`,
    productLink: "detailpage6.html?id=1" // Kết nối chuẩn đến file detailpage6.html
},
{
    id: 2,
    name: "Lego Technic Bugatti Chiron",
    price: 9500000,
    image: "assests/lego_bugatti.jpg",
    description: `Thương hiệu: LEGO (Đan Mạch).\nDòng sản phẩm: Technic.\nSố mảnh ghép: 3,599 mảnh.\nĐộ tuổi phù hợp: 16+\nĐặc điểm: Mô phỏng siêu xe Bugatti Chiron tỷ lệ 1:8 siêu thực thực tế.`,
    productLink: "detailpage6.html?id=2"
},
{
    id: 3,
    name: "Lego Creator Expert Tàu Titanic",
    price: 16500000,
    image: "assests/lego_titanic.jpg",
    description: `Thương hiệu: LEGO (Đan Mạch).\nSố mảnh ghép: 9,090 mảnh.\nĐặc điểm: Một trong những mô hình LEGO lớn nhất lịch sử, mô phỏng chính xác tàu Titanic.`,
    productLink: "detailpage6.html?id=3"
},
{
    id: 4,
    name: "Lego Harry Potter Lâu Đài Hogwarts",
    price: 11200000,
    image: "assests/ego_hogwarts.jpg",
    description: `Thương hiệu: LEGO (Đan Mạch).\nSố mảnh ghép: 6,020 mảnh.\nĐặc điểm: Trọn bộ lâu đài Hogwarts thu nhỏ đầy phép thuật.`,
    productLink: "detailpage6.html?id=4"
}
];

function addProduct(id, name, price, image, productLink) {
    let col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
    col.innerHTML = `
        <div class="product-item">
            <div class="product-image">
                <img src="${image}" alt="${name}">
            </div>
            <div class="product-info">
                <p class="product-name">${name}</p>
                <p class="product-price">${price.toLocaleString()}đ</p>
                <a href="${productLink}">Xem chi tiết</a>
            </div>
        </div>
    `;
    document.getElementById("product-list").appendChild(col);
}