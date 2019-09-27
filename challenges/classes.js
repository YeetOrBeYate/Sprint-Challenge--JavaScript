// 1. Copy and paste your prototype in here and refactor into class syntax.


//I had to change the name of the object so that it'll run correct. It works fine though
class CubeMaker{
  constructor(props){
    this.lengthNew = props.length;
    this.widthNew = props.width;
    this.heightNew = props.height;
  }
  volume() {
    return this.heightNew * this.widthNew * this.lengthNew
  }
  surfaceArea() {
    return  2 * (this.lengthNew * this.widthNew + this.lengthNew * this.heightNew + this.widthNew * this.heightNew)
  }
}

let yeet = new CubeMaker({
  length: 4,
  width: 5,
  height: 5
})



console.log("CUBOID REFACTOR",yeet.volume()); // 100
console.log("CUBOID REFACTOR",yeet.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CylinderMaker extends CubeMaker{
  constructor(props){
    super(props);
    this.radius = props.radius;
  }

  volume(){
    return "this is the cylinder volume: ", Math.pow(this.radius, 2) * 3.14 * this.heightNew;
  }
  surfaceArea(){
    return "this is the cylinder surface area: ", (2 * 3.14 * this.radius * this.heightNew) + (2* 3.14 * Math.pow(this.radius, 2));
  }
}

let cinder = new CylinderMaker({
  length: 4,
  width: 5,
  height: 5,
  radius: 8
})
console.log("CYLINDER: ", cinder.volume());
console.log("CYLINDER: ", cinder.surfaceArea());
