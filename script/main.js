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
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.strokeStyle = this.color
    }
}

const wall = new Obstacle(6, 5, 50, 50, "green")
wall.render()

// TRYING TO MAKE MAPS WITH 0 AND 1
// const map = () => {
//     if(true) {
//     } else {
//         class Floor {

//         }
//     }
// }

// PLAYING AROUND CODE
// ctx.fillStyle = 'green'
// ctx.fillRect(0, 0, 50, 50)
// ctx.strokeRect(0, 0, 50, 50)
// ctx.strokeStyle = "black"

// ctx.fillStyle = 'green'
// ctx.fillRect(50, 0, 50, 50)
// ctx.strokeRect(50, 0, 50, 50)
// ctx.strokeStyle = "black"


// PLAY && QUIT BUTTON FUNCTION
const displayGame = () => {
    console.log('')
    titleScreen.style.display = "none";
    gameGrid.style.display = "grid";
}

const displayTitle = () => {
    gameGrid.style.display = "none";
    titleScreen.style.display = "flex";
}

start.addEventListener('click', displayGame)
quit.addEventListener('click', displayTitle)


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