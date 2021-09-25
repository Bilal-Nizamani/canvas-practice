const canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

var circle = {
    x:undefined,
    y:undefined
}
var colors = ['#32a2a8','#32a873', '#327da8','#324aa8','#98a832',  'black']



window.addEventListener('mousemove',(event)=>{

    circle.x = event.x;
    circle.y = event.y;
})

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});

function Circle(x, y, radius, dx, dy) {

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.colors =  colors[Math.floor(Math.random()* 7)];

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'red',
         c.stroke();
    }


    this.update = ()=>{
        if (this.x > innerWidth - this.radius || this.x - this.radius < 0) { this.dx = -this.dx; }
        if (this.y > innerHeight - this.radius || this.y - this.radius < 0) { this.dy = -this.dy; }
        this.x += this.dx;
        this.y += this.dy;


        if(circle.x  - this.x < 50 &&  circle.x - this.x > -50 && circle.y - this.y < 50 && circle.y - this.y > -50  ){
            if (this.radius < 50){
                this.radius +=1;
            }

        }else{
            if(this.radius > radius){
                this.radius  = this.radius -1;
            }
        }
        this.draw();
        c.fillStyle= (this.colors );
        c.fill();
    }
}
  var circleArray = [];
for (var i =0; i < 1400; i++ ) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var radius =Math.floor(Math.random() * 6);
    var dx = Math.random() *-2;
    var dy = Math.random()*2;
    circleArray.push( new Circle(x, y, radius,dx, dy));
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);


        circleArray.forEach((circle, )=>{
            circle.update();
        });
}

animate();

