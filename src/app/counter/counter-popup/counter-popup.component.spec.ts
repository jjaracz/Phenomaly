import { CounterPopupComponent } from './counter-popup.component';
import { SuiModule } from 'ng2-semantic-ui';
import { GlobalService } from '@shared/services';
import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';

describe('CounterPopupComponent', () => {

	let fixture: ComponentFixture<CounterPopupComponent>;
	let component: CounterPopupComponent;
	let div: any;
	let de: any;


	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CounterPopupComponent,
			],
			providers: [GlobalService],
			imports: [SuiModule]
		}).compileComponents();
		fixture = TestBed.createComponent(CounterPopupComponent);
		component = fixture.debugElement.componentInstance;
		fixture.detectChanges();
		de = fixture.debugElement.nativeElement;
		div = de.querySelector(".header");
	}));

	it('should increment counter in component', async(()=>{
		component.increment();
		expect(component.getCounter()).toEqual(1);
	}));

	it('should decrement counter in component', async(()=>{
		component.decrement();
		expect(component.getCounter()).toEqual(-1);
	}));

	it('method should return text "Fizz" when counter is devided by 3', async(()=>{
		component.setCounter(3);
		expect(component.text).toEqual("Fizz");
	}));

	it('method should return text "Buzz" when counter is devided by 5', async(()=>{
		component.setCounter(5);
		expect(component.text).toEqual("Buzz");
	}));

	it('method should return text "FizzBuzz" when counter is devided by 3 and 5', async(()=>{
		component.setCounter(15);
		expect(component.text).toEqual("FizzBuzz");
	}));

	it('text shoud have color yellow when counter is devidev by 3', fakeAsync(()=>{
		component.setCounter(3);
		fixture.detectChanges();
		expect(div.className.indexOf("btn-yellow") !== -1).toEqual(true);
	}));

	it('text shoud have color blue when counter is devidev by 5', fakeAsync(()=>{
		component.setCounter(5);
		fixture.detectChanges();
		expect(div.className.indexOf("btn-blue") !== -1).toEqual(true);
	}));

	it('text shoud have color green when counter is devidev by 3 and 5', fakeAsync(()=>{
		component.setCounter(15);
		fixture.detectChanges();
		expect(div.className.indexOf("btn-green") !== -1).toEqual(true);
	}));

});
