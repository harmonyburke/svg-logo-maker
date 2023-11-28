// this file takes the information from the user input and adds the text, color of the text, and all of the elements given from shape.js to create the logo


class Logo{
    constructor(){
       this.textEl='',
       this.shapeEl=''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    setLogo(message, textColor){
        // if the user inputs more than 3 characters, it will throw an error. Otherwise, the text element will be appended to the final svg
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