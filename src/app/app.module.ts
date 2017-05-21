import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GlobalService } from '@shared/services';
import { listComponents } from '@shared/components';
import { SuiModule } from "ng2-semantic-ui";

import { AppComponent } from './app.component';
import { CounterComponent, CounterPopupComponent } from './counter';
import { PickerComponent, PickerPopupComponent } from './picker';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		CounterPopupComponent,
		PickerComponent,
		PickerPopupComponent,
		
		listComponents
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,

		SuiModule
	],
	providers: [GlobalService],
	bootstrap: [AppComponent]
})
export class AppModule { }
