function Bullet(x, y, direction, arena) {
  this.arena = arena;
  this.x = x;
  this.y = y;
  this.dir = direction;
  this.$sprite = $('<div class="bullet"></div>');
  $('#arena').append(this.$sprite);
  this.height = this.$sprite.height();
  this.width = this.$sprite.width();
}

Bullet.prototype.updateSpritePosition = Raccoon.prototype.updateSpritePosition;
Bullet.prototype.move = Raccoon.prototype.move;

Bullet.prototype.destroy = function() {
  this.$sprite.remove();
}