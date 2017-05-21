import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: './counter-popup',
	templateUrl: './counter-popup.component.html',
	styleUrls: ['./counter-popup.component.scss']
})
export class CounterPopupComponent {
	private counter: number = 0;
	private texts: Array<string> = ["Fizz", "Buzz", "FizzBuzz", ""]

	private getNumber(): number {
		if(this.counter%15 === 0) return 2;
		else if (this.counter%5 === 0) return 1;
		else if (this.counter%3 === 0) return 0;
		return 3;
	}

	private getClass(): string {
		switch (this.getNumber()) {
			case 0:
				return "btn-yellow"
			case 1:
				return "btn-blue"
			case 2:
				return "btn-green"
			default:
				return "btn-white"
		}
	}

	private get text(): string {
		return this.texts[this.getNumber()]
	}
	
	public increment(): void{
		this.counter++;
	}

	public decrement(): void{
		this.counter--;
	}
}
