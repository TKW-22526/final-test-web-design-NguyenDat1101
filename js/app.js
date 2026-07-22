const danhSachSanPham = [
    {
        "tên sản phẩm": "Vi điều khiển Arduino Uno R3",
        "mã sản phẩm": "ARD-UNO-R3",
        "danh mục": "Vi điều khiển",
        "đường dẫn hình ảnh": "assets/images/arduino.png",
        "alt hình ảnh": "Arduino Uno R3 chính hãng",
        "giới thiệu sản phẩm": "Bo mạch lập trình vi điều khiển phổ biến nhất cho người mới bắt đầu học lập trình IoT và robot.",
        "giá sản phẩm": 185000,
        "đường dẫn chi tiết": "html/arduino-uno-r3.html",
        "tài liệu": "assets/docs/arduino-uno-r3.pdf"
    },
    {
        "tên sản phẩm": "Cảm biến siêu âm HC-SR04",
        "mã sản phẩm": "SEN-HC-SR04",
        "danh mục": "Cảm biến",
        "đường dẫn hình ảnh": "assets/images/hcsr04.png",
        "alt hình ảnh": "Cảm biến siêu âm HC-SR04 đo khoảng cách",
        "giới thiệu sản phẩm": "Cảm biến đo khoảng cách bằng sóng siêu âm từ 2cm đến 400cm, độ chính xác cao.",
        "giá sản phẩm": 35000,
        "đường dẫn chi tiết": "html/hc-sr04.html",
        "tài liệu": "assets/docs/hcsr04.pdf"
    },
    {
        "tên sản phẩm": "Động cơ Servo SG90 9g",
        "mã sản phẩm": "MTR-SER-SG90",
        "danh mục": "Động cơ & Driver",
        "đường dẫn hình ảnh": "assets/images/sg90.png",
        "alt hình ảnh": "Động cơ Servo SG90 nhỏ gọn xoay 180 độ",
        "giới thiệu sản phẩm": "Động cơ servo mini điều khiển góc quay từ 0 đến 180 độ, thích hợp cho robot cánh tay.",
        "giá sản phẩm": 40000,
        "đường dẫn chi tiết": "html/sg90.html",
        "tài liệu": "assets/docs/sg90.pdf"
    },
    {
        "tên sản phẩm": "Mạch Wifi ESP8266 NodeMCU Lolin",
        "mã sản phẩm": "WIF-ESP8266",
        "danh mục": "Vi điều khiển",
        "đường dẫn hình ảnh": "assets/images/esp8266.png",
        "alt hình ảnh": "Mạch phát triển ESP8266 NodeMCU V3",
        "giới thiệu sản phẩm": "Board phát triển tích hợp kết nối Wifi cực mạnh mẽ, lựa chọn hàng đầu cho Smarthome IoT.",
        "giá sản phẩm": 95000,
        "đường dẫn chi tiết": "html/esp8266.html",
        "tài liệu": "assets/docs/esp8266.pdf"
    },
    {
        "tên sản phẩm": "Màn hình LCD 1602 kèm I2C",
        "mã sản phẩm": "LCD-1602-I2C",
        "danh mục": "Hiển thị",
        "đường dẫn hình ảnh": "assets/images/lcd1602.png",
        "alt hình ảnh": "Màn hình hiển thị LCD 1602 giao tiếp I2C xanh dương",
        "giới thiệu sản phẩm": "Màn hình hiển thị 16 ký tự x 2 dòng, đã hàn sẵn mạch chuyển đổi giao tiếp I2C tiết kiệm dây.",
        "giá sản phẩm": 65000,
        "đường dẫn chi tiết": "html/lcd1602.html",
        "tài liệu": "assets/docs/lcd1602.pdf"
    },
    {
        "tên sản phẩm": "Cảm biến nhiệt độ độ ẩm DHT11",
        "mã sản phẩm": "SEN-DHT11",
        "danh mục": "Cảm biến",
        "đường dẫn hình ảnh": "assets/images/dht11.png",
        "alt hình ảnh": "Cảm biến đo nhiệt độ và độ ẩm DHT11",
        "giới thiệu sản phẩm": "Cảm biến đo nhiệt độ và độ ẩm môi trường cơ bản, thích hợp cho các trạm thời tiết mini.",
        "giá sản phẩm": 28000,
        "đường dẫn chi tiết": "html/dht11.html",
        "tài liệu": "assets/docs/dht11.pdf"
    },
    {
        "tên sản phẩm": "Raspberry Pi Zero 2W",
        "mã sản phẩm": "RPI-ZERO-2W",
        "danh mục": "Máy tính nhúng",
        "đường dẫn hình ảnh": "assets/images/raspberry_pi_0_2w.png",
        "alt hình ảnh": "raspberry pi zero 2w",
        "giới thiệu sản phẩm": "Máy tính Raspberry Pi Zero 2 W là một trong những chiếc máy tính nhỏ gọn nhất, là dòng nhỏ gọn nhất trong Series Raspberry Pi rất được ưa chuộng trên thị trường hiện nay.",
        "giá sản phẩm": 450000,
        "đường dẫn chi tiết": "html/raspberry-pi-zero-2w.html",
        "tài liệu": "assets/docs/rpi-zero-2w.pdf"
    }
];

