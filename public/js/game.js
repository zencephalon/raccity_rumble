$(document).ready(function() {
  arena = new Arena(600, 1200);
  raccoon = new Raccoon(300, 300, arena);
  bullets = [];
  enemies = [new Enemy(arena), new Enemy(arena), new Enemy(arena)];

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
    enemies.forEach(function(enemy) {
      enemy.move();
    });
    bullets.forEach(function(bullet) {
      bullet.move();
      if (bullet.collided) {
        bullet.destroy();
      }
    });
    bullets = _(bullets).reject(function(bullet) { return bullet.collided });
  }, 20);
})
