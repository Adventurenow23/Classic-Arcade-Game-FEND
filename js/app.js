
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;
 };  

// Variables applied to each of our instances go here,
// we've provided one for you to get started

// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images
   
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
"use strict;"
Enemy.prototype.update = function(dt) {
     
    this.x += this.speed * dt;
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    } 

if (player.x < this.x +80 &&
player.x +80 > this.x &&
player.y < this.y +60 &&
60 + player.y > this.y) {
    player.x = 202;
    player.y = 405;
}
};

// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
    constructor() {
    this.sprite ='images/char-pink-girl.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 4) + 55;
    this.x = this.startX;
    this.y = this.startY;
    this.victory = false;  
}
//Check for collision between hero and enemy//
update() {
    for(let enemy of allEnemies) {
    if(this.y === enemy.y && (enemy.x + enemy.step/2 > this.x &&
        enemy.x < this.x + this.step/2) ) {
            this.reset();
            }
        }
    }

//Reset hero and setting x and y to starting x and y//    
resetPos()  {
    this.y = this.startY;
    this.x = this.startX;
    }    

render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
 //Keypress handling//   
handleInput(input) {
    switch(input) {
        case 'left':
        if(this.x > 0) {
            this.x -= this.step;
        }    
        break;
        case 'up':
        if (this.y > 0) {
        this.y -= this.jump;
        }
        else {
            this.resetPos();
            alert ('Victory is yours!');
        }
        break;
        
        case 'right':
        if (this.x < this.step * 4) {
        this.x += this.step;
        }
        break;

        case 'down':
        if (this.y < this.jump * 4) {
        this.y += this.jump;
        }
        break;
    }
}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Hero();
const bug1 = new Enemy(-101, 70, 200);
const bug2 = new Enemy(-101, 145, 300);
const bug3 = new Enemy((-101 * 2.5), 235, 175);
const allEnemies = [];
allEnemies.push(bug1,bug2,bug3);
console.log(allEnemies);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});