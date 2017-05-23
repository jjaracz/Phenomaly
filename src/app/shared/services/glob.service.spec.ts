import { async } from '@angular/core/testing';
import { GlobalService } from './glob.service';

describe('Service: GlobalService', ()=>{
	const data = {
		key: "Key",
		val: "Value"
	}
	let service: GlobalService

	beforeEach(()=>{
		service = new GlobalService();
	})

	it('method "on" should listening changes and method "emit" should emmit values', async(()=>{
		service.on(data.key).subscribe((val: any)=>{
			expect(val).toEqual(data.val);
		});
		service.emit(data.key, data.val);
	}))

})