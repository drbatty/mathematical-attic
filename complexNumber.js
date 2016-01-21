function complexNumber(x, y) {
    this.x = x;
    this.y = y;
}

complexNumber.prototype.add = function (other) {
    return new complexNumber(this.x + other.x, this.y + other.y);
}

complexNumber.prototype.multiply = function (other) {
    return new complexNumber(this.x * other.x - this.y * other.y, this.y * other.x + this.x * other.y);
}

complexNumber.prototype.divide = function (other) {
    var multiplyConjugate = new complexNumber(other.x / (other.x * other.x + other.y * other.y),
              -1 * other.y / (other.x * other.x + other.y * other.y));
    return this.multiply(multiplyConjugate);
}