class Ball {
    constructor(x, y, r) {
        var g = {
            restitution: 0.3,
            friction: 0.3,
            density: 1.5
        }
        this.body = Bodies.circle(x, y, r, g);
        this.r = r;
        World.add(world, this.body);
    }
    display() {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
}