import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private type: string = 'line';
  private data: object = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#36a2eb',
        pointBackgroundColor: "#000000"
      }
    ]
  };
  private options: object = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0 // disables bezier curves
      }
    },
    legend: {
      display: false
    },
  };

  private lineOptions = {
    ...this.options,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  };

  private barOptions = {
    ...this.options,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
        },
      }]
    }
  };
  private barData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: "",
        data: [65, 59, 80, 81, 56, 55, 40, 35, 76, 23, 88, 47],
        backgroundColor: '#36a2eb',
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
