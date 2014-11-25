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
    bullets.forEach(function(bullet) {
      bullet.move();

      enemies.forEach(function(enemy) {
        if (enemy.x < bullet.x + bullet.width &&
         enemy.x + enemy.width > bullet.x &&
         enemy.y < bullet.y + bullet.height &&
         enemy.height + enemy.y > bullet.y) {
          enemy.destroy();
          enemy.collided = true;
        }
      });

      if (bullet.collided) {
        bullet.destroy();
      }
    });
    enemies.forEach(function(enemy) {
      enemy.move();
    });
    bullets = _(bullets).reject(function(bullet) { return bullet.collided });
    enemies = _(enemies).reject(function(enemy) { return enemy.collided });
  }, 20);
})
