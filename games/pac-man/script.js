const tile = 30;
const mapIstance = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 'R', 1, 1, 1, 1, 1, 1, 'B', 1, 1, 0, 1, 0, 1, 1, 'G', 1, 1, 1, 1, 1, 1, 'Y', 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 'ga', 1, 1, 1, 1, 1, 1, 'ra', 1, 1, 1, 1, 1, 1, 1, 'ba', 1, 1, 1, 1, 1, 1, 'ya', 1],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 'gb', 1, 1, 1, 1, 1, 1, 'rb', 1, 1, 1, 1, 1, 1, 1, 'bb', 1, 1, 1, 1, 1, 1, 'yb', 1],

    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'M', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let map = JSON.parse(JSON.stringify(mapIstance));
const WIDTH = canvas.width = tile * map[0].length;
const HEIGHT = canvas.height = tile * map.length;

let maze = null;
let player = null;
let req = null;
let enemies = [];

isGameOver = false;
isPlayerWin = false;

class Maze {
    constructor(map, tile) {
        this.map = map;
        this.tile = tile;
        this.doorsRows = {
            a: this.randomInt,
            b: this.randomInt
        }
        this.doorsArr = ['g', 'r', 'b', 'y']
        this.idxColor = this.randomInt;
        this.colors = ['#F24607', '#0597F2', '#49D907', '#EAF205']
    }

    get randomInt() {
        return Math.floor(Math.random() * 4);
    }

    drawMap() {
        this.map.forEach((row, y) => {
            row.forEach((item, x) => {
                let xPos = x * this.tile;
                let yPos = y * this.tile;
                this.drawTile(xPos, yPos, item)
            })
        })
    }

    drawTile(xPos, yPos, item) {
        ctx.save()
        ctx.beginPath()

        if (typeof item === 'string') {
            const [string, numRow = null] = item.split("");
            item = string;
            if (item === item.toLowerCase()) {
                ctx.beginPath();
                ctx.moveTo(xPos, yPos);
                ctx.lineTo(xPos + this.tile, yPos + this.tile);
                ctx.moveTo(xPos + this.tile, yPos);
                ctx.lineTo(xPos, yPos + this.tile);
                ctx.stroke();
            }
        }
        ctx.fillStyle = this.setColorTile(item)
        ctx.fillRect(xPos, yPos, this.tile, this.tile);
        ctx.stroke();
        ctx.restore()
    }

    setColorTile(item) {

        let color = item ? '#970FF2' : '#f0eeef'
        switch (item) {
            case 'R':
            case 'r':
                color = '#F24607'
                break
            case 'B':
            case 'b':
                color = '#0597F2'
                break
            case 'G':
            case 'g':
                color = '#49D907'
                break
            case 'Y':
            case 'y':
                color = '#EAF205'
                break
            case 'M':
                color = this.colors[this.idxColor]
                this.idxColor++
                !this.colors[this.idxColor] && (this.idxColor = 0)
                break
        }
        return color
    }

    get doors() {
        return {
            doors: this.doorsArr,
            doorsRows: this.doorsRows
        }
    }

    addDoorsIdxRow() {
        this.doorsIdxRow++
    }

}

class Player {
    constructor() {
        this.side = tile;
        this.resetPos()
        this.speed = 10;

        this.color = 'black';
        this.colorString = ''
        this.keys = []
        this.live = 3;

        document.body.addEventListener("keydown", (e) => this.keydown(e));
        document.body.addEventListener("keyup", (e) => this.keyup(e));
    }

    start() {
        this.move()
        this.draw()
        this.gui()
    }

