import { Component } from '@angular/core';
import { QuizzComponent } from "../../quizz/quizz.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizzComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
