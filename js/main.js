const CANVAS_WIDTH = 800 ;
const CANVAS_HEIGHT = 600 ;
const CANVAS_FRAMERATE = 30 ;

class Blob {

    constructor() {
        this.pos = createVector( random(CANVAS_WIDTH), random(CANVAS_HEIGHT) ) ;
        this.r = 50 ;
        this.c = color( 255, 0, 0 ) ;
    }

    update() {

        if( this.r > 0 )
            this.r *= 0.9 ;
    }
    
    draw() {

        fill( this.c ) ;
        ellipse( this.pos.x, this.pos.y, this.r*2, this.r*2 ) ;
    }

    checkCollision( point ) {
        return ( (point.x > this.pos.x - this.r) && (point.x < this.pos.x + this.r) ) &&
               ( (point.y > this.pos.y - this.r) && (point.y < this.pos.y + this.r) ) ;
    }

    logValues() {        
        console.log( `Position: ${this.pos}\nRadius: ${this.r}\nColor: ${this.c}` ) ;
    }
}

let blob = 0 ;

function setup() {

    createCanvas( CANVAS_WIDTH, CANVAS_HEIGHT ) ;
    frameRate( CANVAS_FRAMERATE ) ;
    
    blob = new Blob() ;

    setInterval( instantiateNewBlob, 1000 ) ;
}

function instantiateNewBlob() {

    blob = new Blob() ;
}

function draw() {

    background( 0 ) ;

    blob.update() ;
    blob.draw() ;
}

function mouseClicked() {

    //console.log( `Mouse: ${createVector(mouseX, mouseY)}` ) ;
    
    if( blob.checkCollision( createVector( mouseX, mouseY ) ) )
        console.log( "Collide!" ) ;
}