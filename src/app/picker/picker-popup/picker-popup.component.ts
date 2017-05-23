import { Component, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'picker-popup',
	templateUrl: './picker-popup.component.html',
	styleUrls: ['./picker-popup.component.scss']
})
export class PickerPopupComponent {
	private imgSrc: string = "";
	private size: string = "";
	private widthHeight: string = "";
	private name: string = "";
	private type: string = "";

	@ViewChild("image") img: ElementRef;

	private loadImg(){
		this.widthHeight = this.img.nativeElement.naturalWidth + "x" + this.img.nativeElement.naturalHeight, 1000;
	}
	private reset(){
		this.imgSrc = "";
		this.size = "";
		this.widthHeight = "";
		this.name = "";
		this.type = "";
	}

	public setDimmerData(data: any){
		this.reset();
		this.size = data.size;
		this.imgSrc = data.src;
		this.name = data.name;
		this.type = data.type;
	}
	
}
