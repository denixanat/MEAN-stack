import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //---> ROUTER INJECTION
  constructor(private router: Router){}

  public get isGato(): boolean{
    return this.router.url == "/gato";
  }
  //--->ROUTER INJECTION
}
