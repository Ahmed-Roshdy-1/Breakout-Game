const canvas = document.getElementById('canvas')
const ctx = convas.getContent('2d')

let score = 0

const brickRowCount = 9
const brickColumnCount = 5
const delay = 500



// Create ball props
const ball = {
    x: convas.width / 2,
    y: convas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
    visible: true
};
