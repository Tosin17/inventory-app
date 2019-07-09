import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private imageService: ImageService) { }

  ngOnInit() {
    this.auth.autoLoginMaybe();
    this.imageService.getLineData()
      .subscribe(data => {
        console.log(data);
      })
  }
}
