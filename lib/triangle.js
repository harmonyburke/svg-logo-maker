
const shape = require('./shapes.js')
// pulls in information from shapes.js

class Triangle extends Logo {
    // pulls information from Logo to be used in Triangle
    render() {
        `<svg id="triangle" viewBox="0 0 100 100">
<polygon points="0 0, 100 0 50 100" fill=${shapeColor}/>
</svg>`
    }
}