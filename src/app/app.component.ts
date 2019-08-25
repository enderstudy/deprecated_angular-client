import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public showNav: boolean;

  constructor(private router: Router) {
    this.showNav = true;
    
    router.events.subscribe(
        () => this.showNav = router.url !== '/'
    );
  }
}
