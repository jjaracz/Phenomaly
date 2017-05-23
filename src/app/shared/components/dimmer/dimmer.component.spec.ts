import { SuiModule } from 'ng2-semantic-ui';
import { GlobalService } from '@shared/services';
import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';

import { DimmerComponent } from './dimmer.component';

describe('DimmerComponent', () => {

	let fixture: ComponentFixture<DimmerComponent>;
	let component: DimmerComponent;
	let glob: GlobalService;
	let de: any;


	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				DimmerComponent,
			],
			providers: [GlobalService],
			imports: [SuiModule]
		}).compileComponents();
		fixture = TestBed.createComponent(DimmerComponent);
		component = fixture.debugElement.componentInstance;
		fixture.detectChanges();
		de = fixture.debugElement.nativeElement;
		glob = TestBed.get(GlobalService);
	}));

	it("should run dimmer", async(() => {
		glob.emit("dimmer", true);
		expect(component.getIsDimmed()).toEqual(true);
	}));

	it("should change the dimmer body string", async(()=>{
		glob.emit("dimmer/body", "some string");
		expect(component.getBodyString()).toEqual("some string");
	}));

	it("should set to true if dimmer is clickable", async(()=>{
		glob.emit("dimmer/clickable", true)
		fixture.detectChanges();
		de.querySelector("sui-dimmer").click();
		expect(component.clickable && !component.getIsDimmed()).toEqual(true);
	}))

});