function hienThiSanPham(danhSachLoc = null) {
    const container = document.getElementById("product-container");
    if (!container) return;

    // Lấy dữ liệu cần hiển thị: hoặc danh sách đã lọc truyền vào, hoặc toàn bộ
    let ketQua = danhSachLoc || danhSachSanPham;

    // Nếu không truyền danh sách lọc, hãy kiểm tra các input tìm kiếm/bộ lọc để cập nhật danh sách
    if (!danhSachLoc) {
        const danhMuc = document.getElementById("filterCategory")?.value || "Tất cả";
        const sapXep = document.getElementById("sortPrice")?.value || "mặc định";
        const tuKhoa = document.getElementById("searchInput")?.value.toLowerCase() || "";

        ketQua = danhSachSanPham.filter(sp => 
            (danhMuc === "Tất cả" || sp["danh mục"] === danhMuc) &&
            (sp["tên sản phẩm"].toLowerCase().includes(tuKhoa) || sp["mã sản phẩm"].toLowerCase().includes(tuKhoa))
        );
        
        if (sapXep === "giá thấp-cao") ketQua.sort((a, b) => a["giá sản phẩm"] - b["giá sản phẩm"]);
        else if (sapXep === "giá cao-thấp") ketQua.sort((a, b) => b["giá sản phẩm"] - a["giá sản phẩm"]);
    }

    if (ketQua.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">Không tìm thấy sản phẩm nào phù hợp.</p></div>`;
        return;
    }

    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    let htmlRaw = "";
    
    ketQua.forEach(sanPham => {
        const giaDinhDang = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(sanPham["giá sản phẩm"]);

        const isWishlisted = wishlist.some(item => item["tên sản phẩm"] === sanPham["tên sản phẩm"]);
        const heartIcon = isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart';

        htmlRaw += `
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card h-100 card-product">
                    <div class="card-img-wrapper position-relative">
                        <img src="${sanPham["đường dẫn hình ảnh"]}" class="card-img-top" alt="${sanPham["alt hình ảnh"]}">
                        <button class="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow-sm" onclick="toggleWishlist(this, ${JSON.stringify(sanPham).replace(/"/g, '&quot;')})">
                            <i class="bi ${heartIcon}"></i>
                        </button>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <span class="badge badge-code mb-2 align-self-start">${sanPham["mã sản phẩm"]}</span>
                        <h5 class="card-title text-dark-blue fw-bold">${sanPham["tên sản phẩm"]}</h5>
                        <p class="card-text text-muted flex-grow-1 text-truncate-3">${sanPham["giới thiệu sản phẩm"]}</p>
                        <hr class="text-muted opacity-25">
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <span class="fs-5 fw-bold text-danger">${giaDinhDang}</span>
                            <a href="${sanPham["đường dẫn chi tiết"]}" class="btn btn-dark-blue btn-sm px-3 py-2 rounded-pill shadow-sm">
                                <i class="bi bi-eye-fill me-1"></i> Chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlRaw;
}

function capNhatThanhDieuHuong() {
    const authContainer = document.getElementById("nav-auth-btn");
    if (!authContainer) return;

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    
    const isInHtmlDir = window.location.pathname.includes('/html/');
    const basePath = isInHtmlDir ? "../" : "";

    if (isLoggedIn && currentUser.name) {
        authContainer.innerHTML = `
            <div class="dropdown">
                <a class="btn btn-outline-light dropdown-toggle rounded-pill px-3 shadow-sm d-flex align-items-center" href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-circle me-2 text-info fs-5"></i> 
                    <span class="d-inline-block text-truncate" style="max-width: 110px;">${currentUser.name}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2" aria-labelledby="userDropdown" style="background-color: var(--nav-footer-bg);">
                    <li><a class="dropdown-item text-white py-2" href="#"><i class="bi bi-person me-2 text-info"></i>Tài Khoản</a></li>
                    <li><a class="dropdown-item text-white py-2" href="#"><i class="bi bi-shield-lock me-2 text-info"></i>Đổi Mật Khẩu</a></li>
                    <li><hr class="dropdown-divider border-secondary opacity-25"></li>
                    <li><a class="dropdown-item text-danger py-2 fw-semibold" id="logout-btn" href="#"><i class="bi bi-box-arrow-right me-2"></i>Đăng Xuất</a></li>
                </ul>
            </div>
        `;

        // Bind logout action
        const logoutBtn = document.getElementById("logout-btn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("currentUser");
                alert("Bạn đã đăng xuất thành công!");
                window.location.href = basePath + "index.html";
            });
        }
    } else {
        authContainer.innerHTML = `
            <a href="${basePath}html/login.html" class="btn btn-nav-login rounded-pill px-4 shadow-sm d-flex align-items-center">
                <i class="bi bi-person-fill me-2"></i> Đăng Nhập
            </a>
        `;
    }
}

// Thêm vào giỏ hàng với hiệu ứng (Logic thông minh)
function themVaoGioHang(btn, sanPhamInfo) {
    btn.classList.add('btn-adding');
    
    // Tìm input số lượng nằm gần nút bấm (trong cùng hàng hoặc cùng section)
    // Giả định input có id="quantity" hoặc nằm trong cùng form/container
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
    
    // Lấy giỏ hàng
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingProductIndex = cart.findIndex(item => item.ten === sanPhamInfo.ten);
    
    if (existingProductIndex !== -1) {
        // Nếu đã có, tăng số lượng
        cart[existingProductIndex].soLuong += quantity;
    } else {
        // Nếu chưa có, thêm mới với số lượng chỉ định
        sanPhamInfo.soLuong = quantity;
        cart.push(sanPhamInfo);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    setTimeout(() => {
        btn.classList.remove('btn-adding');
        btn.classList.add('btn-added');
        btn.innerHTML = '<i class="bi bi-check-lg me-2 fs-5"></i> Đã Thêm';
        
        setTimeout(() => {
            btn.classList.remove('btn-added');
            btn.innerHTML = '<i class="bi bi-cart-plus-fill me-2 fs-5"></i> Thêm Vào Giỏ Hàng';
        }, 2000);
    }, 500);
}

// Hiển thị giỏ hàng
function hienThiGioHang() {
    const container = document.getElementById("cart-container");
    if (!container) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let tongTien = 0;

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-muted">Giỏ hàng hiện đang trống.</p>`;
        return;
    }

    let htmlRaw = `
        <div class="card shadow-sm border-0">
            <ul class="list-group list-group-flush">
    `;
    
    cart.forEach((item, index) => {
        const thanhTien = item.gia * item.soLuong;
        tongTien += thanhTien;
        
        const giaDinhDang = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(item.gia);

        const thanhTienDinhDang = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(thanhTien);

        htmlRaw += `
            <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                <div class="d-flex align-items-center">
                    <img src="../${item.hinhAnh}" alt="${item.ten}" class="me-3" style="width: 60px; height: 60px; object-fit: contain;">
                    <div>
                        <span class="fw-semibold d-block">${item.ten}</span>
                        <small class="text-muted">${giaDinhDang}</small>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary px-2" onclick="giamSoLuong(${index})">-</button>
                    <span class="mx-3 fw-bold">${item.soLuong}</span>
                    <button class="btn btn-sm btn-outline-secondary px-2" onclick="tangSoLuong(${index})">+</button>
                    
                    <span class="fw-bold ms-4" style="width: 100px; text-align: right;">${thanhTienDinhDang}</span>
                    
                    <button class="btn btn-outline-danger btn-sm ms-3" onclick="xoaKhoiGioHang(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </li>
        `;
    });

    const tongTienDinhDang = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(tongTien);

    htmlRaw += `
            </ul>
            <div class="list-group-item bg-light p-3 d-flex justify-content-between align-items-center">
                <h5 class="mb-0 fw-bold">Tổng thanh toán:</h5>
                <h4 class="mb-0 fw-bold text-danger">${tongTienDinhDang}</h4>
            </div>
        </div>
    `;
    container.innerHTML = htmlRaw;
}

// Xóa khỏi giỏ hàng
function xoaKhoiGioHang(index) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    hienThiGioHang();
}

