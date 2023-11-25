
class Shape {
    constructor() {
        this.color = ''
    }
    setColor(shapeColor) {
        this.color = shapeColor
    }
}

class Circle extends Shape {
    // pulls in important info from the class Logo to use in Circle
    render() {
        return `<svg width="300" height="200">
            <circle cx="150" cy="100" r="50"  fill=${this.color} />       
                </svg>`
    }

}
/* <text x="0" y="15" fill=${color}>${logoName}</text> */
class Square extends Shape {
    // this information in the class 'Logo' in shapes.js is extended into the class square to help fill in important information
    constructor(logoName, color, shapeColor) {
        super(logoName, color, shapeColor)
    }
    render() {
        return `<svg width="300" height="200">
            <rect x="10" y="10" width="30" height="30" fill=${this.color}/>  
            </svg>`
        // outline for the sqaure logo
    }

}



class Triangle extends Shape {
    // pulls information from Logo to be used in Triangle
    constructor(logoName, color, shapeColor) {
        super(logoName, color, shapeColor)
    }
    render() {
        `<svg width="300" height="200" id="triangle" viewBox="0 0 100 100">
            <polygon points="0 0, 100 0 50 100" fill=${this.color}/>
             </svg>`
    }

}


module.exports = { Triangle, Circle, Square };