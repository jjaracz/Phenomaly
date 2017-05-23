import { SuiModule } from 'ng2-semantic-ui';
import { GlobalService } from '@shared/services';
import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';

import { PickerPopupComponent } from './picker-popup.component';

describe('PickerPopupComponent', () => {

	let fixture: ComponentFixture<PickerPopupComponent>;
	let component: PickerPopupComponent;
	let de: any;
	let glob: GlobalService;
	let file: any;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				PickerPopupComponent,
			],
			providers: [GlobalService],
			imports: [SuiModule]
		}).compileComponents();
		fixture = TestBed.createComponent(PickerPopupComponent);
		component = fixture.debugElement.componentInstance;
		fixture.detectChanges();
		de = fixture.debugElement.nativeElement;
		glob = TestBed.get(GlobalService);
		const prop = {
			size: "2 GB",
			src: "",
			name: "example.png",
			type: "image/png"
		}
		component.setDimmerData(prop);
		fixture.detectChanges();
	}));

	it('should be set "size" property', fakeAsync(()=>{
		expect(de.querySelector('.spec-list--size').textContent).toContain("2 GB")
	}));

	it('should be set "name" property', fakeAsync(()=>{
		expect(de.querySelector('.spec-list--name').textContent).toContain("example.png")
	}));

	it('should be set "type" property', fakeAsync(()=>{
		expect(de.querySelector('.spec-list--type').textContent).toContain("image/png")
	}));

});
