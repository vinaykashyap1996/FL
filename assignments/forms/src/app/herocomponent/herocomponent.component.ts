import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth.service.service';

@Component({
  selector: 'app-herocomponent',
  templateUrl: './herocomponent.component.html',
  styleUrls: ['./herocomponent.component.css']
})
export class HerocomponentComponent implements OnInit {
  hero:Hero;
  
  constructor(private sunny:Router,private abc:AuthServiceService) { }
  navigateReq(value){
    this.abc.setFormData(value);
    this.sunny.navigate(['register1']);
  }
name;
  
  ngOnInit() {
   ;
    let data = this.abc.getFormData();
    if(data){
      this.hero = {
        FirstName:data.fName,
        LastName:data.lName,
        FatherName:data.fatherName,
        email:data.Email,
        gender:data.gender,
        check:data.check,
        check1:data.check1,
        select:data.select,
        select1:data.select1,
        select2:data.select2,
        select3:data.select3

      }
    }
   
  }
 
resetForm(form? :NgForm){
  if(form != null)
 form.reset();
 this.hero = {
    FirstName:'',
    LastName:'',
    FatherName:'',
    email:'',
    gender:'',
    check:'',
    check1:'',
    select:'',
    select1:'',
    select2:'',
    select3:'',
  }

}
}
