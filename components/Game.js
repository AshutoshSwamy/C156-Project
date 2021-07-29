AFRAME.registerComponent("game-active", {
  schema: {
    elementId: { type: "string", default: "#chest1" },
  },
  update: function () {
    this.isCollide(this.data.elementId);
  },
  init: function () {
    var duration = 120;
    const timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    setInterval(() => {
      if (duration >= 0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } else {
        this.gameOver();
      }
    }, 1000);
  },
  isCollide: function (elementId) {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#chests")) {
        console.log(elementId + " collision!");
      } else if (elementId.includes("#schools")) {
        console.log(elementId + " collision!");
      }
    });
  },
  updateTarget: function () {
    var element = document.querySelector("#targets");
    var count = element.getAttribute("text").value();
    var currentTargets = parseInt(count);
    currentTargets -= 1;
    element.setAttribute("text", {
      value: currentTargets,
    });
  },
  updateScore: function () {
    var element = document.querySelector("#score");
    var count = element.getAttribute("text").value();
    var currentScore = parseInt(count);
    currentScore += 50;
    element.setAttribute("text", {
      value: currentScore,
    });
  },
  gameover: function () {
    var planeEl = document.querySelector("#scubaman");
    var element = document.querySelector("#gameovertext");
    element.setAttribute("visible", true);
    planeEl.setAttribute("dymanic-body", {
      mass: 1,
    });
  },
});
