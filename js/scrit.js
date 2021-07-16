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



// Create paddle props
const paddle = {
    x: convas.width / 2 - 40,
    y: convas.height / -20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
    visible: true

};

// Creat brick props
const brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true

};