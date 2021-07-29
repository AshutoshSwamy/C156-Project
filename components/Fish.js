AFRAME.registerComponent("fishes", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      var id = `schools${i}`;
      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;
      var position = { x: posX, y: posY, z: posZ };
      this.fishes(id, position);
    }
  },
  fishes: (id, position) => {
    var terrainEl = document.querySelector("#terrain");
    var fishEl = document.createElement("a-entity");
    fishEl.setAttribute("gltf-model", "./assets/models/fish/scene.gltf");
    fishEl.setAttribute("animation-mixer", {});
    fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
    fishEl.setAttribute("id", id);
    fishEl.setAttribute("position", position);
    terrainEl.appendChild(fishEl);
  },
});
