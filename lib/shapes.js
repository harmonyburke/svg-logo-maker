// this class sets the color of the shape
class Shape {
    constructor() {
        this.color = ''
    }
    setColor(shapeColor) {
        this.color = shapeColor
    }
}
// all 3 shape classes return and SVG with the correct params for the given shape and the chosen shape color.
class Circle extends Shape {
    // pulls in important info from the class Logo to use in Circle
    render() {
        return `<svg width="300" height="200"><circle cx="150" cy="100" r="50"  fill='${this.color}'/></svg>`
    }

}
/* <text x="0" y="15" fill=${color}>${logoName}</text> */
class Square extends Shape {
    // this information in the class 'Logo' in shapes.js is extended into the class square to help fill in important information
   
    render() {
        return `<svg width="300" height="200"><rect x="90" y="45" width="120" height="120" fill='${this.color}'/></svg>`
        // outline for the sqaure logo
    }

}



class Triangle extends Shape {
    // pulls information from Logo to be used in Triangle
   
    render() {
       return `<svg width="300" height="200" id="triangle" viewBox="0 0 100 100"><polygon points="0 0, 100 0 50 100" fill='${this.color}'/></svg>`
    }

}


module.exports = { Triangle, Circle, Square };