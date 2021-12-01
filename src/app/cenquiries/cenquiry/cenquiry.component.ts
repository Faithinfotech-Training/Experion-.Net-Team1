import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cenquiry } from 'src/app/shared/cenquiry';
import {CenquiryService} from 'src/app/shared/cenquiry.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cenquiry',
  templateUrl: './cenquiry.component.html',
  styleUrls: ['./cenquiry.component.css']
})
export class CenquiryComponent implements OnInit {

  constructor(public cenquiryService:CenquiryService,private route:ActivatedRoute,private router:Router,
    private toastrService:ToastrService) { }
    CEnquiryId:number;
    cenquiry:Cenquiry = new Cenquiry();
  ngOnInit(): void {
    this.CEnquiryId=this.route.snapshot.params['CEnquiryId'];
   
   this.cenquiryService.bindListCEnquiry();
   if(this.CEnquiryId!=0 || (this.CEnquiryId!=null))
   {

    this.cenquiryService.getCEnquiry(this.CEnquiryId).subscribe(
      data=>{console.log(data);
       var datePipe= new DatePipe("en-UK");
     let formatedDate:any=datePipe.transform(data.EnquiryDate,'yyyy-MM-dd');
     data.EnquiryDate=formatedDate
     this.cenquiryService.formData=Object.assign({},data);
     },
     error=>console.log(error)
    );
   }
   
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    let addId=this.cenquiryService.formData.CourseEnquiryId;
    //insert
    if(addId==0 || addId==null)
    {
      this.insertCEnquiryRecord(form);
    }
    else
    {
      //update
      console.log("Updating record...");
      this.updateCEnquiryRecord(form);
      this.toastrService.success('Course Enquiry record has been updated','CRM');

    }
  }

    //clear all contents at initialization
    resetForm(form?:NgForm){
      if(form != null){
        form.resetForm();
      }
    }

    //defining insert record
    insertCEnquiryRecord(form?:NgForm)
    {
      console.log("Inserting a record...");
      this.cenquiryService.insertCEnquiry(form.value).subscribe( 
        (result)=>{
          console.log(result);
          this.resetForm(form);
          this.toastrService.success("Course Enquiry record has been inserted","CRM");

        }
      );
      window.location.reload();
    }

    //defining update record
    updateCEnquiryRecord(form?:NgForm)
    {
      this.cenquiryService.updateCEnquiry(form.value).subscribe( 
      (result)=>{
        console.log(result);
        this.resetForm(form);
       // this.toastrService.success("Course Enquiry record has been updated","CRM");
        this.cenquiryService.bindListCEnquiry();
      }
      );
      window.location.reload();
    }
}

