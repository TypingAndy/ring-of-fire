import { Component, OnInit } from '@angular/core';
import { _MatInternalFormField } from '@angular/material/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss',
})
export class AddPlayerComponent implements OnInit {
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  onNoClick() {}
}
