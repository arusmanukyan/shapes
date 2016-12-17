function Shape_Square(sideOne, sideTwo, sideThree, sideFour) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.sideFour = sideFour;
}
Shape_Square.prototype.get_type = function(){
    
    console.log("Square dimensions are:" + this.sideOne + "," +  this.sideTwo + ","
        + this.sideThree + "," + this.sideFour
        );
};
var shape = new Shape_Square(20, 30, 20, 30);
shape.get_type();