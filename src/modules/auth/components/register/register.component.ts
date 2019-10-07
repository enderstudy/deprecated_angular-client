import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password: string;
  public username: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  submitRegistration() {
    this.authService.register(this.email, this.password, this.username).subscribe(
      data => console.log(data),
      err => console.error(err),
      () => console.log('done')
    );
  }

}
