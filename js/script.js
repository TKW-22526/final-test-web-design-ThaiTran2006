document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentUrl) && currentUrl !== "") {
            link.classList.add("active");
        } else if (currentUrl === "index.html" || currentUrl === "") {
            if (link.getAttribute("href") === "index.html" || link.getAttribute("href") === "../index.html") {
                link.classList.add("active");
            }
        }
    });

    const buyButtons = document.querySelectorAll(".btn");
    buyButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            if (button.textContent.includes("Xem chi tiết")) return;
            event.preventDefault();
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

    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            alert(`✉️ Chào ${name}! LEGO Shop đã nhận được lời nhắn của bạn gửi từ email ${email}. Chúng tôi sẽ phản hồi trong vòng 24h.`);
            contactForm.reset();
        });
    }
});