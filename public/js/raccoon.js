function Raccoon(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = $('<div id="good_raccoon"></div>');
  this.sprite.css('position', 'relative');
  $('#arena').append(this.sprite);
}

Raccoon.prototype.updateSpritePosition = function() {
  this.sprite.css('top', this.y);
  this.sprite.css('left', this.x);
}

Raccoon.prototype.move = function() {
  this.x += 5;
}

$(document).ready(function() {
  raccoon = new Raccoon(10, 5);
})
