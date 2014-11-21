class Raccoon
  def initialize(x, y)
    @x = x
    @y = y
  end

  def move
    @x += 5
  end
end

raccoon = Raccoon.new(10, 5)
