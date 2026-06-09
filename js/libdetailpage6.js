window.onload = function() {
    // 1. Lấy tham số ID từ đường dẫn URL (Ví dụ: ?id=1)
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // 2. Tìm kiếm sản phẩm chính xác trong mảng productList (đã đồng bộ tên mảng)
    const product = productList.find(p => p.id === id);

    // 3. Nếu tìm thấy sản phẩm, tiến hành đổ dữ liệu ra giao diện HTML
    if (product) {
        document.getElementById("product-image").src = product.image;
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-price").innerText = product.price.toLocaleString() + "đ";
        document.getElementById("product-description").innerText = product.description;
    } else {
        // Trường hợp không tìm thấy sản phẩm trùng ID
        document.getElementById("product-name").innerText = "Không tìm thấy sản phẩm LEGO!";
    }
}