class Snake {
    constructor(x,y) {
        this.body = [new Segment(x,y, true)];
    }

    /**
     * Changes the travel direction of the snake
     * @param {string} prevDirection
     * @param {string} newDirection 
     */
    move(prevDirection,newDirection) {
        let segmentHeight = this.body[0].size[0];
        let segmentWidth = this.body[0].size[1];
        let currentHead = this.body[0];
        let currentPos = currentHead.position;

        let moveNums = [];
        switch(newDirection) {
            case 'up':
                if (prevDirection === 'down') {
                    moveNums = [0,-segmentHeight];
                } else {
                    moveNums = [0,segmentHeight];
                }
                break;
            case 'down':
                if (prevDirection === 'up') {
                    moveNums = [0,segmentHeight];
                } else {
                    moveNums = [0,-segmentHeight];
                }
                break;
            case 'left':
                if (prevDirection === 'right') {
                    moveNums = [segmentWidth,0];
                } else {
                    moveNums = [-segmentWidth,0];
                }
                break;
            case 'right':
                if (prevDirection === 'left') {
                    moveNums = [segmentWidth,0];
                } else {
                    moveNums = [-segmentWidth,0];
                }
                break;
        }

        if (this.body.length > 1) {
            let newHead = this.body.pop();
        } else {
            let newHead = currentHead;
        }
        newHead.position[0] = currentPos[0] + moveNums[0];
        newHead.position[1] = currentPos[1] + moveNums[1];
    }

}