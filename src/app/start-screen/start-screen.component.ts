import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  newGame() {
    this.router.navigateByUrl('/game');
  }
}
