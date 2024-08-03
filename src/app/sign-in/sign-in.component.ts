import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
