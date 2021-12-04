import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cenquiry } from 'src/app/shared/cenquiry';
import { CenquiryService } from 'src/app/shared/cenquiry.service';
import { DatePipe } from '@angular/common';
import { PagevisitService } from 'src/app/shared/pagevist.service';

@Component({
  selector: 'app-cenquiry',
  templateUrl: './cenquiry.component.html',
  styleUrls: ['./cenquiry.component.css']
})
export class CenquiryComponent implements OnInit {

  CEnquiryId: number;
  cenquiry: Cenquiry = new Cenquiry();
<<<<<<< HEAD

  constructor(public pagevisit: PagevisitService, public cenquiryService: CenquiryService, private route: ActivatedRoute,
=======
  CourseId:number;
  constructor(public cenquiryService: CenquiryService, private route: ActivatedRoute, 
>>>>>>> 17bcfe7f40798fd79b9740224f2630364400437c
    private router: Router,
    private toastrService: ToastrService) { }



  ngOnInit(): void {
    this.cenquiryService.BindCmdQualification();
    this.cenquiryService.bindListCEnquiry();
<<<<<<< HEAD
    this.UpdatePage();

=======
    this.CourseId=this.route.snapshot.params['courseId'];
    console.log(this.CourseId);
    this.cenquiryService.formData.CourseId=this.CourseId;
>>>>>>> 17bcfe7f40798fd79b9740224f2630364400437c
    this.CEnquiryId = this.route.snapshot.params['CEnquiryId'];
    this.resetForm();
    

  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.cenquiryService.formData.CourseEnquiryId;
    //insert
    if (addId == 0 || addId == null) {
      //insert
      form.setValue({
        CourseEnquiryId: 0,
        Description: form.value.Description,
        EnquiryDate: form.value.EnquiryDate,
        CourseId: form.value.CourseId,
        Email: form.value.Email,
        AdminReply: null,
        AdminReplyDate: null,
        IsActive: 1,
        StatusId: 1,
        QualificationId: form.value.QualificationId,
        EnquirerName: form.value.EnquirerName,

      })
      this.insertCEnquiryRecord(form);
    }/*
    else {
      //update
      console.log("Updating record...");
      this.updateCEnquiryRecord(form);
      this.toastrService.success('Course Enquiry record has been updated', 'CRM');

    }*/
  }

  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //defining insert record
  insertCEnquiryRecord(form?: NgForm) {
    console.log("Inserting a record...");
    this.cenquiryService.insertCEnquiry(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);

        this.toastrService.success("Course Enquiry record has been inserted", "CRM");

      }
    );
    window.location.reload();
  }

<<<<<<< HEAD
  UpdatePage() {
    this.pagevisit.UpdatePageCount(3);

  }

  /*defining update record
  updateCEnquiryRecord(form?: NgForm) {
    this.cenquiryService.updateCEnquiry(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastrService.success("Course Enquiry record has been updated", "CRM");

       // this.toastrService.success("Course Enquiry record has been updated","CRM");

        this.cenquiryService.bindListCEnquiry();
      }
    );
    window.location.reload();
  }*/
=======
  
>>>>>>> 17bcfe7f40798fd79b9740224f2630364400437c
}

