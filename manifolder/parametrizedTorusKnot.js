function parametrizedTorusKnot(windingNumber1, windingNumber2, innerRadius, outerRadius, scale) {
    this.windingNumber1 = windingNumber1;
    this.windingNumber2 = windingNumber2;
    this.innerRadius = innerRadius;
    this.outerRadius = outerRadius;
    this.scale = scale;
}

parametrizedTorusKnot.prototype.point = function (theta) {
    var point = {};
    point["a"] = this.scale * this.outerRadius * (this.innerRadius + this.outerRadius * Math.cos(this.windingNumber1 * theta)) * Math.cos(this.windingNumber2 * theta);
    point["b"] = this.scale * this.outerRadius * (this.innerRadius + this.outerRadius * Math.cos(this.windingNumber1 * theta)) * Math.sin(this.windingNumber2 * theta);
    point["c"] = this.scale * Math.sin(this.windingNumber1 * theta);
    point["d"] = 0;
    return point;
}