    draw() {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.side, this.side);
        ctx.stroke();
        ctx.restore()
    }

    gui() {
        for (let i = 0; i < this.live; i++) {
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle = 'black';
            ctx.fillRect(30 + (20 * i), 10, 10, 10);
            ctx.stroke();
            ctx.restore()
        }

    }

    move() {
        this.setMapCoordinates();
        if (this.keys) {
            if (this.keys.ArrowRight && this.isRightMapCoordinate) {
                this.x += this.speed
            } else if (this.keys.ArrowLeft && this.isLeftMapCoordinate) {
                this.x += -this.speed
            } else if (this.keys.ArrowUp && this.isUpMapCoordinate) {
                this.y -= this.speed
            } else if (this.keys.ArrowDown && this.isDownMapCoordinate) {
                this.y += this.speed
            }
        }
    }

    keydown(e) {
        this.keys[e.key] = true;
    }

    keyup(e) {
        this.keys[e.key] = false;
    }

    setMapCoordinate(coordinate) {
        return Math.floor(coordinate / this.side)
    }

    setMapCoordinates() {
        this.mapCoordinates = {
            coordX: this.setMapCoordinate(this.x),
            coordX1: this.setMapCoordinate(this.x + this.side - 1),
            coordXLeft: this.setMapCoordinate(this.x - this.speed),
            coordY: this.setMapCoordinate(this.y),
            coordY1: this.setMapCoordinate(this.y + this.side - 1),
            coordYUp: this.setMapCoordinate(this.y - this.speed)
        }
    }

    get isRightMapCoordinate() {
        return !map[this.mapCoordinates.coordY][this.mapCoordinates.coordX + 1] &&
            !map[this.mapCoordinates.coordY1][this.mapCoordinates.coordX + 1]
    }

    get isLeftMapCoordinate() {
        return !map[this.mapCoordinates.coordY][this.mapCoordinates.coordXLeft] &&
            !map[this.mapCoordinates.coordY1][this.mapCoordinates.coordXLeft]
    }

    get isUpMapCoordinate() {
        const coordYX = map[this.mapCoordinates.coordYUp][this.mapCoordinates.coordX];
        const coordYX1 = map[this.mapCoordinates.coordYUp][this.mapCoordinates.coordX1];
        const isString = typeof coordYX === "string" && typeof coordYX1 === "string"
        isString && this.changeColor(coordYX, coordYX1)

        const isLowercase = isString && coordYX === coordYX.toLowerCase() && coordYX1 === coordYX1.toLowerCase()
        return (!coordYX && !coordYX1) || isString && !isLowercase
    }

    get isDownMapCoordinate() {
        if (!isPlayerWin) {
            let coordYX = map[this.mapCoordinates.coordY + 1][this.mapCoordinates.coordX];
            let coordYX1 = map[this.mapCoordinates.coordY + 1][this.mapCoordinates.coordX1];
            const isString = typeof coordYX === "string" && typeof coordYX1 === "string"
            isString && this.changeColor(coordYX, coordYX1)

            const isLowercase = isString && coordYX === coordYX.toLowerCase() && coordYX1 === coordYX1.toLowerCase()
            let { colorRight = false, colorAndKeyRight = false } = isString && isLowercase && this.controlDoor(coordYX1);
            colorRight && (map[this.mapCoordinates.coordY + 1][this.mapCoordinates.coordX1] = 1)
            colorAndKeyRight && (map[this.mapCoordinates.coordY + 1][this.mapCoordinates.coordX1] = 0)
            if (map[this.mapCoordinates.coordY + 1][this.mapCoordinates.coordX1] === 'M') {
                debugger;
                finishGame('win')
            }
            return (!coordYX && !coordYX1) || isString && !isLowercase
        }
    }

    controlDoor(coord) {
        const [string = coord, rowNum = null] = coord.split('');
        coord = string;
        const { doors, doorsRows } = maze.doors;
        const colorRight = coord === this.colorString;
        const colorAndKeyRight = doors[doorsRows[rowNum]] === coord && colorRight;
        colorAndKeyRight && maze.addDoorsIdxRow()

        return { colorRight: colorRight, colorAndKeyRight: colorAndKeyRight }
    }

    changeColor(coordYX, coordYX1) {
        let string = typeof coordYX === 'string' && coordYX;
        string = typeof coordYX1 === 'string' && coordYX1;
        switch (string) {
            case 'R':
                this.color = '#F24607'
                this.colorString = 'r'
                break
            case 'B':
                this.color = '#0597F2'
                this.colorString = 'b'
                break
            case 'G':
                this.color = '#49D907'
                this.colorString = 'g'
                break
            case 'Y':
                this.color = '#EAF205'
                this.colorString = 'y'
                break
        }
    }

    get position() {
        return { pX: this.x, pX1: this.x + this.side, pY: this.y, pY1: this.y + this.side }
    }

    resetPos() {
        this.x = tile * 12
        this.y = tile;
    }

    hit(enemy) {
        this.resetPos()
        enemy.resetPos()
        this.color = 'black'
        this.live--;
        if (!this.live) {
            finishGame('gameover')
        }
    }

    get lives() {
        return this.live;
    }
}

