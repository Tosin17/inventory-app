import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private type: string = 'line';
  private data: object = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Initial dataset",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  private options: object = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor() { }

  ngOnInit() {
  }

}
