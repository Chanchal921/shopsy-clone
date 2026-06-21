// ============================
// SHOPSY CLONE SCRIPT
// ============================

$(document).ready(function () {

    // --------------------------
    // ADD TO CART
    // --------------------------
    $(".add-cart").click(function () {
        let productName = $(this)
            .closest(".card")
            .find("h6, h5")
            .first()
            .text().trim();

        alert(productName + " added to cart!");
    });

    // --------------------------
    // ADD TO WISHLIST
    // --------------------------
    $(".add-wishlist").click(function () {
        let productName = $(this)
            .closest(".card")
            .find("h6, h5")
            .first()
            .text().trim();

        alert(productName + " added to wishlist!");
    });

    // --------------------------
    // REMOVE FROM WISHLIST
    // --------------------------
    $(".remove-item").click(function () {
        $(this).closest(".card").fadeOut(500);
    });

    // --------------------------
    // REMOVE FROM CART
    // --------------------------
    $(".remove-btn").click(function () {
        $(this).closest(".card").fadeOut(500);
        alert("Product removed.");
    });

    // --------------------------
    // LOGIN FORM
    // --------------------------
    $("#loginForm").submit(function (e) {
        e.preventDefault();
        let email = $("#email").val();
        let password = $("#password").val();

        if (email === "" || password === "") {
            alert("Please fill all fields.");
        } else {
            alert("Login Successful!");
            window.location.href = "index.html";
        }
    });

    // --------------------------
    // REGISTER FORM
    // --------------------------
    $("#registerForm").submit(function (e) {
        e.preventDefault();

        let name = $("#name").val();
        let mobile = $("#mobile").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let confirm = $("#confirm").val();

        if (name === "" || mobile === "" || email === "" || password === "" || confirm === "") {
            alert("Please fill all fields.");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match.");
            return;
        }

        alert("Registration Successful!");
        window.location.href = "login.html";
    });

    // --------------------------
    // PLACE ORDER
    // --------------------------
    $(".place-order").click(function () {
        alert("Order Placed Successfully!");
    });

    // --------------------------
    // BUY NOW
    // --------------------------
    $(".buy-now").click(function () {
        alert("Proceeding to Checkout...");
    });

    // --------------------------
    // SEARCH BOX
    // --------------------------
    $(".search-box input").keyup(function () {
        let value = $(this).val().toLowerCase();

        $(".product-card").filter(function () {
            $(this).toggle(
                $(this).text().toLowerCase().indexOf(value) > -1
            );
        });
    });

    // --------------------------
    // CATEGORY HANDLING (Fixed)
    // --------------------------

    // Prevent click alert on dropdown category (Women Clothing)
    $(".dropdown-category").click(function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
    });

    // Click handler only for other categories
    $(".category-item:not(.dropdown-category)").click(function () {
        let category = $(this).find("p").text().trim() || "Category";
        alert(category + " selected.");
    });

    // --------------------------
    // MEGA MENU TAB SWITCHING
   // ====================== EXACT MEGA MENU HOVER ======================
const categoryItems = document.querySelectorAll('.category-item');
const megaMenu = document.getElementById('megaMenu');

categoryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        categoryItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        megaMenu.style.display = 'block';
    });
});

megaMenu.addEventListener('mouseenter', () => {
    megaMenu.style.display = 'block';
});

megaMenu.addEventListener('mouseleave', () => {
    megaMenu.style.display = 'none';
    categoryItems.forEach(i => i.classList.remove('active'));
});

document.querySelector('.categories-section').addEventListener('mouseleave', () => {
    megaMenu.style.display = 'none';
    categoryItems.forEach(i => i.classList.remove('active'));
});
    // --------------------------
    // PRODUCT CARD HOVER
    // --------------------------
    $(".product-card").hover(
        function () {
            $(this).addClass("shadow-lg");
        },
        function () {
            $(this).removeClass("shadow-lg");
        }
    );

});

