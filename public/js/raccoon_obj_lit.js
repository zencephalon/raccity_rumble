raccoon = Raccoon();

function Raccoon(x, y) {
  sprite = $('<div id="good_raccoon"></div>');
  sprite.css('position', 'relative');
  $('#arena').append(this.sprite);
  return {
    x: x,
    y: y,
    sprite: sprite,
    updateSpritePosition: function() {
      this.sprite.css('top', this.y);
      this.sprite.css('left', this.x);
    },
    move: function() {
      this.x += 5;
    }
  }
}