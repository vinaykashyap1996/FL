import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Hero } from '../shared/hero.model';

import { AuthServiceService } from '../services/auth.service.service';


@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
    user:Hero;
  constructor(private sun:Router, private xyz:AuthServiceService) { }
   
  navigateReg(value){
    this.xyz.setFormCar(value);
    this.sun.navigate(['Herocomponent']);
    }
   
  name;
  ngOnInit(){
    let data = this.xyz.getFormCar();
    if(data){
      this.user = {
        FirstName:data.fName,
        LastName:data.lName,
        FatherName:data.fatherName,
        email:data.Email,
        gender:data.gender,
        check:data.check,
        check1:data.check1,
        select:data.select,
        PhoneNumber:data.pnumber,
        address:data.address,
        PermanentAddress:data.paddress
      }
    }
    
  }

  
  resetForm(form? :NgForm){
    if(form != null)
   form.reset();
    this.user = {
      FirstName:'',
    LastName:'',
    FatherName:'',
    email:'',
    gender:'',
    check:'',
    check1:'',
    select:'',
     PhoneNumber : null,
      address:'',
      PermanentAddress:''
    }
  
}
}
