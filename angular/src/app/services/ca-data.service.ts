import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaDataService {
	private BASE_URL: string = window.location.origin;
	// private BASE_URL: string = 'http://localhost:8000/';
	private headers: Headers = new Headers({'content-type': 'application/josn'})
  constructor(private http: Http) { }
  
  getCaData(): Promise <any>{
  	let url: string = `${this.BASE_URL}/api/current_user/`;
		return this.http.get(url, {headers: 
									this.headers}).toPromise();
	  }

	getTop5Notices(): Promise <any>{
		let url: string = `${this.BASE_URL}/api/notifications/`;
		return this.http.get(url, {headers: 
									this.headers}).toPromise();
	}

}

