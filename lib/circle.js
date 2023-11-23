const shapes=requre('./shapes.js')
// pulls in information in shapes.js for use 

class Circle extends Logo{
    // pulls in important info from the class Logo to use in Circle
    render(){
        return `<svg height="100" width="100">
        <circle cx="50" cy="50" r="40"  fill=${shapeColor} />
      </svg>`
    }

}

module.exports= Circle;