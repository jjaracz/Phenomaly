import { Subject, Observable } from 'rxjs/Rx';
import {Injectable} from "@angular/core";

@Injectable()
export class GlobalService {
	private subject: Subject<any> = new Subject();
	private shared: any = {};

	constructor(){}

	public emit(key: string, val: any): boolean{
		try{
			this.subject.next({
				key: key,
				value: val
			})
			this.shared[key] = val;
			return true;
		}catch(e){
			console.log("Something went wrong in Global Update ...");
			console.log(e);
			return false;
		}
	}

	public get(key: string): any{
		return this.shared[key];
	}

	public set(key: string, val: any): void{
		this.shared[key] = val;
	}

	public on(key:string): Observable<any>{
		return <Subject<any>>this.subject
			.filter((data: any): boolean => {
				return data.key == key;
			}).map((data: any) => {
				return data.value
			})
	}
}