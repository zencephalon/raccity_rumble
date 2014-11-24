function Raccoon(x, y, arena) {
  this.arena = arena;
  this.x = x;
  this.y = y;
  this.dir = "none";
  this.$sprite = $('<div id="good_raccoon"></div>');
  $('#arena').append(this.$sprite);
  this.height = this.$sprite.height();
  this.width = this.$sprite.width();
}

Raccoon.prototype.setDirection = function(direction) {
  this.dir = direction;
}

Raccoon.prototype.updateSpritePosition = function() {
  this.$sprite.css('top', this.y - this.height / 2);
  this.$sprite.css('left', this.x - this.width / 2);
}

Raccoon.prototype.move = function() {
  var old_x = this.x;
  var old_y = this.y;

  switch (this.dir) {
    case 'up':
      this.y -= 5;
      break;
    case 'down':
      this.y += 5;
      break;
    case 'left':
      this.x -= 5;
      break;
    case 'right':
      this.x += 5;
      break;
  }
  if (((this.y - this.height / 2) < 0) || 
      ((this.y + this.height / 2) > this.arena.height) ||
      ((this.x - this.width / 2) < 0) ||
      ((this.x + this.width / 2) > this.arena.width)) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateSpritePosition();
}