// Tăng số lượng
function tangSoLuong(index) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart[index].soLuong++;
    localStorage.setItem('cart', JSON.stringify(cart));
    hienThiGioHang();
}

// Giảm số lượng
function giamSoLuong(index) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart[index].soLuong > 1) {
        cart[index].soLuong--;
        localStorage.setItem('cart', JSON.stringify(cart));
        hienThiGioHang();
    }
}

// Wishlist logic
function toggleWishlist(btn, sanPham) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const index = wishlist.findIndex(item => item["tên sản phẩm"] === sanPham["tên sản phẩm"]);
    
    if (index !== -1) {
        wishlist.splice(index, 1);
        btn.querySelector('i').className = 'bi bi-heart';
    } else {
        wishlist.push(sanPham);
        btn.querySelector('i').className = 'bi bi-heart-fill text-danger';
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function hienThiWishlist() {
    const container = document.getElementById("wishlist-container");
    if (!container) return;

    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (wishlist.length === 0) {
        container.innerHTML = `<p class="text-muted">Danh sách yêu thích đang trống.</p>`;
        return;
    }

    let htmlRaw = "";
    wishlist.forEach((sanPham, index) => {
        const giaDinhDang = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(sanPham["giá sản phẩm"]);

        htmlRaw += `
            <div class="col-xl-4 col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <img src="../${sanPham["đường dẫn hình ảnh"]}" class="card-img-top" style="height: 200px; object-fit: contain;">
                    <div class="card-body">
                        <h5 class="card-title">${sanPham["tên sản phẩm"]}</h5>
                        <p class="text-danger fw-bold">${giaDinhDang}</p>
                        <button class="btn btn-outline-danger btn-sm" onclick="xoaKhoiWishlist(${index})">Xóa</button>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlRaw;
}

function xoaKhoiWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    hienThiWishlist();
}

// Theme Toggle
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button icon
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerHTML = newTheme === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
    }
}

// Load theme on startup
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerHTML = savedTheme === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    hienThiSanPham();
    capNhatThanhDieuHuong();
    
    // Nếu đang ở trang giỏ hàng thì hiển thị danh sách
    if (window.location.pathname.includes('cart.html')) {
        hienThiGioHang();
    }
    
    // Nếu đang ở trang yêu thích thì hiển thị danh sách
    if (window.location.pathname.includes('wishlist.html')) {
        hienThiWishlist();
    }

    // Gắn sự kiện cho tìm kiếm và bộ lọc
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", () => hienThiSanPham());
    }
    
    const filterCategory = document.getElementById("filterCategory");
    if (filterCategory) {
        filterCategory.addEventListener("change", () => hienThiSanPham());
    }
    
    const sortPrice = document.getElementById("sortPrice");
    if (sortPrice) {
        sortPrice.addEventListener("change", () => hienThiSanPham());
    }
});
