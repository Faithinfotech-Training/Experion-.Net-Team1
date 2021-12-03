import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId: number;
  user: User = new User();

  constructor(private toastrService: ToastrService,
    private router: Router, public userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.bindListUsers();
  }

  
  onSubmit(form: NgForm)
  {
    console.log(form.value);
    let addId = this.userService.formData.UserId;
    console.log("addid", addId)//this.userService.formData.UserId)

    if (addId == 0 || addId == null) {
      //insert
      /*form.setValue({
        UserId:0,
        RoleId:4,
        isActive:1,
        UserName:form.value.UserName,
        UserPassword:form.value.UserPassword,
        UserContact:form.value.UserContact,
        UserEmail:form.value.UserEmail,
      })*/
      console.log(form.value);
      this.insertRecord(form);
    }
    else {
      //update
      console.log("update")
      this.updateRecord(form);
    }

  }

  //reset/clear all content from form  at initialization
  
  resetform(form?:NgForm){
    if (form != null) {
      form.resetForm();

    }

  }


  //insert
  insertRecord(form?:NgForm){
    console.log("inserting a record...");
    this.userService.insertUser(form.value).subscribe
      ((result) => {
        console.log(result);
        this.resetform(form);
        this.toastrService.success('user has been inserted', 'Training');

      }
      );
    //window.alert("Resource record has been inserted");
    //window.location.reload();
  }



  //update
  updateRecord(form?:NgForm)
  {
    console.log("updating a record...");
    this.userService.updateUser(form.value).subscribe
      ((result) => {
        console.log(result);
        this.resetform(form);
        this.toastrService.success(' User has been updated', 'Training appv2021');
        //this.resourceService.bindListPost();
      }
      );

    //window.alert("Resource record has been updated");
    window.location.reload();

}

}
