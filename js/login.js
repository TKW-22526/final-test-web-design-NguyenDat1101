document.addEventListener("DOMContentLoaded", () => {
    // 1. Password Visibility Toggle
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            if (targetInput) {
                if (targetInput.type === 'password') {
                    targetInput.type = 'text';
                    btn.innerHTML = '<i class="bi bi-eye-slash"></i>';
                } else {
                    targetInput.type = 'password';
                    btn.innerHTML = '<i class="bi bi-eye"></i>';
                }
            }
        });
    });

    // 2. Toast Notification Helper
    function showToast(message, isSuccess = true) {
        const toastEl = document.getElementById('authToast');
        const toastIcon = document.getElementById('toastIcon');
        const toastMessage = document.getElementById('toastMessage');
        
        if (!toastEl || !toastIcon || !toastMessage) return;
        
        toastMessage.innerText = message;
        if (isSuccess) {
            toastEl.className = 'toast align-items-center text-white border-0 bg-success';
            toastIcon.className = 'bi bi-check-circle-fill fs-5 me-2';
        } else {
            toastEl.className = 'toast align-items-center text-white border-0 bg-danger';
            toastIcon.className = 'bi bi-exclamation-triangle-fill fs-5 me-2';
        }
        
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
    }

    // Load registered users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // 3. Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!loginForm.checkValidity()) {
                e.stopPropagation();
                loginForm.classList.add('was-validated');
                return;
            }
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            
            // Demo account fallback
            const defaultUser = { email: 'user@example.com', password: 'password123', name: 'Kỹ Sư IoT' };
            const matchedUser = users.find(u => u.email === email && u.password === password) || 
                                (email === defaultUser.email && password === defaultUser.password ? defaultUser : null);
                                
            if (matchedUser) {
                showToast("Đã gửi thông tin đăng nhập! Lưu ý: Website hiện đang là bản Demo, tính năng Backend thực tế chưa được kết nối.", true);
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify({ name: matchedUser.name, email: matchedUser.email }));
                
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                showToast('Sai email hoặc mật khẩu. Gợi ý: user@example.com / password123', false);
            }
        });
    }

    // 4. Register Form Handler
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        const passwordInput = document.getElementById('registerPassword');
        const confirmPasswordInput = document.getElementById('registerConfirmPassword');
        
        const validatePasswords = () => {
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.setCustomValidity('Mật khẩu không khớp!');
                const feedback = document.getElementById('confirmPasswordFeedback');
                if (feedback) feedback.innerText = 'Mật khẩu xác nhận không khớp!';
            } else {
                confirmPasswordInput.setCustomValidity('');
            }
        };
        
        passwordInput.addEventListener('change', validatePasswords);
        confirmPasswordInput.addEventListener('keyup', validatePasswords);
        
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validatePasswords();
            
            if (!registerForm.checkValidity()) {
                e.stopPropagation();
                registerForm.classList.add('was-validated');
                return;
            }
            
            const name = document.getElementById('registerName').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const phone = document.getElementById('registerPhone').value.trim();
            const password = passwordInput.value;
            
            // Check email uniqueness
            const emailExists = users.some(u => u.email === email) || email === 'user@example.com';
            if (emailExists) {
                showToast('Email này đã được sử dụng bởi một tài khoản khác!', false);
                return;
            }
            
            // Store user
            users.push({ name, email, phone, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            showToast("Đã gửi thông tin đăng ký! Lưu ý: Website hiện đang là bản Demo, tính năng Backend thực tế chưa được kết nối.", true);
            
            // Clean up and switch to Login tab
            setTimeout(() => {
                const loginTabButton = document.getElementById('login-tab');
                if (loginTabButton) {
                    loginTabButton.click();
                    const loginEmailInput = document.getElementById('loginEmail');
                    if (loginEmailInput) {
                        loginEmailInput.value = email;
                    }
                    registerForm.reset();
                    registerForm.classList.remove('was-validated');
                }
            }, 1500);
        });
    }

    // 5. Social Login Buttons
    const socialButtons = document.querySelectorAll('.social-login-btn');
    socialButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showToast('Đăng nhập thông qua mạng xã hội thành công!', true);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify({ name: 'Thành Viên E-Component', email: 'member@social.com' }));
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    });

    // 6. Forgot Password Mock Button
    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail').value.trim();
            if (emailInput) {
                showToast(`Yêu cầu đổi mật khẩu đã gửi tới email: ${emailInput}`, true);
            } else {
                showToast('Vui lòng điền email của bạn ở ô Đăng Nhập để khôi phục mật khẩu.', false);
            }
        });
    }
});