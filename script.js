function Calculator (data) {
		this.sum = function(x) {
			return data = data + x
		},
		
		this.mult = function(x) {
			return data = data * x
		},
		
		this.div = function(x) {
			return data = data / x
		},
		
		this.sub = function(x) {
			return finish = data - x
		},
		
		this.result = function () {
			return finish 
		}
		
}

let calc = new Calculator(10);

console.log(calc.sum(5)); 
console.log(calc.mult (100)); 
console.log(calc.div(10)); 
console.log(calc.sub(40)); 
console.log(calc.result());


