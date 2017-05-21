import { GlobalService } from '@shared/services';
import { CounterPopupComponent } from "./counter-popup";
import { Component, Output, EventEmitter, OnInit, AfterViewInit, ComponentFactoryResolver } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
	entryComponents: [CounterPopupComponent]
})
export class CounterComponent implements OnInit, AfterViewInit {

	private open: boolean;
	private comp: boolean = false;

	@Output() plus: EventEmitter<any> = new EventEmitter();
	@Output() minus: EventEmitter<any> = new EventEmitter();

	constructor(
		private glob: GlobalService,
		private cfr: ComponentFactoryResolver
	){}

	private onPlus(){
		this.plus.emit();
		this.checkComp();
		this.glob.emit("dimmer", true);
		this.glob.emit("dimmer/body/comp/invoke", "increment");
	}
	private onMinus(){
		this.minus.emit();
		this.checkComp();
		this.glob.emit("dimmer", true);
		this.glob.emit("dimmer/body/comp/invoke", "decrement");
	}

	private checkComp(){
		if(!this.comp){
			this.glob.emit("dimmer/clear", true)
			this.glob.emit("dimmer/body/comp", this.cfr.resolveComponentFactory(CounterPopupComponent))
			this.setDimm();
		}
	}
	

	private setDimm(){
		this.glob.emit("dimmer/clickable", false);
		this.glob.emit("dimmer/timeout", 550);
	}

	ngOnInit(){
		this.glob.on("dimmer").subscribe((data: boolean) => {
			this.open = data;
		});
		let that = this;
		this.glob.on("dimmer/body/comp").subscribe((data: any) =>that.comp = (data.componentType.name == "CounterPopupComponent"))
	}
	ngAfterViewInit(){
		this.glob.emit("dimmer/clear", true);
		this.glob.emit("dimmer/body/comp", this.cfr.resolveComponentFactory(CounterPopupComponent))
		this.setDimm();
	}
}
