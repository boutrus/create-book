// Assuming you have elements with IDs "prevButton" and "nextButton"
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Get the current chapter URL from the window's location
const currentChapterUrl = window.location.pathname;

// Find the index of the current chapter URL in the chapters array
const currentChapterIndex = chapters.indexOf(currentChapterUrl);

// Calculate the previous and next chapter URLs based on the current index
const prevChapterUrl = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null;
const nextChapterUrl = currentChapterIndex < chapters.length - 1 ? chapters[currentChapterIndex + 1] : null;

prevButton.addEventListener('click', () => {
    if (prevChapterUrl) {
        window.location.href = prevChapterUrl;
    }
});

nextButton.addEventListener('click', () => {
    if (nextChapterUrl) {
        window.location.href = nextChapterUrl;
    }
});
