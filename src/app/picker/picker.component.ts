import { PickerPopupComponent } from './picker-popup/picker-popup.component';
import { GlobalService } from '@shared/services';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'file-picker',
	templateUrl: './picker.component.html',
	styleUrls: ['./picker.component.scss'],
	entryComponents: [PickerPopupComponent]
})
export class PickerComponent implements OnInit {

	private filename: string = "";
	private comp: boolean = false;

	constructor(
		private glob: GlobalService,
		private cfr: ComponentFactoryResolver
	) { }

	private fileChanged(e: any) {
		this.filename = e.target.files[0].name;
		let file = e.target.files[0];

		let isImage = file.type.match(/image-*/);
		let reader = new FileReader();

		reader.onload = (e: any) => {
			if (!this.comp) this.setDim();
			let res = {
				size: this.formatSizeUnits(e.total),
				src: isImage ? e.target.result : '',
				name: this.filename,
				type: file.type
			}
			this.glob.emit("dimmer/body/comp/content", res);
			this.glob.emit("dimmer", true);
		}
		reader.readAsDataURL(file);
	}

	private formatSizeUnits(bytes) {
		if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + ' GB'; }
		else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + ' MB'; }
		else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + ' kB'; }
		else if (bytes > 1) { bytes = bytes + ' bajtów'; }
		else if (bytes == 1) { bytes = bytes + ' bajt'; }
		else { bytes = '0 bajtów'; }
		return bytes;
	}

	private setDim() {
		this.glob.emit("dimmer/clear", true);
		this.glob.emit("dimmer/body/comp", this.cfr.resolveComponentFactory(PickerPopupComponent));
		this.glob.emit("dimmer/clickable", true);
		this.glob.emit("dimmer/timeout", 0);
	}

	ngOnInit() {
		this.glob.on("dimmer/body/comp").subscribe((data: any) => this.comp = data.componentType.name == "PickerPopupComponent")
	}
}
