class Logo{
    constructor(){
       this.textEl='',
       this.shapeEl=''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    setLogo(message, textColor){
        if(message.length>3){
            throw new Error('Please enter a message no more than 3 letters.')
        }
        this.textEl=`<text x="147" y="114" font-size="50" text-anchor="middle" fill=${textColor}>${message}</text>`

    }
    setShape(shape){
        this.shapeEl=shape.render()
    }
  
}
module.exports=Logo