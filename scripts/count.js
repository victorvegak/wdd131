document.addEventListener("DOMContentLoaded", () => {
    const reviewCount = document.querySelector("#reviewCount");
        let numReview = 
        Number(window.localStorage.getItem("numReview-ls")) || 0;
        if (numReview !== 0) {
	    reviewCount.textContent = numReview;
        } else {
	    reviewCount.textContent = `This is your first Review. 🥳 Great!`;
        }
        numReview++;
        localStorage.setItem("numReview-ls", numReview);
});