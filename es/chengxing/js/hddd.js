 function showInfoPopup(message) {
            const infoPopup = document.getElementById('infoPopup');
            const infoPopupText = document.getElementById('infoPopupText');

            // 设置提示信息
            infoPopupText.textContent = message;

            // 显示弹窗
            infoPopup.style.display = 'block';

            // 弹窗1秒后自动关闭
            setTimeout(() => {
                // 关闭弹窗
                closeInfoPopup();
            }, 1000);
        }

        function closeInfoPopup() {
            const infoPopup = document.getElementById('infoPopup');

            // 隐藏弹窗
            infoPopup.style.display = 'none';
        }
function toggleCheck(element) {
    element.classList.toggle('clicked');
}

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const popup = document.querySelector('.popup');

button1.addEventListener('click', () => {
    togglePopup();
});

button2.addEventListener('click', () => {
    togglePopup();
});

button3.addEventListener('click', () => {
    togglePopup();
});

function togglePopup() {
    const overlay = document.getElementById('overlay');
    if (popup.style.display === 'block') {
        // 如果弹窗关闭，重置输入框内容和错误提示
        resetPopupContent();
    overlay.style.display = 'none';  // 隐藏蒙层
    } else {
        overlay.style.display = 'block';  // 显示蒙层
    }
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

function resetPopupContent() {
    const phoneInput = document.getElementById('phoneInput');
    const verificationInput = document.getElementById('verificationInput');
    const phoneError = document.getElementById('phoneError');
    const verificationError = document.getElementById('verificationError');

    // 重置输入框内容和错误提示
    phoneInput.value = '';
    verificationInput.value = '';
    phoneError.textContent = '';
    verificationError.textContent = '';
}

popup.addEventListener('click', (event) => {
    // 检查是否点击了获取验证码按钮
    if (event.target.tagName === 'BUTTON' && event.target.textContent === '获取验证码') {
        validatePhone();
    }
    // 检查是否点击了登录按钮
    else if (event.target.tagName === 'BUTTON' && event.target.textContent === '登录') {
        validateOnLogin();
    }
    // 在弹窗内部点击，检查输入框内容是否正确，不正确提示词弹出
    else if (!event.target.closest('.input-group')) {
        validateOnBlur();
    }
});

function validateOnBlur() {
    validatePhone();
    validateVerification();
}

function validateOnLogin() {
    validatePhone();
    validateVerification();
    // 在这里可以添加登录的相关操作
}

function validatePhone() {
    const phoneInput = document.getElementById('phoneInput');
    const phoneError = document.getElementById('phoneError');
    const verificationButton = document.querySelector('.input-group .a');
    const inputValue = phoneInput.value.trim();
    if (inputValue.length !== 11 || isNaN(inputValue)) {
        phoneError.textContent = '手机号格式不正确';
    } else {
        // 手机号格式正确，直接弹出提示消息
        phoneError.textContent = '';
        verificationButton.addEventListener('click', () => {
            showInfoPopup('系统繁忙,请稍后再试');
            // Additional logic related to 获取验证码
        });
    }
}

function validateVerification() {
    const verificationInput = document.getElementById('verificationInput');
    const verificationError = document.getElementById('verificationError');
    const inputValue = verificationInput.value.trim();

    if (inputValue.length === 0) {
        verificationError.textContent = '请输入验证码';
        return false;
    } else if (inputValue.length !== 6 || isNaN(inputValue)) {
        verificationError.textContent = '验证码格式不正确';
        return false;
    } else {
        verificationError.textContent = '';
        return true; // 验证通过
    }
}
function validateOnLogin() {
    validatePhone();
    if (validateVerification()) {
        // 验证码正确，可以添加登录的相关操作
        showInfoPopup('系统繁忙，请稍后再试');
    }
}
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
    togglePopup();  // 关闭弹窗
});
