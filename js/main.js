document.addEventListener("DOMContentLoaded", () => {

    let currentYear = new Date().getFullYear();

    document.getElementById('ageSpan').textContent = currentYear - 1995;

})