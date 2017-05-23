import {
	Component, OnInit, ViewContainerRef, ViewChild,
	ElementRef, Inject, ComponentRef, AfterViewInit, Input
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { GlobalService } from "@shared/services";

@Component({
	selector: 'dimmer',
	templateUrl: './dimmer.component.html',
	styleUrls: ['./dimmer.component.scss']
})
export class DimmerComponent implements OnInit {
	@ViewChild('dimmer', { read: ViewContainerRef }) dimmer: ViewContainerRef;

	private isDimmedVal: boolean = false;

	private dimmerBodyString: string = "";
	private dimmerRefContent: ComponentRef<any>;

	private timeoutFunc: any;

	@Input() clickable: boolean = false;
	@Input() timeout: number = 550;

	constructor(
		private glob: GlobalService,
		private _el: ElementRef
	) { }

	private setComponentData(data: any) {
		this.dimmerRefContent.instance.setDimmerData(data);
		this.dimmerRefContent.changeDetectorRef.detectChanges();
	}

	private invokeMethod(data: string) {
		this.dimmerRefContent.instance[data]();
		this.dimmerRefContent.changeDetectorRef.detectChanges();
	}

	private set dim(val: boolean) {
		if(this.timeout == 0){
			this.isDimmed = val;
			return
		}
		if (val && this.isDimmed) {
			clearTimeout(this.timeoutFunc);
		}
		if (val) {
			this.timeoutFunc = setTimeout(() => {
				this.isDimmed = false;
			}, this.timeout)
		} else {
			clearTimeout(this.timeoutFunc);
		}
		this.isDimmed = val
	}

	private set isDimmed(val: boolean){
		this.isDimmedVal = val;
		if(!val) this.glob.emit("dimmer/close", val);
	}

	private get isDimmed(): boolean{
		return this.isDimmedVal;
	}

	private clearDim(){
		this.dimmerBodyString = '';
		this.dimmer.clear();
	}

	public getIsDimmed(): boolean{
		return this.isDimmed
	}
	public getBodyString(): string{
		return this.dimmerBodyString
	}


	set dimmerBody(factory: any) {
		//this.componentFactoryResolver.resolveComponentFactory(ProjectComponent)
		this.dimmerRefContent = this.dimmer.createComponent(factory);
		this.dimmerRefContent.changeDetectorRef.detectChanges();
	}

	ngOnInit() {
		this.glob.set("dimmer", this.isDimmed);
		this.glob.set("dimmer/body", this.dimmerBodyString);
		this.glob.on("dimmer").subscribe((data: boolean) => this.dim = data);
		this.glob.on("dimmer/clear").subscribe(() => this.clearDim())
		this.glob.on("dimmer/timeout").subscribe((data: number) => this.timeout = data);
		this.glob.on("dimmer/clickable").subscribe((data: boolean) => this.clickable = data);
		this.glob.on("dimmer/body").subscribe((data: string) => this.dimmerBodyString = data);
		this.glob.on("dimmer/body/comp").subscribe((data: any) => this.dimmerBody = data, console.log);
		this.glob.on("dimmer/body/comp/content").subscribe((data: any) => this.setComponentData(data));
		this.glob.on("dimmer/body/comp/invoke").subscribe((data: string) => this.invokeMethod(data));
	}
}
