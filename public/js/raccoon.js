raccoon = new Raccoon();

function Raccoon(x, y) {
  this.x = x;
  this.y = y;
  this.dir = "none";
  this.sprite = $('<div id="good_raccoon"></div>');
  this.sprite.css('position', 'relative');
  $('#arena').append(this.sprite);
}

Raccoon.prototype.setDirection = function(direction) {
  this.dir = direction;
}

Raccoon.prototype.updateSpritePosition = function() {
  this.sprite.css('top', this.y);
  this.sprite.css('left', this.x);
}

Raccoon.prototype.move = function() {
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
  this.updateSpritePosition();
}

$(document).ready(function() {
  raccoon = new Raccoon(10, 5);

  ['down', 'up', 'left', 'right', 'space'].forEach(function(dir) {
    Mousetrap.bind(dir, function(event) {
      raccoon.setDirection(dir);
    })
  });

  setInterval(function() { raccoon.move() }, 20);
})
