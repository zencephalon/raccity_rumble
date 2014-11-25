function Enemy(arena) {
  this.arena = arena;
  this.dir = "left";
  this.$sprite = $('<div id="enemy_raccoon"></div>');
  $('#arena').append(this.$sprite);
  this.height = this.$sprite.height();
  this.width = this.$sprite.width();
  this.x = this.arena.width - this.width / 2;
  this.y = (this.arena.height - this.height) * Math.random() + this.height / 2;
}

Enemy.prototype.move = Raccoon.prototype.move;
Enemy.prototype.updateSpritePosition = Raccoon.prototype.updateSpritePosition;
Enemy.prototype.destroy = Bullet.prototype.destroy;