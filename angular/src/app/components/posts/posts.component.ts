import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  public BASE_URL: string = window.location.origin;
  public headers: Headers = new Headers({'content-type': 'application/json'})
  public posts: JSON;
  constructor(public http: Http) { }

  ngOnInit(): void{
		let url: string = `${this.BASE_URL}/api/posts/`;
	 	this.http.get(url, {headers: this.headers}).subscribe((res)=>{
			this.posts = res.json();
		});
  }

  shareIt(post_link){
    // console.log(post_link);
    window.share(post_link);
  }

}