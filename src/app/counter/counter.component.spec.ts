import { CounterPopupComponent } from './counter-popup/counter-popup.component';
import { SuiModule } from 'ng2-semantic-ui';
import { GlobalService } from '@shared/services';
import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {

	let fixture: ComponentFixture<CounterComponent>;
	let component: CounterComponent;
	let de: DebugElement;
	let glob: GlobalService;
	let plus: any;
	let minus: any;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CounterComponent,
				CounterPopupComponent,
			],
			providers: [GlobalService],
			imports: [SuiModule]
		}).compileComponents();
		fixture = TestBed.createComponent(CounterComponent);
		component = fixture.debugElement.componentInstance;
		de = fixture.debugElement;
		glob = TestBed.get(GlobalService);
		plus = de.query(By.css('.circle-button--plus')).nativeElement;
	}));

	it('should open dimmer on click plus button', async(()=>{
		plus.click();
		expect(glob.get("dimmer")).toEqual(true);
	}));

});
