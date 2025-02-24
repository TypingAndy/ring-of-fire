import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent {
  constructor(private router: Router) {}

  newGame() {
    this.router.navigateByUrl('/game');
  }
}
