var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Welcome to TypeScript');
var age = 25;
console.log(age);
var isCompleted = true;
var firstname = 'John';
// Declare array is typescript
// Method 1
var fruits = ['Apple', 'Mango', 'Banana', 'Grapes'];
// Method 2
var list = [10, 20, 30, 40, 50];
// Declaring tuple
var x;
x = [25, 'Hello'];
// Declaring enums
var MusicPlayer;
(function (MusicPlayer) {
    MusicPlayer[MusicPlayer["Play"] = 11] = "Play";
    MusicPlayer[MusicPlayer["Pause"] = 12] = "Pause";
    MusicPlayer[MusicPlayer["Stop"] = 13] = "Stop";
    MusicPlayer[MusicPlayer["Record"] = 14] = "Record";
})(MusicPlayer || (MusicPlayer = {}));
console.log(MusicPlayer.Play);
// Declaring unknown variable type
var data;
data = true;
// Declaring function with return types
var Show = function (name) {
    return "Hello ".concat(name);
};
var SayHello = function (name) {
    console.log("Hello ".concat(name));
};
console.log(Show('John'));
SayHello('Peter');
// Declaring class in typescript
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.num = 10;
    }
    Calculator.prototype.Add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator() {
        var _this = _super.call(this) || this;
        _this.name = 'Hello';
        return _this;
    }
    ScientificCalculator.prototype.Product = function (a, b) {
        return a * b;
    };
    return ScientificCalculator;
}(Calculator));
var obj = new ScientificCalculator();
console.log(obj.Add(10, 20));
console.log(obj.Product(10, 20));
obj.name = 'John';
