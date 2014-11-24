function Arena(height, width) {
  this.height = height;
  this.width = width;
  this.$element = $('<div id="arena"></div>');
  this.$element.css('height', height);
  this.$element.css('width', width);
  $('body').append(this.$element);
}
