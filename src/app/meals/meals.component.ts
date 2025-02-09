import { Component, OnInit } from '@angular/core';
import { MealsService } from '../server/meals.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent implements OnInit {
  constructor( private mealsService:MealsService , private activatedRoute:ActivatedRoute){}
  catogrey:any;
  meal:any;
  ngOnInit(): void {
    if(typeof document !=undefined){
      this.mealsService.getcatergory().subscribe({
        next:(res)=>{
          this.catogrey=res.meals
         console.log(res.meals);

        }
      })
      this.activatedRoute.paramMap.subscribe({
        next:(res)=>{
          // this.meal=res.meals
         console.log(res.get("categoryname"));
         const categoryname =res.get("categoryname");
         if(categoryname){
          this.mealsService.getallcategorey(categoryname).subscribe({
            next:(res)=>{
              this.meal=res.meals
             console.log(res.meals);

            }
          })
         }

        }
      })
    }

  }

}
