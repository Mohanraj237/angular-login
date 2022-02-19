import { RealtimeDatabaseService } from './services/realtime-database.service';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private service: RealtimeDatabaseService,
  ){

  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
    this.service.getImageDetailList();
  }
}
