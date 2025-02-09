import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealsComponent } from "../meals/meals.component";


@Component({
  selector: 'app-mainlayout',
  imports: [RouterOutlet, MealsComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss'
})
export class MainlayoutComponent {

}
