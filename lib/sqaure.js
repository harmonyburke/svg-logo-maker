const shapes=require('./shapes.js')
// this pulls in the information in shapes.js


class Sqaure extends Logo{
    // this information in the class 'Logo' in shapes.js is extended into the class square to help fill in important information
    render(){
        `<rect x="10" y="10" width="30" height="30" fill=${shapeColor}/>`
        // outline for the sqaure logo
    }
}

module.exports=Sqaure;