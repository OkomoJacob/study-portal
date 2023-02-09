import { HomeServiceService } from '../services/home-service.service';
import { Component, OnInit } from '@angular/core';
import { Name } from '../home'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myName: Name = {
    name: 'Jacob'
  }
  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
  }

}
