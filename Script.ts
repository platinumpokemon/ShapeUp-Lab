let triButton: HTMLElement | null;
let cirButton: HTMLElement | null;
let squButton: HTMLElement | null;
let recButton: HTMLElement | null;
let triHeight: string;
let cirRadius: string;
let squHeight: string;
let recHeight: string;
let recWidth: string;
let triHeightNum: number;
let cirRadiusNum: number;
let squHeightNum: number;
let recHeightNum: number;
let recWidthNum: number;
let sidepanel: HTMLElement | null;
let backgroundArea: HTMLElement | null;
let height: number;
let width: number;
let area: number;
let radius: number;
let perimeter: number;

document.addEventListener("DOMContentLoaded", () => {
    backgroundArea = document.getElementById("background-div");
    triButton = document.getElementById("triangle-button");
    sidepanel = document.getElementById("sidepanel");
    (<HTMLElement>triButton).addEventListener("click",() => {
        drawTriangle();
    })
    cirButton = document.getElementById("circle-button");
    (<HTMLElement>cirButton).addEventListener("click",() => {
        drawCircle();
        
    })
    squButton = document.getElementById("square-button");
    (<HTMLElement>squButton).addEventListener("click",() => {
        drawSquare();
    })
    recButton = document.getElementById("rectangle-button");
    (<HTMLElement>recButton).addEventListener("click",() => {
        drawRectangle();
    })        
});

interface IShape {
    value: number;
    div: HTMLDivElement;
}

class Shape implements IShape {
    div: HTMLDivElement;
    value: number;
    ranNum1: number
    ranNum2: number
    name: string;
    constructor(name: string, input: string){
        this.name = name;
        this.div = document.createElement('div');
        this.div.addEventListener("click", () => {
            this.describe();
        })
        this.div.addEventListener("dblclick", () => {
            this.div.remove();
        })
        this.draw();
    }
    describe(){
        (<HTMLElement>sidepanel).style.visibility =`visible`;
        height = this.div.offsetHeight;
        width = this.div.offsetWidth;
        radius = 0;
     
     
        if(this.name === " Triangle" ){
            area = (this.div.offsetHeight * this.div.offsetWidth)/ 2;
            perimeter = 2 * this.div.offsetHeight * Math.sqrt(2 * this.div.offsetHeight * this.div.offsetHeight)
         
        }else if (this.name === " Circle"){
            radius = this.div.offsetHeight/ 2;
            area = Math.floor(Math.pow((this.div.offsetHeight/ 2),  2) * Math.PI);
            perimeter = Math.floor(2 * Math.PI * (this.div.offsetHeight/ 2));
        }else {
            area = this.div.offsetHeight * this.div.offsetWidth;
            perimeter = this.div.offsetHeight * 2 + this.div.offsetWidth * 2; 
        }


        perimeter = this.div.offsetHeight * 2 + this.div.offsetWidth * 2;
        this.appendText(<any>document.getElementById('name'),`Shape Name: ${this.name}`);
        this.appendText(<any>document.getElementById('width'), `Width: ${width}px`);
        this.appendText(<any>document.getElementById('height'), `Height: ${height}px`);
        this.appendText(<any>document.getElementById('radius'), `Radius: ${radius}px`);
        this.appendText(<any>document.getElementById('area'), `Area: ${area}px`);
        this.appendText(<any>document.getElementById('perimeter'), `Perimeter: ${perimeter}px`);

    }
    draw(){
        (<HTMLElement>backgroundArea).appendChild(this.div);
        this.ranNum1= Math.floor(Math.random() * 601);
        this.ranNum2= Math.floor(Math.random() * 601);
    }



    private appendText(element: HTMLElement, text: string) {
        
        element.innerText = text;
    }
}



class Circle extends Shape{
    constructor(radius: number){
        super(" Circle", cirRadius) 
        cirRadius = (<HTMLInputElement>document.getElementById("circle-input")).value;
        cirRadiusNum = +cirRadius * 2;
        this.div.setAttribute("id", "circle");
        this.div.style.height = `${cirRadiusNum}px`;
        this.div.style.width = `${cirRadiusNum}px`;
        this.div.style.top = `${this.ranNum1}px`
        this.div.style.left = `${this.ranNum2}px`
        
    }
    
}

const drawCircle = () => {
    new Circle(cirRadiusNum);
    
}


class Square extends Shape{
    constructor(sideLength: number){
        super(" Square", squHeight)
        squHeight = (<HTMLInputElement>document.getElementById("square-input")).value;
        this.div.setAttribute("id", "square");
        radius = 0;
        squHeightNum = +squHeight;
        this.div.style.height = `${squHeight}px`
        this.div.style.width = `${squHeight}px`
        this.div.style.top = `${this.ranNum1}px`
        this.div.style.left = `${this.ranNum2}px`
        
      
    }
}

const drawSquare = () => {
    new Square(squHeightNum);
    
}

class Triangle extends Shape {
    constructor(height: number){
        super(" Triangle", triHeight);
        triHeight = (<HTMLInputElement>document.getElementById("triangle-input")).value;
        this.div.setAttribute("id", "triangle-bottomleft");
        triHeightNum = +triHeight;    
        this.div.style.borderBottom = `${triHeight}px solid rgb(101, 99, 250) `
        this.div.style.borderRight = `${triHeight}px solid transparent`
        this.div.style.top = `${this.ranNum1}px`
        this.div.style.left = `${this.ranNum2}px`
    }
}

const drawTriangle = () => {
    new Triangle(triHeightNum);
    
}

class Rectangle extends Shape{
    constructor(width: number, height: number){
        super(" Rectangle", recHeight+recHeight)
        this.div.setAttribute("id", "rectangle");
        recHeight = (<HTMLInputElement>document.getElementById("rectangle-input-1")).value;
        height = +recHeight;
        recWidth = (<HTMLInputElement>document.getElementById("rectangle-input-2")).value;
        width = +recWidth;
        this.div.style.height = `${recHeight}px`
        this.div.style.width = `${recWidth}px`
        this.div.style.top = `${this.ranNum1}px`
        this.div.style.left = `${this.ranNum2}px`
    }
}

const drawRectangle = () => {
    new Rectangle(recWidthNum, recHeightNum);
    
}


