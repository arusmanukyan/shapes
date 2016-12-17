function Shape_Triangle(sideOne, sideTwo, sideThree) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
   
}
Shape_Triangle.prototype.get_type = function(){
    console.log("Triangle dimensions are:" + this.sideOne + "," +  this.sideTwo + "," + this.sideThree);
};
var shape = new Shape_Triangle(20, 30,40);
shape.get_type();
