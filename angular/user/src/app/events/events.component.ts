import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CaDataService } from '../services/ca-data.service';
import { Team } from '../models/team';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(public http: Http,public caservice: CaDataService) { }
	public PRData: JSON;
  public ky_id: string;
  public team = new Team('' , '' , '' , '', null, null);
  public team_json:JSON;
  public button = "register";
  public newRelation = null;
  public selected_parent_events: JSON;
  public selected_sub_events;
  public selected_number_of_members;
  public allevents:JSON;
  public event_id;
  public event_details;
  public subevents:JSON;
  public parent_events = [];
  public fields = [];
  public minMembers;
  public maxMembers;
  public indReg: boolean = false;
  public teamReg: boolean = false;

  public members;
  public number_of_members;
  public members_kyid=[];
  public p;
  public max_member;
  public previous_reg:JSON;

  public message;

  public BASE_URL: string = window.location.origin;
  public headers: Headers = new Headers({
        'content-type': 'application/json',
        'X-CSRFToken': this.caservice.getCookie('csrftoken')
      })



  ngOnInit(): void {  
     

  	 this.caservice.getAllEvents()
    .then((data) =>{
      // console.log("data:");
      // console.log(data.json());
      this.allevents = data.json();

      for(var i in data.json()){
        console.log(i);
        this.parent_events.push(i);

      }
      console.log(this.parent_events);
    })
    .catch((err) =>{
      //console.log(err);
    })



    this.caservice.getCaData()
    .then((data) =>{
      
      this.ky_id = data.json()['ky_id'];
      this.team.team_leader=this.ky_id;
    })
    .catch((err) =>{
      console.log(err);
    })

  	///console.log(this.selected_parent_events)
  }
    


updateParent() { 
  console.log ("updateParent");
  var pe=this.team.parent_event;
  this.subevents=this.allevents[pe];
  console.log(this.allevents[pe]);
  console.log(this.team.parent_event);

 };

updateSub() { 
  this.message=null;
  var ev = this.team.event;
  console.log ("updateSub:");

  for(var i in this.subevents){

    if(this.subevents[i].eventName == this.team.event){

      this.minMembers = this.subevents[i].minMembers;
      this.maxMembers = this.subevents[i].maxMembers;

      if(this.maxMembers == 1){

        this.indReg = true;
        this.teamReg = false;

      }
      else{

        this.indReg = false; // if in case if was already toggled 

      }
    }
  }

  this.team.team_size = null; // if in case it was set earlier
  // console.log(this.indReg);
  // console.log(this.subevents);
  // console.log(this.minMembers, this.maxMembers);

  this.number_of_members = Array(this.maxMembers - this.minMembers + 1).fill(0).map((x, i)=>i+this.minMembers);
 };

 

 individualRegister(){
   this.members_kyid[0]=this.ky_id;
   let url: string = `${this.BASE_URL}/api/indregister/`;
   this.team.member=this.members_kyid;
   console.log(this.team);
   const headers = new Headers(
        {
            'Content-Type': 'application/json',
            'X-CSRFToken': this.caservice.getCookie('csrftoken')
        });

    this.http.post(url, JSON.stringify(this.team), {headers: headers})        
        .map(this.extractData)
        .catch(this.handleError)
        .subscribe(
        res => {
          console.log(res);
          this.message=res['status'];
        });

 }
  

 teamRegister(event:Event){
   this.members_kyid[this.team.team_size-1]=this.ky_id;
   let url: string = `${this.BASE_URL}/api/teamregister/`;
   this.team.member=this.members_kyid;
   console.log(this.members_kyid);
    const headers = new Headers(
        {
            'Content-Type': 'application/json',
            'X-CSRFToken': this.caservice.getCookie('csrftoken')
        });

    this.http.post(url, JSON.stringify(this.team), {headers: headers})        
        .map(this.extractData)
        .catch(this.handleError)
        .subscribe(
        res => {
          console.log(res);
          this.message=res['status'];
        });
 }

 private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}


 updateMember(){
    if (this.team.team_size == 1){
    this.indReg = true;
    
    }else{
      this.teamReg = true;

    }
     this.members = Array(this.team.team_size-1);
     console.log(this.members);

 }


get diagnostic() { return JSON.stringify(this.team); }


}
