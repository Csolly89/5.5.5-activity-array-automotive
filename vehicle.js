class Vehicle {
    constructor(make,model,year,price,vin){
        this.model = model;
        this.paint = make;
        this.year = year;
        this.price = price;
        this.vin = vin;
        this.color = undefined;
    }
    paint(color){
        this.color = color
    }
    drive(){
        return this.year + " " + this.make + " " + this.model + "drives"
    }
        
    
}

