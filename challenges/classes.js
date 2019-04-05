// 1. Copy and paste your prototype in here and refactor into class syntax.

class CubosidMaker {
    constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    } 

  volume() {
    return this.length * this.width * this.height;
  };

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  };
};

class CubesMaker extends CubosidMaker {
    constructor(cubeAttrs) {

    super(cubeAttrs);
    }  
    volume() {
        return this.length * this.length * this.length;
    }
    surfaceArea() {
        return  6 * (this.length * this.length);
    }        
    
};

const cubes = new CubesMaker({
    length : 6,
});

const cubosid = new CubosidMaker({
    length : 4,
    height : 5,
    width : 5
});
  
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
   


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cubosid.volume()); // 100
console.log(cubosid.surfaceArea()); // 130
console.log(cubes.volume());
console.log(cubes.surfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.