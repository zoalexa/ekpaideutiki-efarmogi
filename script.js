window.onload = function() {

    // κουμπί γλωσσάριο
    document.getElementById("btnGlos").onclick = function() {
        window.open("data/glos.html", "_blank");
    };

    // κουμπί video lessons
    document.getElementById("btnVideos").onclick = function() {
        window.open("data/videos.html", "_blank");
    };


    // κουμπί βοήθειας-info
    document.getElementById("btnHelp").onclick = function() {
       openHelpModal();
    };
};

function openHelpModal() {
  document.getElementById("helpModal").style.display = "flex";
}

function closeHelpModal() {
  document.getElementById("helpModal").style.display = "none";
}

function openHomework() {
  window.open("homework/homework.html", "_blank");
}

function openForum() {
  window.open("forum/forum.html", "_blank");
}
