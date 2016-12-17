function Shape_Pentagon(sideOne, sideTwo, sideThree, sideFour, sideFIve) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.sideFour = sideFour;
    this.sideFIve = sideFIve;
}
Shape_Pentagon.prototype.get_type = function(){
    console.log("Pentagon dimensions are:" + this.sideOne + "," +  this.sideTwo + ","
        + this.sideThree + "," + this.sideFour + "," + this.sideFIve
        );
};
var shape = new Shape_Pentagon(20, 30, 20, 30, 20);
shape.get_type();
console.log( "Instance of contractors" + "\n" +
    (Shape_Pentagon instanceof Object) + "\n" + 
    (Shape_Triangle instanceof Object) + "\n" +
    (Shape_Square instanceof Object) + "\n" +
    (Shape_Square instanceof Number));
