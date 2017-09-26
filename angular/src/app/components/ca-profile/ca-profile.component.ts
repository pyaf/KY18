import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-ca-profile',
  templateUrl: './ca-profile.component.html',
  styleUrls: ['./ca-profile.component.css']
})
export class CaProfileComponent implements OnInit {
  private BASE_URL: string = window.location.origin;
  private headers: Headers = new Headers({'content-type': 'application/json'})
  private user: JSON;
  private ca: JSON;
  constructor(private http: Http) { }

  ngOnInit(): void{
		let url: string = `${this.BASE_URL}/api/ca-profile/`;
	 	this.http.get(url, {headers: this.headers}).subscribe((res)=>{
			this.user = res.json()['user'];
			this.ca = res.json()['ca'];
		});
  }
}