class Enemy {
    constructor(posX, posY, speed, level) {
        this.side = tile;
        this.posX = posX;
        this.posY = posY;
        this.resetPos()
        this.speed = speed;
        this.position = 'right';
        this.level = level;
        this.denied = {
            x: [1, 8, 16, 23],
            y: 10 * this.level
        }
    }

    start() {
        this.draw()
        this.move()
    }

    resetPos() {
        this.x = tile * this.posX;
        this.y = tile * this.posY;
    }

    draw() {
        const onePart = this.side / 5;
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.side, this.side);
        ctx.moveTo(this.x + onePart, this.y + onePart);
        ctx.lineTo(this.x + onePart * 2, this.y + (this.side / 2));
        ctx.moveTo(this.x + onePart * 4, this.y + onePart);
        ctx.lineTo(this.x + onePart * 3, this.y + (this.side / 2));
        ctx.lineWidth = 3;
        ctx.moveTo(this.x + onePart, this.y + onePart * 4);
        ctx.lineTo(this.x + onePart * 4, this.y + onePart * 4);
        ctx.stroke();
        ctx.restore()
    }

    setMapCoordinates() {
        this.mapCoordinates = {
            coordX: this.setMapCoordinate(this.x),
            coordX1: this.setMapCoordinate(this.x + this.side - 1),
            coordXLeft: this.setMapCoordinate(this.x - this.speed),
            coordY: this.setMapCoordinate(this.y),
            coordY1: this.setMapCoordinate(this.y + this.side - 1),
            coordYUp: this.setMapCoordinate(this.y - this.speed)
        }
    }

    move() {

        this.setMapCoordinates()
        this.isEnemyStop()

        if (this.position === 'left' && this.isLeftMapCoordinate) {
            this.x -= this.speed
        }

        if (this.position === 'right' && this.isRightMapCoordinate) {
            this.x += this.speed
        }

        if (this.position === 'up' && this.isUpMapCoordinate) {
            this.y -= this.speed
        }

        if (this.position === 'down' && this.isDownMapCoordinate) {
            this.y += this.speed
        }

        this.collision(player.position)

    }

    get isRightMapCoordinate() {
        return !map[this.mapCoordinates.coordY][this.mapCoordinates.coordX + 1] &&
            !map[this.mapCoordinates.coordY1][this.mapCoordinates.coordX + 1]
    }

    get isLeftMapCoordinate() {
        return !map[this.mapCoordinates.coordY][this.mapCoordinates.coordXLeft] &&
            !map[this.mapCoordinates.coordY1][this.mapCoordinates.coordXLeft]
    }

    get isUpMapCoordinate() {
        return !map[this.mapCoordinates.coordYUp][this.mapCoordinates.coordX] &&
            !map[this.mapCoordinates.coordYUp][this.mapCoordinates.coordX1]
    }

    get isDownMapCoordinate() {
        return !map[this.mapCoordinates.coordY + 1][this.mapCoordinates.coordX] &&
            !map[this.mapCoordinates.coordY + 1][this.mapCoordinates.coordX1]
    }

    isEnemyStop() {
        this.position === 'right' && this.rightAi
        this.position === 'left' && this.leftAi
        this.position === 'up' && this.upAi
        this.position === 'down' && this.downAi

    }

    collision(playerPos) {
        const { pX, pX1, pY, pY1 } = playerPos;
        if (this.x + this.side > pX && this.x < pX1 &&
            this.y + this.side > pY && this.y < pY1) {
            player.hit(this)
        }
    }


    get rightAi() {
        if (!this.isRightMapCoordinate && !this.isUpMapCoordinate && !this.isDownMapCoordinate) {
            this.position = 'left'
        }
        if (this.isRightMapCoordinate && this.isUpMapCoordinate && this.isDownMapCoordinate) {
            let rand = Math.floor(Math.random() * 3);
            let positionArr = ['up', 'right', 'down']
            this.position = positionArr[rand]
        } else if (!this.isRightMapCoordinate && !this.isUpMapCoordinate && this.isDownMapCoordinate) {
            this.position = 'down'
        } else if (!this.isRightMapCoordinate && this.isUpMapCoordinate && !this.isDownMapCoordinate) {
            this.position = 'up'
        } else if (this.isRightMapCoordinate && !this.isUpMapCoordinate && !this.isDownMapCoordinate) {
            this.position = 'right'
        } else if (!this.isRightMapCoordinate && this.isUpMapCoordinate && this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'up' : 'down'
        } else if (this.isRightMapCoordinate && !this.isUpMapCoordinate && this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'right' : 'down'
        } else if (this.isRightMapCoordinate && this.isUpMapCoordinate && !this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'right' : 'up'
        }
    }

    get leftAi() {
        if (!this.isLeftMapCoordinate && !this.isUpMapCoordinate && !this.isDownMapCoordinate) {
            this.position = 'right'
        }
        if (this.isLeftMapCoordinate && this.isUpMapCoordinate && this.isDownMapCoordinate) {
            let rand = Math.floor(Math.random() * 3);
            let positionArr = ['up', 'left', 'down']
            this.position = positionArr[rand]
        } else if (!this.isLeftMapCoordinate && !this.isUpMapCoordinate && this.isDownMapCoordinate) {
            this.position = 'down'
        } else if (!this.isLeftMapCoordinate && this.isUpMapCoordinate && !this.isDownMapCoordinate) {
            this.position = 'up'
        } else if (this.isLeftMapCoordinate && !this.isUpMapCoordinate && !this.isDownMapCoordinate) {
            this.position = 'left'
        } else if (!this.isLeftMapCoordinate && this.isUpMapCoordinate && this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'up' : 'down'
        } else if (this.isLeftMapCoordinate && !this.isUpMapCoordinate && this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'left' : 'down'
        } else if (this.isLeftMapCoordinate && this.isUpMapCoordinate && !this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'left' : 'up'
        }
    }

    get upAi() {
        if (!this.isLeftMapCoordinate && !this.isRightMapCoordinate && !this.isUpMapCoordinate) {
            this.position = 'down'
        }
        if (this.isLeftMapCoordinate && this.isRightMapCoordinate && this.isUpMapCoordinate) {
            let rand = Math.floor(Math.random() * 3);
            let positionArr = ['right', 'left', 'up']
            this.position = positionArr[rand]
        } else if (!this.isLeftMapCoordinate && !this.isRightMapCoordinate && this.isUpMapCoordinate) {
            this.position = 'up'
        } else if (!this.isLeftMapCoordinate && this.isRightMapCoordinate && !this.isUpMapCoordinate) {
            this.position = 'right'
        } else if (this.isLeftMapCoordinate && !this.isRightMapCoordinate && !this.isUpMapCoordinate) {
            this.position = 'left'
        } else if (!this.isLeftMapCoordinate && this.isRightMapCoordinate && this.isUpMapCoordinate) {
            this.position = this.randomBoolen ? 'right' : 'up'
        } else if (this.isLeftMapCoordinate && !this.isRightMapCoordinate && this.isUpMapCoordinate) {
            this.position = this.randomBoolen ? 'left' : 'up'
        } else if (this.isLeftMapCoordinate && this.isRightMapCoordinate && !this.isUpMapCoordinate) {
            this.position = this.randomBoolen ? 'left' : 'right'
        }
    }

    get downAi() {
        // console.log(this.levelDenied)
        if ((!this.isLeftMapCoordinate && !this.isRightMapCoordinate && !this.isDownMapCoordinate) || this.levelDenied) {
            this.position = 'up'
        } else if (this.isLeftMapCoordinate && this.isRightMapCoordinate && this.isDownMapCoordinate) {
            let rand = Math.floor(Math.random() * 3);
            let positionArr = ['right', 'left', 'down']
            this.position = positionArr[rand]
        } else if (!this.isLeftMapCoordinate && !this.isRightMapCoordinate && this.isDownMapCoordinate) {
            this.position = 'down'
        } else if (!this.isLeftMapCoordinate && this.isRightMapCoordinate && !this.isDownMapCoordinate) {
            this.position = 'right'
        } else if (this.isLeftMapCoordinate && !this.isRightMapCoordinate && !this.isDownMapCoordinate) {
            this.position = 'left'
        } else if (!this.isLeftMapCoordinate && this.isRightMapCoordinate && this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'right' : 'down'
        } else if (this.isLeftMapCoordinate && !this.isRightMapCoordinate && this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'left' : 'down'
        } else if (this.isLeftMapCoordinate && this.isRightMapCoordinate && !this.isDownMapCoordinate) {
            this.position = this.randomBoolen ? 'left' : 'right'
        }
    }

    get levelDenied() {
        return this.denied.y <= this.mapCoordinates.coordY1
    }

    get randomBoolen() {
        return Math.random() < 0.5
    }

    setMapCoordinate(coordinate) {
        return Math.floor(coordinate / this.side)
    }

}

