let currentProgress = 0;
    let fillElement = null;

    function createNewBar() {
      const container = document.getElementById("progressContainer");

      const bar = document.createElement("div");
      bar.className = "progress-bar";

      fillElement = document.createElement("div");
      fillElement.className = "progress-fill";

      bar.appendChild(fillElement);
      container.appendChild(bar);

      currentProgress = 0;
    }

    function increaseProgress() {
      // If there's no bar or last one is full, create a new one
      if (!fillElement || currentProgress >= 100) {
        createNewBar();
      }

      // Increase the progress by 5%
      currentProgress = Math.min(currentProgress + 5, 100);
      fillElement.style.width = currentProgress + "%";
    }