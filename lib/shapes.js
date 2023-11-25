class Logo{
    constructor(logoName,shape, color, shapeColor){
        this.logoName=''
        this.shape='',
        this.color='',
        this.shapeColor=''
    }
    setLogo(logoName){
        this.logoName=logoName
    }
    setShape(shape){
        this.shape=shape
    }
    setColor(color){
        this.color=color
    }
    setShapeColor(shapeColor){
        this.shapeColor=shapeColor
    }
}


class Circle extends Logo{
    // pulls in important info from the class Logo to use in Circle
    constructor(logoName,color,shapeColor){
        super(logoName, color, shapeColor);
    }
    render(){
        return `<svg width="300" height="200">
            <circle cx="150" cy="100" r="50"  fill=${shapeColor} />
                <text x="0" y="15" fill=${color}>${logoName}</text>
        </svg>`
    }
    
}

class Square extends Logo{
    // this information in the class 'Logo' in shapes.js is extended into the class square to help fill in important information
    constructor(logoName,color,shapeColor){
        super(logoName, color, shapeColor)
    }
    render(){
        return `<svg width="300" height="200">
            <rect x="10" y="10" width="30" height="30" fill=${shapeColor}/>
                <text x="0" y="15" fill=${color}>${logoName}</text> 
         </svg>`
        // outline for the sqaure logo
    }

}



class Triangle extends Logo {
    // pulls information from Logo to be used in Triangle
    constructor(logoName,color,shapeColor){
    super(logoName, color, shapeColor)
    }
    render() {
        `<svg width="300" height="200" id="triangle" viewBox="0 0 100 100">
            <polygon points="0 0, 100 0 50 100" fill=${shapeColor}/>
                <text x="0" y="15" fill=${color}>${logoName}</text>
        </svg>`
    }

}


module.exports=Logo, Triangle, Circle, Square;