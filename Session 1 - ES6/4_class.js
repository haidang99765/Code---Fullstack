class Car { //class như là 1 bản thiết kế cho 1 đối tượng để từ đó tạo ra các thuộc tính dựa trên bản thiết kế (Class) đó
    name;
    speed;
    seats;
    brand;
    constructor(name, speed, seats, brand) {
        this.name = name; //this ở đây là con trỏ trỏ đến đến instance
        this.speed = speed;
        this.seats = seats;
        this.brand = brand;
    }

    honk() { //honk = còi
        console.log(this.brand + " sound")
    }   

    start() {
        
    }

    stop() {
        
    }
}

class SuperCar extends Car { //SuperCar là 1 tập con của Car
    topSpeed;

    static getLimitedSpeed() { //trong static thì sẽ không dùng this
        return 300;
    }

    constructor(name, speed, seats, brand, topSpeed) {
        super(name, speed, seats, brand); //super ở đây sẽ ghi lại toàn bộ các thuộc tính của class cha (Car)
        this.topSpeed = topSpeed;
    }
    TurboBoost() {
        console.log (this.name + " is boosting to " + this.topSpeed);
    }

    honk () {
        super.honk();
        console.log("New " + this.brand + " sound"); //vì honk cũng là 1 function của class Car nên honk ở đây sẽ là Overwrite function (hàm ghi đè)
    }
}
const myCar = new Car("Fadil", 100, 5, "Vinfast"); //myCar, aliceCar ở đây được gọi là 1 instance (thực thể)
const aliceCar = new Car("Vios", 120, 5, "Toyota");
const BobCar = new SuperCar("Ferrari Spider", 150, 2, "Ferrari", 250);
BobCar.TurboBoost();
BobCar.honk();
aliceCar.honk();
myCar.honk();
// new Car() ở đây sẽ chạy vào constructor, constructor tức là 1 function được dùng để tạo ra các thuộc tính của 1 đối tượng