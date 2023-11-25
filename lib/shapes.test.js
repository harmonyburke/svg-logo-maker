
const shapes=require('./shapes.js');



describe('Circle', () =>{
    it('should create a circle', () =>{
        const circle= new Circle;
        const result=circle.isCircle('true')

        expect(result).toEqual(true)
        
    })
})

describe('Square', () => {
    it('should create a sqaure', () =>{
        const square= new Square
        const result=square.isSquare('true')

        expect(result).toEqual(true)
    })
})

describe('Triangle', () =>{
    it('should create a triangle', () =>{
        const triangle= new Triangle
        const result=triangle.isTriangle('true')

        expect(result).toEqual(true)

    })
})