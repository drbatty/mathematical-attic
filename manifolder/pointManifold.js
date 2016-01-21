function pointManifold(numberOfPoints) {
    this.numberOfPoints = numberOfPoints;
    this.points = new Array();
    this.param1Min = 0;
    this.param2Min = 0;
    this.param3Min = 0;
    this.sizeMult = 1;
    this.includeNegative = false;
}

pointManifold.prototype.createRandomSurface = function (p1min, p1max, p2min, p2max, equation) {
    for (var i = 1; i < this.numberOfPoints; i++) {
        var theta = Math.random() * (p1max - p1min) + p1min;
        var phi = Math.random() * (p2max - p2min) + p2min;
        this.points.push(equation(theta, phi));
    }
}

pointManifold.prototype.createRandom3Manifold = function (p1min, p1max, p2min, p2max, p3min, p3max, equation) {
    for (var i = 1; i < this.numberOfPoints; i++) {
        var theta = Math.random() * (p1max - p1min) + p1min;
        var phi = Math.random() * (p2max - p2min) + p2min;
        var psi = Math.random() * (p3max - p3min) + p3min;
        this.points.push(equation(theta, phi, psi));
    }
}

pointManifold.prototype.createRandom3Onion = function (p1min, p1max, p2min, p2max, p3min, p3max, numberOfLayers, equation) {
    for (var i = 1; i < this.numberOfPoints; i++) {
        var theta = Math.random() * (p1max - p1min) + p1min;
        var phi = Math.random() * (p2max - p2min) + p2min;
        var random3 = Math.random();
        var layers = numberOfLayers + 1;
        if (layers > 0)
            random3 = Math.floor(random3 * layers) / layers;
        var psi = random3 * (p3max - p3min) + p3min;
        this.points.push(equation(theta, phi, psi));
    }
}

pointManifold.prototype.createRandom4Onion = function (p1min, p1max, p2min, p2max, p3min, p3max, p4min, p4max, numberOfLayers, equation) {
    for (var i = 1; i < this.numberOfPoints; i++) {
        var theta1 = Math.random() * (p1max - p1min) + p1min;
        var theta2 = Math.random() * (p2max - p2min) + p2min;
        var theta3 = Math.random() * (p3max - p3min) + p3min;
        var random4 = Math.random();
        var layers = numberOfLayers + 1;
        if (layers > 0)
            random4 = Math.floor(random4 * layers) / layers;
        var theta4 = random4 * (p4max - p4min) + p4min;
        this.points.push(equation(theta1, theta2, theta3, theta4));
    }
}

pointManifold.prototype.createRandom4Manifold = function (p1min, p1max, p2min, p2max, p3min, p3max, p4min, p4max, equation) {
    for (var i = 1; i < this.numberOfPoints; i++) {
        var theta1 = Math.random() * (p1max - p1min) + p1min;
        var theta2 = Math.random() * (p2max - p2min) + p2min;
        var theta3 = Math.random() * (p3max - p3min) + p3min;
        var theta4 = Math.random() * (p4max - p4min) + p4min;
        this.points.push(equation(theta1, theta2, theta3, theta4));
    }
}

pointManifold.prototype.createRandom5Manifold = function (p1min, p1max, p2min, p2max, p3min, p3max, p4min, p4max, p5min, p5max, equation) {
    for (var i = 1; i < this.numberOfPoints; i++) {
        var theta1 = Math.random() * (p1max - p1min) + p1min;
        var theta2 = Math.random() * (p2max - p2min) + p2min;
        var theta3 = Math.random() * (p3max - p3min) + p3min;
        var theta4 = Math.random() * (p4max - p4min) + p4min;
        var theta5 = Math.random() * (p5max - p5min) + p5min;
        this.points.push(equation(theta1, theta2, theta3, theta4, theta5));
    }
}

