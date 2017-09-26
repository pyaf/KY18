import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PR } from '../models/PR';

@Injectable()
export class CaDataService {
	private BASE_URL: string = window.location.origin;
	// private BASE_URL: string = 'http://localhost:8000/';
  public headers: Headers = new Headers({
        'content-type': 'application/json',
        'X-CSRFToken': this.getCookie('csrftoken')
      })  

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

	getPRs(): Promise <any>{
		let url: string = `${this.BASE_URL}/api/public-relations/`;
		return this.http.get(url, {headers: 
									this.headers}).toPromise();
	}
  createNewPR(PR: PR): Promise <any>{
    let url: string = `${this.BASE_URL}/api/public-relations/`;
    return this.http.post(url, PR, {headers: 
                  this.headers}).toPromise();
  }
	getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }

}