let drawGameoverScreen = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = 'bold 42px sans-serif';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2)
}

let drawWinScreen = () => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = 'bold 42px sans-serif';
    ctx.fillText('Congratulations', canvas.width / 2, canvas.height / 2)
    ctx.fillText('YOU WIN', canvas.width / 2, canvas.height / 2 + 50)
}


////LOOP////
const fps = 30;
const interval = 1000 / fps;
let now;
let then = Date.now();
let delta;

let loop = () => {
    if (!isGameOver && !isPlayerWin) {
        window.requestAnimationFrame(loop);
        now = Date.now();
        delta = now - then;

        if (delta > interval) {
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            maze.drawMap()
            player.start()
            enemies.map(enemy => enemy.start())
            then = now - (delta % interval);
        }
    } else {
        isGameOver && drawGameoverScreen()
        isPlayerWin && drawWinScreen()
    }
}

let game = () => {
    if (isGameOver || isPlayerWin) {
        maze = null;
        player = null;
        req = null;
        enemies = []
        map = [];
    }
    map = JSON.parse(JSON.stringify(mapIstance));
    maze = new Maze(map, tile)
    player = new Player()

    pushEnemyInEnemiesArr(12, 7, 10, 1)
    pushEnemyInEnemiesArr(12, 17, 5, 2)
    pushEnemyInEnemiesArr(12, 17, 5, 2)
    req = window.requestAnimationFrame(loop);
    isGameOver = false
    isPlayerWin = false
}

let pushEnemyInEnemiesArr = (posX, posY, speed, level) => {
    let enemy = new Enemy(posX, posY, speed, level)
    enemies.push(enemy)
}

let finishGame = (status) => {
    status === 'gameover' && (isGameOver = true)
    status === 'win' && (isPlayerWin = true)
}

///START////
game()

document.addEventListener("click", () => {
    (isGameOver || isPlayerWin) && game()
});

