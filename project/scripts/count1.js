document.addEventListener("DOMContentLoaded", () => {
    const visitCountElement = document.getElementById("visitCount");
    let visitCount = Number(localStorage.getItem("visitCount")) || 0;

    visitCount++;
    localStorage.setItem("visitCount", visitCount);

    if (visitCountElement) {
        visitCountElement.textContent = `You have visited this site ${visitCount} times.`;
    }
});