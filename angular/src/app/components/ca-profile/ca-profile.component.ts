import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { causerprofile } from '../../models/causerprofile';

@Component({
  selector: 'app-ca-profile',
  templateUrl: './ca-profile.component.html',
  styleUrls: ['./ca-profile.component.css']
})
export class CaProfileComponent implements OnInit {
  public BASE_URL: string = window.location.origin;
  public headers: Headers = new Headers({
        'content-type': 'application/json',
        'X-CSRFToken': this.getCookie('csrftoken')
      })
  public user = new causerprofile(0,'','',0,'','',0, 0, '');
  constructor(public http: Http) { 
  }
  public getCookie(name: string) {
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
  ngOnInit(): void{
    let url: string = `${this.BASE_URL}/api/ca-profile/`;
     this.http.get(url, {headers: this.headers}).subscribe((res)=>{
      this.user = new causerprofile(
                              res.json()['user']['mobile_number'],
                              res.json()['user']['email'],
                              res.json()['user']['full_name'],
                              res.json()['user']['year'],
                              res.json()['user']['college'],
                              res.json()['user']['gender'],
                              res.json()['ca']['whatsapp_number'],
                              res.json()['ca']['pincode'],
                              res.json()['ca']['postal_address'],
                               );
		  });
  }
  // get diagnostic() { return JSON.stringify(this.causer); }
  public button: string = "Update Profile";
  updateuser(event:Event){
    this.button = "Updating .."
    event.preventDefault();
    let url: string = `${this.BASE_URL}/api/updatecauser/`;
     this.http.post(url, this.user, {headers: this.headers}).subscribe((res)=>{
       if(res['status']==200){
         this.button = "Updated";
       }

     });

  }
}
