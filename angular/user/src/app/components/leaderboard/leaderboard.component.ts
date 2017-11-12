import { Component, OnInit } from '@angular/core';
import { CaDataService } from '../../services/ca-data.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(public caservice: CaDataService) { }
  public userData: JSON;
  ngOnInit(): void {
  	this.caservice.getLeaderBoard()
  	.then((data)=>{
  		console.log(data);
  		this.userData = data.json();
  	})
  }

}
