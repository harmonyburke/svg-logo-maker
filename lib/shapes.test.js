
const {Circle, Triangle, Square}=require('./shapes.js');



describe('Circle', () =>{
    it('should create a circle', () =>{
        const circle= new Circle();
        circle.setColor('blue')
        const result=`<svg width="300" height="200"><circle cx="150" cy="100" r="50"  fill='blue'/></svg>`
           
            

        expect(circle.render()).toEqual(result)
        
    })
})

describe('Square', () => {
    it('should create a sqaure', () =>{
        const square= new Square
        square.setColor('blue')
        const result=`<svg width="300" height="200"><rect x="90" y="45" width="120" height="120" fill='blue'/></svg>`
        

        expect(square.render()).toEqual(result)
    })
})

describe('Triangle', () =>{
    it('should create a triangle', () =>{
        const triangle= new Triangle
        triangle.setColor('blue')
        const result=`<svg width="300" height="200" id="triangle" viewBox="0 0 100 100"><polygon points="0 0, 100 0 50 100" fill='blue'/></svg>`
        expect(triangle.render()).toEqual(result)

    })
})

