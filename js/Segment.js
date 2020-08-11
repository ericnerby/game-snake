class Segment {
    constructor(x,y, isHead = false, size = [5,5]) {
        this.isHead = isHead;
        this.position = [x,y];
        this.size = size;
    }
}