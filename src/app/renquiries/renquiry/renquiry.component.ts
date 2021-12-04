import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PagevisitService } from 'src/app/shared/pagevist.service';
import { Renquiry } from 'src/app/shared/renquiry';
import { RenquiryService } from 'src/app/shared/renquiry.service';

@Component({
  selector: 'app-renquiry',
  templateUrl: './renquiry.component.html',
  styleUrls: ['./renquiry.component.css']
})
export class RenquiryComponent implements OnInit {
  REnquiryId:number;
  renquiry:Renquiry = new Renquiry();

  constructor(public renquiryService:RenquiryService,private route:ActivatedRoute,private router:Router,
    private toastrService:ToastrService,public pagevisit:PagevisitService) { }
    
  ngOnInit(): void {
    this.renquiryService.BindCmdQualification();
    this.renquiryService.bindListREnquiry();
    this.UpdatePage();

    this.REnquiryId=this.route.snapshot.params['REnquiryId'];
    this.resetForm();
    /*
    if(this.REnquiryId!=0 || (this.REnquiryId!=null))
   {
    this.renquiryService.getREnquiry(this.REnquiryId).subscribe(
      data=>{console.log(data);
       var datePipe= new DatePipe("en-UK");
     let formatedDate:any=datePipe.transform(data.EnquiryDate,'yyyy-MM-dd');
     data.EnquiryDate=formatedDate
     this.renquiryService.formData=Object.assign({},data);
     },
     error=>console.log(error)
    );
   }*/
  }
  onSubmit(form:NgForm)
  {
    console.log(form.value);
    let addId=this.renquiryService.formData.ResourceEnquiryId;
    //insert
    if(addId==0 || addId==null)
    {
      form.setValue({
        ResourceEnquiryId:0,
        Description:form.value.Description,
        EnquiryDate:form.value.EnquiryDate,
        ResourceId:form.value.ResourceId,
        Email:form.value.Email,
        AdminReply:null,
        AdminReplyDate:null,
        IsActive:1,
        StatusId:1,
        //QualificationId:form.value.QualificationId,
        EnquirerName:form.value.EnquirerName,
        
      })
      this.insertREnquiryRecord(form);
    }/*
    else
    {
      //update
      console.log("Updating record...");
      this.updateREnquiryRecord(form);
      this.toastrService.success('Resource Enquiry record has been updated','CRM');

    }*/
  }
  //clear all contents at initialization
  resetForm(form?:NgForm){
    if(form != null){
      form.resetForm();
    }
  }
  UpdatePage()
{
 this.pagevisit.UpdatePageCount(5);

}
  //defining insert record
  insertREnquiryRecord(form?:NgForm)
  {
    console.log("Inserting a record...");
    this.renquiryService.insertREnquiry(form.value).subscribe( 
      (result)=>{
        console.log(result);
        this.resetForm(form);
        this.toastrService.success("Course Enquiry record has been inserted","CRM");

      }
    );
    window.location.reload();
  }
  /*defining update record
  updateREnquiryRecord(form?:NgForm)
  {
    this.renquiryService.updateREnquiry(form.value).subscribe( 
    (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastrService.success("Resource Enquiry record has been updated","CRM");
      this.renquiryService.bindListREnquiry();
    }
    );
    window.location.reload();
  }*/

  
}
