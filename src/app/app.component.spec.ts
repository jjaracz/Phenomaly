import { PickerPopupComponent } from './picker/picker-popup/picker-popup.component';
import { PickerComponent } from './picker/picker.component';
import { CounterComponent } from './counter/counter.component';
import { CounterPopupComponent } from './counter/counter-popup/counter-popup.component';
import { SuiModule } from 'ng2-semantic-ui';
import { GlobalService } from './shared/services/glob.service';
import { listComponents } from '@shared/components';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				CounterComponent,
				CounterPopupComponent,
				PickerComponent,
				PickerPopupComponent,
				listComponents
			],
			imports: [SuiModule],
			providers: [GlobalService]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

});
