function openCard() {
    document.getElementById("windowTop").classList.add("open");
    document.getElementById("windowBottom").classList.add("open");
    setTimeout(() => {
      document.getElementById("cover").classList.add("hidden");
      document.getElementById("content").classList.remove("hidden");
    }, 1000);
  }
  