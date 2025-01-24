// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (history.replaceState) {
    var urlWithoutHash = window.location.href.split("#")[0];
    history.replaceState(null, null, urlWithoutHash);
  }
}

// Show/Hide scroll-to-top button based on scroll position
window.onscroll = function () {
  var scrollButton = document.querySelector(".scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// Function to scroll to each task
function scrollToTask(taskId) {
  var task = document.querySelector(taskId);
  if (task) {
    window.scrollTo({ top: task.offsetTop, behavior: "smooth" });
  }
}