pointManifold.prototype.createRegularSurface = function (p1min, p1max, p2min, p2max, equation, iAdjust, jAdjust) {
    var sqrtPoints = Math.sqrt(this.numberOfPoints);
    for (var i = 0; i < sqrtPoints * iAdjust; i++) {
        for (var j = 0; j < sqrtPoints * jAdjust; j++) {
            var theta = i * (p1max - p1min) / (sqrtPoints * iAdjust) + p1min;
            var phi = j * (p1max - p1min) / (sqrtPoints * jAdjust) + p1min;
            this.points.push(equation(theta,phi));
        }
    }
}

pointManifold.prototype.createRegularSurfaces = function (p1min, p1max, p2min, p2max, equations, iAdjust, jAdjust) {
    for (var i = 0; i < equations.length; i++) {
        this.createRegularSurface(p1min, p1max, p2min, p2max, equations[i], iAdjust, jAdjust);
    }
}

pointManifold.prototype.createRegularCurves = function (p1min, p1max, equations) {
    for (var i = 0; i < equations.length; i++) {
        this.createRegularCurve(p1min, p1max, equations[i]);
    }
}

pointManifold.prototype.createRegularCurve = function (p1min, p1max, equation) {
    for (var i = 0; i < this.numberOfPoints; i++) {
        var theta = i * (p1max - p1min) / numberOfPoints;
        this.points.push(equation(theta));
    }
}

pointManifold.prototype.incrementToroidal = function (x, y, size) {
    x += y;
    if (x > size)
        x -= size * this.sizeMult;
    return x;
}

pointManifold.prototype.createSpiralSurface = function (n, m, size, equation) {
    var sqrtPoints = Math.sqrt(this.numberOfPoints);
    var thetaIncrement = size / sqrtPoints * n;
    var phiIncrement = size / sqrtPoints * m;
    var theta = this.param1Min;
    var phi = this.param2Min;
    for (var i = 0; i < numberOfPoints; i++) {
        var thisPoint = equation(theta, phi);
        this.points.push(thisPoint);
        if (this.includeNegative) {
            var negativePoint = {}
            negativePoint["a"] = thisPoint["a"];
            negativePoint["b"] = thisPoint["b"];
            negativePoint["c"] = -1 * thisPoint["c"];
            this.points.push(negativePoint);
        }
        var theta = this.incrementToroidal(theta, thetaIncrement, size);
        var phi = this.incrementToroidal(phi, phiIncrement, size);
    }
}

pointManifold.prototype.tetrahedrallyProject = function () {
    var newPoints = new Array();
    for (var i = 0; i < this.numberOfPoints; i++) {
        var newPoint = {};
        var a = this.points[i]["a"];
        var b = this.points[i]["b"];
        var c = this.points[i]["c"];
        var d = this.points[i]["d"];
        newPoint["a"] = -a + b - c + d;
        newPoint["b"] = -a - b + c + d;
        newPoint["c"] = -a + b + c - d;
        newPoints.push(newPoint);
    }
    this.points = newPoints;
}

pointManifold.prototype.octohedrallyProject = function () {
    var newPoints = new Array();
    for (var i = 0; i < this.points.length; i++) {
        var newPoint = {};
        var a = this.points[i]["a"];
        var b = this.points[i]["b"];
        var c = this.points[i]["c"];
        var d = this.points[i]["d"];
        var e = this.points[i]["e"];
        var f = this.points[i]["f"];
       // alert(a + " " + b + " " + c + " " + d + " " + e + " " + f + " ");
        newPoint["a"] = a - b;
        newPoint["b"] = c - d;
        newPoint["c"] = e - f;
        newPoints.push(newPoint);
    }
    this.points = newPoints;
}

