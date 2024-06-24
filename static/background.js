
let nodes;
let nodeCount;
let cnv;

//Run at the start
function setup() {
	cnv = createCanvas(windowWidth, document.body.scrollHeight);
	background(255);

    nodeCount = 50
    nodes = []
    for (let i = 0; i < nodeCount; i++){
        nodes.push(new Node())
    }
    
}

//Draw every frame
function draw() {
    background(255)
    for (let i = 0; i < nodeCount; i++){
        nodes[i].run()

        if (i < nodeCount-1){
            line(nodes[i].position.x, nodes[i].position.y, nodes[i+1].position.x, nodes[i+1].position.y);
        }
        if (i == nodeCount-1){
            line(nodes[i].position.x, nodes[i].position.y, nodes[0].position.x, nodes[0].position.y);
        }
    }
  
  }


/*
    Node Class Below
*/
let Node = function() {
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.position = createVector(random(0, cnv.width),random(0, document.body.scrollHeight));
    this.transparency = 40
};

Node.prototype.run = function() {
    //print(this.position)
    this.update();
    this.display();
};

Node.prototype.update = function(){
    this.position.add(this.velocity);
    this.position.add(this.acceleration);

    if (this.position.x < 0 && this.velocity.x < 0){
        this.velocity.x *= -1;
    }
    if (this.position.y < 0 && this.velocity.y < 0){
        this.velocity.y *= -1;
    }
    if (this.position.x > cnv.width && this.velocity.x > 0){
        this.velocity.x *= -1;
    }
    if (this.position.y > document.body.scrollHeight && this.velocity.y > 0){
        this.velocity.y *= -1;
    }
};

Node.prototype.display = function() {
    stroke(200, this.transparency);
    strokeWeight(2);
    fill(127, this.transparency);
    //ellipse(this.position.x, this.position.y, 12, 12);
    ellipse(this.position.x, this.position.y, 12, 12);

};