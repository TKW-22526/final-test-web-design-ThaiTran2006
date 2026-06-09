document.addEventListener("DOMContentLoaded", function () {
    // === 1. TÍNH NĂNG TỰ ĐỘNG ĐỔI TRẠNG THÁI ACTIVE TRÊN THANH MENU ===
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        // Xóa class active cũ
        link.classList.remove("active");
        // Nếu href trùng với tên file hiện tại thì thêm class active
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });

    // === 2. TÍNH NĂNG MUA HÀNG (Dùng cho cả trang Sản Phẩm và trang Chi Tiết) ===
    const buyButtons = document.querySelectorAll(".btn");
    
    buyButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            // Kiểm tra nếu nút này là nút xem chi tiết thì để link nhảy bình thường
            if (button.textContent.includes("Xem chi tiết")) {
                return; 
            }
            
            // Nếu là nút Mua Ngay hoặc các nút đặt hàng khác
            event.preventDefault(); // Ngăn trang bị load lại
            
            // Tìm tên sản phẩm tương ứng gần nút đó nhất
            let productName = "Sản phẩm LEGO";
            const productCard = button.closest(".product-card");
            const detailContent = button.closest(".detail-content");

            if (productCard) {
                productName = productCard.querySelector("h3").textContent;
            } else if (detailContent) {
                productName = detailContent.querySelector("h1").textContent;
            }

            alert(`🎉 Cảm ơn bạn! Đã thêm thành công "${productName}" vào giỏ hàng.`);
        });
    });

    // === 3. TÍNH NĂNG XỬ LÝ FORM LIÊN HỆ (Trang lien-he.html) ===
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Ngăn chặn load lại trang khi gửi form

            // Lấy dữ liệu từ các ô nhập liệu
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;

            // Hiển thị thông báo cá nhân hóa bằng tiếng Việt dễ thương
            alert(`✉️ Chào ${name}! LEGO Shop đã nhận được lời nhắn của bạn gửi từ email ${email}. Chúng tôi sẽ phản hồi trong vòng 24h.`);
            
            // Xóa sạch các ô nhập sau khi gửi thành công
            contactForm.reset();
        });
    }
});