pointManifold.prototype.createSpiral3Manifold = function (n, m, p, size, equation) {
    var cubePoints = Math.pow(this.numberOfPoints, 1 / 3);
    var thetaIncrement = size / cubePoints * n;
    var phiIncrement = size / cubePoints * m;
    var psiIncrement = size / cubePoints * p;
    var theta = this.param1Min;
    var phi = this.param2Min;
    var psi = this.param3Min;
    for (var i = 0; i < numberOfPoints; i++) {
        var thisPoint = equation(theta, phi, psi);
        this.points.push(thisPoint);
        if (this.includeNegative) {
            var negativePoint = {}
            negativePoint["a"] = thisPoint["a"];
            negativePoint["b"] = thisPoint["b"];
            negativePoint["c"] = thisPoint["c"];
            negativePoint["d"] = -1 * thisPoint["d"];
            this.points.push(negativePoint);
        }
        var theta = this.incrementToroidal(theta, thetaIncrement, size);
        var phi = this.incrementToroidal(phi, phiIncrement, size);
        var psi = this.incrementToroidal(psi, psiIncrement, size);
    }
}

pointManifold.prototype.createSpiral4Manifold = function (n, m, p, q, size, equation) {
    var cubePoints = Math.pow(this.numberOfPoints, 1 / 4);
    var theta1Increment = size / cubePoints * n;
    var theta2Increment = size / cubePoints * m;
    var theta3Increment = size / cubePoints * p;
    var theta4Increment = size / cubePoints * q;
    var theta1 = 0;
    var theta2 = 0;
    var theta3 = 0;
    var theta4 = 0;
    for (var i = 0; i < numberOfPoints; i++) {
        this.points.push(equation(theta1, theta2, theta3, theta4));
        var theta1 = this.incrementToroidal(theta1, theta1Increment, size);
        var theta2 = this.incrementToroidal(theta2, theta2Increment, size);
        var theta3 = this.incrementToroidal(theta3, theta3Increment, size);
        var theta4 = this.incrementToroidal(theta4, theta4Increment, size);
    }
}

pointManifold.prototype.createSpiral5Manifold = function (n, m, p, q, r, size, equation) {
    var cubePoints = Math.pow(this.numberOfPoints, 1 / 5);
    var theta1Increment = size / cubePoints * n;
    var theta2Increment = size / cubePoints * m;
    var theta3Increment = size / cubePoints * p;
    var theta4Increment = size / cubePoints * q;
    var theta5Increment = size / cubePoints * r;
    var theta1 = 0;
    var theta2 = 0;
    var theta3 = 0;
    var theta4 = 0;
    var theta5 = 0;
    for (var i = 0; i < numberOfPoints; i++) {
        this.points.push(equation(theta1, theta2, theta3, theta4, theta5));
        var theta1 = this.incrementToroidal(theta1, theta1Increment, size);
        var theta2 = this.incrementToroidal(theta2, theta2Increment, size);
        var theta3 = this.incrementToroidal(theta3, theta3Increment, size);
        var theta4 = this.incrementToroidal(theta4, theta4Increment, size);
        var theta5 = this.incrementToroidal(theta4, theta4Increment, size);
    }
}

pointManifold.prototype.createRegularCurve = function (p1min, p1max, equation) {
    for (var i = 0; i < numberOfPoints; i++) {
        var theta = i * 2 * Math.PI / numberOfPoints;
        this.points.push(equation(theta));
    }
}

pointManifold.prototype.createSphereGreatCircles = function() {
    for (var i = 0; i < this.numberOfPoints / 3; i++) {
        var a = 100 * Math.sin(6 * Math.PI * i / this.numberOfPoints);
        var b = 100 * Math.cos(6 * Math.PI * i / this.numberOfPoints);

        var point1 = {};
        point1["a"] = a;
        point1["b"] = b;
        point1["c"] = 0;

        var point2 = {};
        point2["a"] = a;
        point2["b"] = 0;
        point2["c"] = b;

        var point3 = {};
        point3["a"] = 0;
        point3["b"] = a;
        point3["c"] = b;

        this.points.push(point1);
        this.points.push(point2);
        this.points.push(point3);
    }
}
