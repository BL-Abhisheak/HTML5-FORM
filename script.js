document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('#main-form');

    const nameInput = document.querySelector('#txt-name');
    const emailInput = document.querySelector('#txt-email');
    const mobileInput = document.querySelector('#txt-mobile');
    const salaryInput = document.querySelector('#txt-range');

    const nameError = document.querySelector('.text-error');
    const emailError = document.querySelector('.email-error');
    const mobileError = document.querySelector('.mobile-error');

    const outName = document.querySelector('#out-name');
    const outEmail = document.querySelector('#out-email');
    const outSalary = document.querySelector('#out-salary');

    const nameRegex = /^[A-Z][a-z]{2,5}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const mobileRegex = /^91\s[6-9]\d{9}$/;

    nameInput.addEventListener('input', function () {
        nameError.textContent = nameRegex.test(nameInput.value)
            ? ''
            : 'Name is incorrect';
    });

    emailInput.addEventListener('input', function () {
        emailError.textContent = emailRegex.test(emailInput.value)
            ? ''
            : 'Email is invalid';
    });

    mobileInput.addEventListener('input', function () {
        mobileError.textContent = mobileRegex.test(mobileInput.value)
            ? ''
            : 'Mobile format should be: 91 9919819801';
    });

    outSalary.textContent = salaryInput.value;
    salaryInput.addEventListener('input', function () {
        outSalary.textContent = salaryInput.value;
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        if (!nameRegex.test(nameInput.value)) {
            nameError.textContent = 'Name is incorrect';
            isValid = false;
        }

        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Email is invalid';
            isValid = false;
        }

        if (!mobileRegex.test(mobileInput.value)) {
            mobileError.textContent = 'Mobile format should be: 91 9919819801';
            isValid = false;
        }

        if (!isValid) return;

        outName.textContent = nameInput.value;
        outEmail.textContent = emailInput.value;
        outSalary.textContent = salaryInput.value;
    });

});
