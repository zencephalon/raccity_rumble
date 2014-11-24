$(document).ready(function() {
  arena = new Arena(600, 1200);
  raccoon = new Raccoon(300, 300, arena);
  bullets = [];

  ['down', 'up', 'left', 'right'].forEach(function(dir) {
    Mousetrap.bind(dir, function(event) {
      raccoon.setDirection(dir);
    })
  });

  Mousetrap.bind('space', function(event) {
    var bullet = new Bullet(raccoon.x, raccoon.y, 'right', arena);
    bullets.push(bullet);
  })

  setInterval(function() { 
    raccoon.move();
    bullets.forEach(function(bullet) {
      bullet.move();
    })
  }, 20);
})
