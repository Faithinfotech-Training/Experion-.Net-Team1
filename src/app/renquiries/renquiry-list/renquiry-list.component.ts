import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Renquiry } from 'src/app/shared/renquiry';
import { RenquiryService } from 'src/app/shared/renquiry.service';

@Component({
  selector: 'app-renquiry-list',
  templateUrl: './renquiry-list.component.html',
  styleUrls: ['./renquiry-list.component.css']
})
export class RenquiryListComponent implements OnInit {
  //assign default page
  page: number=1;
  filter: string;
  
    constructor(public renquiryService:RenquiryService,private router:Router) { }
  
    ngOnInit(): void {
      this.renquiryService.bindListREnquiry();
    }
    //populate form by clicking the column fields
    populateForm(renquiry: Renquiry)
    {
      console.log(renquiry);
      //date format
      var datePipe= new DatePipe("en-UK");
      let formatedDate:any=datePipe.transform(renquiry.EnquiryDate,'yyyy-MM-dd');
      renquiry.EnquiryDate=formatedDate;
      this.renquiryService.formData=Object.assign({},renquiry);
    }
   
      //update resource enquiry
      updateREnquiry(REnquiryId: number)
    {
      console.log(REnquiryId);
      this.router.navigate(['renquiry',REnquiryId]);
    }
  }
  
