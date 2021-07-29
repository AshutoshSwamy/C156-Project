AFRAME.registerComponent("treasures", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      var id = `chests${i}`;
      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;
      var position = { x: posX, y: posY, z: posZ };
      this.treasures(id, position);
    }
  },
  treasures: function (id, position) {
    var terrainEl = document.querySelector("#terrain");
    var treasureEl = document.createElement("a-entity");
    treasureEl.setAttribute("id", id);
    treasureEl.setAttribute("position", position);
    treasureEl.setAttribute("material", "color", "#ff9100");
    treasureEl.setAttribute("geometry", {
      primitive: "box",
      height: 2,
      width: 5,
    });
    terrainEl.appendChild(treasureEl);
  },
});
