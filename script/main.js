console.log('linked')
const start = document.getElementById('start')
const quit = document.querySelector('#quit')
const titleScreen = document.getElementById('titleScreen')
const gameGrid = document.getElementById('gameGrid')
const main = document.querySelector('main')
const canvas = document.querySelector('canvas')

// CANVAS
canvas.setAttribute('height', getComputedStyle(main)['height'])
canvas.setAttribute('width', getComputedStyle(main)['width'])
const ctx = canvas.getContext('2d')

// CLASS OBSTACLE CREATION
class Obstacle {
    constructor(x, y, width, height, color) {
        this.x = x * 50
        this.y = y * 50
        this.width = width
        this.height = height
        this.color = color
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const topWall = new Obstacle(0, 0, 750, 50, "grey")
const bottomWall = new Obstacle(0, 8, 750, 50, "grey")
const leftWall = new Obstacle(0, 0, 50, 450, "grey")
const rightWall = new Obstacle(14, 0, 50, 450, "grey")

const roadBlock = new Obstacle(4, 4, 100, 100, "black")


// FLOOR CLASS
class Floor {
    constructor(x, y) {
        this.x = x * 50
        this.y = y * 50
        this.color = "green"
        this.width = 50
        this.height = 50
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        // BORDER FOR FLOOR
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.strokeStyle = "black"
    }
}

// FLOOR GENERATING LOOP
const allFloor = () => {
    for (let i = 1; i < 14; i++) {
        if (i = i) {    
            const floor1 = new Floor(i, 1)
            floor1.render()
        }
    }
    for (let i = 1; i < 14; i++) {
        if (i = i) {    
            const floor2 = new Floor(i, 2)
            floor2.render()
        }
    }
    for (let i = 1; i < 14; i++) {
        if (i = i) {    
            const floor3 = new Floor(i, 3)
            floor3.render()
        }
    }
    for (let i = 1; i < 14; i++) {
        if (i = i) {    
            const floor4 = new Floor(i, 4)
            floor4.render()
        }
    }
    for (let i = 1; i < 14; i++) {
        if (i = i) {    
            const floor5 = new Floor(i, 5)
            floor5.render()
        }
    }
    for (let i = 1; i < 14; i++) {
        if (i = i) {    
            const floor6 = new Floor(i, 6)
            floor6.render()
        }
    }
    for (let i = 1; i < 14; i++) {
        if (i = i) {    
            const floor7 = new Floor(i, 7)
            floor7.render()
        }
    }
}

class SSB {
    constructor() {
        this.x = 102.5
        this.y = 102.5
        this.width = 45
        this.height = 45
        this.color = "white"
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const cleaner = new SSB()

// MOVEMENT
const keyPress = {}
function scrubbing(speed) {
    if (keyPress.w) {
        cleaner.y -= speed
    }
    if (keyPress.s) {
        cleaner.y += speed
    }
    if (keyPress.a) {
        cleaner.x -= speed
    }
    if (keyPress.d) {
        cleaner.x += speed
    }
}

document.addEventListener('keydown', e => keyPress[e.key] = true)


const stopMovement = () => {
    keyPress.w = false
    keyPress.a = false
    keyPress.s = false
    keyPress.d = false
}

// remove this when block works
// document.addEventListener('keyup', e => keyPress[e.key] = false)


const gameLoopInterval = setInterval(gameLoop, 17)

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    allFloor()
    topWall.render()
    bottomWall.render()
    leftWall.render()
    rightWall.render()
    roadBlock.render()
    cleaner.render()

    // hit dectection for side walls
    if(detectObstacle(cleaner, topWall)) {
        scrubbing(-2)
        stopMovement()
        console.log('stop')
    } else {
        scrubbing(1)
        console.log('donstop')
    }

    if(detectObstacle(cleaner, bottomWall)) {
        scrubbing(-2)
        stopMovement()
        console.log('stop')
    } else {
        scrubbing(1)
        console.log('donstop')
    }

    if(detectObstacle(cleaner, leftWall)) {
        scrubbing(-2)
        stopMovement()
        console.log('stop')
    } else {
        scrubbing(1)
        console.log('donstop')
    }

    if(detectObstacle(cleaner, rightWall)) {
        scrubbing(-2)
        stopMovement()
        console.log('stop')
    } else {
        scrubbing(1)
        console.log('donstop')
    }

    // if(detectObstacle(cleaner, roadBlock)) {
    //     scrubbing(-1)
    // } else {
    //     scrubbing(1)
    // }
}

function detectObstacle(cleaner, randomObj) {
    const left = cleaner.x + cleaner.width >= randomObj.x
    const right = cleaner.x  <= randomObj.x + randomObj.width
    const top = cleaner.y + cleaner.height >= randomObj.y
    const bottom = cleaner.y <= randomObj.y + randomObj.height
    // console.log(left, right, top, bottom)
    return left && right && top && bottom
}

// PLAY && QUIT BUTTON FUNCTION

const displayGame = () => {
    // console.log('show game screen')
    titleScreen.style.display = "none";
    gameGrid.style.display = "grid";
}

const displayTitle = () => {
    // console.log('show title screen')
    gameGrid.style.display = "none";
    titleScreen.style.display = "flex";
}

start.addEventListener('click', displayGame)
quit.addEventListener('click', displayTitle)

// const floorOne = new Floor(1, 1)
// floorOne.render()
// const floorTwo = new Floor(2, 1)
// floorTwo.render()
// const floorThree = new Floor(3, 1)
// floorThree.render()
// const floorFour = new Floor(4, 1)
// floorFour.render()
// const floorFive = new Floor(5, 1)
// floorFive.render()
// const floorSix = new Floor(6, 1)
// floorSix.render()
// const floorSeven = new Floor(7, 1)
// floorSeven.render()
// const floorEight = new Floor(8, 1)
// floorEight.render()
// const floorNine = new Floor(9, 1)
// floorNine.render()
// const floorTen = new Floor(10, 1)
// floorTen.render()
// const floorElev = new Floor(11, 1)
// floorElev.render()
// const floorTwel = new Floor(12, 1)
// floorTwel.render()
// const floorThirt = new Floor(13, 1)
// floorThirt.render()


// --- GAME PLAN ---
// --- TITLE SCREEN ---

// Render game screen with title, instructions, and play button
// Dom for instructions and play button with eventlistener click to invoke function

// --- GAME START ---

// Create canvas 2d

// Create Class for Obstacle
// pick x y coordinate to create a rectangle
// render size as needed

// Create Class for Floor
// pick x coordinate that is divisible by 50px
// render size 50px x 50px
// TBD how I should put floors

// function to render next stage when win condition is met
// Render -- first stage -- 

// -- first stage -- 
// if every floor is clean disable input and go-- second stage --

// Render stage with Super Scrub Block
// always bottom left

// Create Character Class
// Generate hit box (same size as SSB)
// Generate color hit box (smaller size than SSB)
// ++ is moving = true/false
// Render Character

// --- GAME LOOP --- (THINGS TO CHECK CONSTANTLY)

// set interval
// set hit -- wall detection -- callback function
// set color blue -- clean floor -- the grids where SSB has collided with


//  --- MOVEMENT ---

// Move with WASD keys 
// -- movement --
// ONLY MOVE ONE DIRECTION AT A TIME (use is moving variable)
// can move when you hit a wall -- wall dectection --

// Stop when SSB hits a wall --
// collision detect function

// --- CALLBACK FUNCTIONS ---
// -- wall detection --
// ++ is moving = true/false
// disable key stroke on the side that is being collided
// once it hits a wall trun is moving to false
// -- clean floor --
// ++ is clean = true/false
// change the floor color to blue if the floor is dirty 
// colored floor dection ignore when it is already clean


// Win screen or next stage screen when pool is clean

// --- QUESTIONS ---
// do i need child class?
// for game loop interval time what is a good refresh interval time
// can i have a class that holds all the map information?