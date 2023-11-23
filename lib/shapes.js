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




module.exports=Logo;