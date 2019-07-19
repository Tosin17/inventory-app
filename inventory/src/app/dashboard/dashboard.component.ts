import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { ImageService } from '../services/image.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('doughnutChart') doughnut: any;

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

  private doughnutData = {
    labels: [
      "Red",
      "Green",
      "Yellow"
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
    }]
  }

  private dOptions = {
    ...this.options,
    elements: {
      center: {
        text: '90%',
        color: '#FF6384', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 20 // Defualt is 20 (as a percentage)
      }
    }
  }

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




  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.startPoller()
      .subscribe(data => console.log(data));
  }

  onRand() {
    this.imageService.logRandom();
  }

  ngAfterViewInit(): void {
    // console.log(this.doughnut.chart)
    (<any>window).Chart.pluginService.register({
      beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
          //Get ctx from string
          const ctx = chart.chart.ctx;

          //Get options from the center object in options
          const centerConfig = chart.config.options.elements.center;
          const fontStyle = centerConfig.fontStyle || 'Arial';
          const txt = centerConfig.text;
          const color = centerConfig.color || '#000';
          const sidePadding = centerConfig.sidePadding || 20;
          const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
          //Start with a base font of 30px
          ctx.font = "4rem " + fontStyle;
          //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          const stringWidth = ctx.measureText(txt).width;
          const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
          // Find out how much the font can grow in width.
          const widthRatio = elementWidth / stringWidth;
          const newFontSize = Math.floor(30 * widthRatio);
          const elementHeight = (chart.innerRadius * 2);

          // Pick a new font size so it will not be larger than the height of label.
          const fontSizeToUse = Math.min(newFontSize, elementHeight);

          //Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = fontSizeToUse + "px " + fontStyle;
          ctx.fillStyle = color;

          //Draw text in center
          ctx.fillText(txt, centerX, centerY);
        }
      }
    });
  }

}
