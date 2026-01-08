document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('#main-form');

    const nameInput = document.querySelector('#txt-name');
    const emailInput = document.querySelector('#txt-email');
    const salaryInput = document.querySelector('#txt-range');

    const nameError = document.querySelector('.text-error');

    const outName = document.querySelector('#out-name');
    const outEmail = document.querySelector('#out-email');
    const outSalary = document.querySelector('#out-salary');

    const nameRegex = /^[A-Z][a-z]{2,5}$/;

    nameInput.addEventListener('input', function () {
        if (nameRegex.test(nameInput.value)) {
            nameError.textContent = '';
        } else {
            nameError.textContent = 'Name is incorrect';
        }
    });

});
