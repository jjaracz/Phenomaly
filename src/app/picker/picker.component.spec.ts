import { SuiModule } from 'ng2-semantic-ui';
import { GlobalService } from '@shared/services';
import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { DebugElement } from '@angular/core';

import { PickerComponent } from './picker.component';
import { PickerPopupComponent } from './picker-popup';

describe('PickerComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				PickerComponent,
				PickerPopupComponent,
			],
			providers: [GlobalService],
			imports: [SuiModule]
		}).compileComponents();
	}));

});
