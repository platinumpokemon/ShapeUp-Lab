var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var triButton;
var cirButton;
var squButton;
var recButton;
var triHeight;
var cirRadius;
var squHeight;
var recHeight;
var recWidth;
var triHeightNum;
var cirRadiusNum;
var squHeightNum;
var recHeightNum;
var recWidthNum;
var sidepanel;
var backgroundArea;
var height;
var width;
var area;
var radius;
var perimeter;
document.addEventListener("DOMContentLoaded", function () {
    backgroundArea = document.getElementById("background-div");
    triButton = document.getElementById("triangle-button");
    sidepanel = document.getElementById("sidepanel");
    triButton.addEventListener("click", function () {
        drawTriangle();
    });
    cirButton = document.getElementById("circle-button");
    cirButton.addEventListener("click", function () {
        drawCircle();
    });
    squButton = document.getElementById("square-button");
    squButton.addEventListener("click", function () {
        drawSquare();
    });
    recButton = document.getElementById("rectangle-button");
    recButton.addEventListener("click", function () {
        drawRectangle();
    });
});
var Shape = /** @class */ (function () {
    function Shape(name, input) {
        var _this = this;
        this.name = name;
        this.div = document.createElement('div');
        this.div.addEventListener("click", function () {
            _this.describe();
        });
        this.div.addEventListener("dblclick", function () {
            _this.div.remove();
        });
        this.draw();
    }
    Shape.prototype.describe = function () {
        sidepanel.style.visibility = "visible";
        height = this.div.offsetHeight;
        width = this.div.offsetWidth;
        radius = 0;
        if (this.name === " Triangle") {
            area = (this.div.offsetHeight * this.div.offsetWidth) / 2;
            perimeter = 2 * this.div.offsetHeight * Math.sqrt(2 * this.div.offsetHeight * this.div.offsetHeight);
        }
        else if (this.name === " Circle") {
            radius = this.div.offsetHeight / 2;
            area = Math.floor(Math.pow((this.div.offsetHeight / 2), 2) * Math.PI);
            perimeter = Math.floor(2 * Math.PI * (this.div.offsetHeight / 2));
        }
        else {
            area = this.div.offsetHeight * this.div.offsetWidth;
            perimeter = this.div.offsetHeight * 2 + this.div.offsetWidth * 2;
        }
        perimeter = this.div.offsetHeight * 2 + this.div.offsetWidth * 2;
        this.appendText(document.getElementById('name'), "Shape Name: " + this.name);
        this.appendText(document.getElementById('width'), "Width: " + width + "px");
        this.appendText(document.getElementById('height'), "Height: " + height + "px");
        this.appendText(document.getElementById('radius'), "Radius: " + radius + "px");
        this.appendText(document.getElementById('area'), "Area: " + area + "px");
        this.appendText(document.getElementById('perimeter'), "Perimeter: " + perimeter + "px");
    };
    Shape.prototype.draw = function () {
        backgroundArea.appendChild(this.div);
        this.ranNum1 = Math.floor(Math.random() * 601);
        this.ranNum2 = Math.floor(Math.random() * 601);
    };
    Shape.prototype.appendText = function (element, text) {
        element.innerText = text;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, " Circle", cirRadius) || this;
        cirRadius = document.getElementById("circle-input").value;
        cirRadiusNum = +cirRadius * 2;
        _this.div.setAttribute("id", "circle");
        _this.div.style.height = cirRadiusNum + "px";
        _this.div.style.width = cirRadiusNum + "px";
        _this.div.style.top = _this.ranNum1 + "px";
        _this.div.style.left = _this.ranNum2 + "px";
        return _this;
    }
    return Circle;
}(Shape));
var drawCircle = function () {
    new Circle(cirRadiusNum);
};
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength) {
        var _this = _super.call(this, " Square", squHeight) || this;
        squHeight = document.getElementById("square-input").value;
        _this.div.setAttribute("id", "square");
        radius = 0;
        squHeightNum = +squHeight;
        _this.div.style.height = squHeight + "px";
        _this.div.style.width = squHeight + "px";
        _this.div.style.top = _this.ranNum1 + "px";
        _this.div.style.left = _this.ranNum2 + "px";
        return _this;
    }
    return Square;
}(Shape));
var drawSquare = function () {
    new Square(squHeightNum);
};
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(height) {
        var _this = _super.call(this, " Triangle", triHeight) || this;
        triHeight = document.getElementById("triangle-input").value;
        _this.div.setAttribute("id", "triangle-bottomleft");
        triHeightNum = +triHeight;
        _this.div.style.borderBottom = triHeight + "px solid yellow";
        _this.div.style.borderRight = triHeight + "px solid transparent";
        _this.div.style.top = _this.ranNum1 + "px";
        _this.div.style.left = _this.ranNum2 + "px";
        return _this;
    }
    return Triangle;
}(Shape));
var drawTriangle = function () {
    new Triangle(triHeightNum);
};
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, " Rectangle", recHeight + recHeight) || this;
        _this.div.setAttribute("id", "rectangle");
        recHeight = document.getElementById("rectangle-input-1").value;
        height = +recHeight;
        recWidth = document.getElementById("rectangle-input-2").value;
        width = +recWidth;
        _this.div.style.height = recHeight + "px";
        _this.div.style.width = recWidth + "px";
        _this.div.style.top = _this.ranNum1 + "px";
        _this.div.style.left = _this.ranNum2 + "px";
        return _this;
    }
    return Rectangle;
}(Shape));
var drawRectangle = function () {
    new Rectangle(recWidthNum, recHeightNum);
};