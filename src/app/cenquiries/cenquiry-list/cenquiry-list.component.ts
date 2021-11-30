import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Cenquiry } from 'src/app/shared/cenquiry';
import { CenquiryService } from 'src/app/shared/cenquiry.service';

@Component({
  selector: 'app-cenquiry-list',
  templateUrl: './cenquiry-list.component.html',
  styleUrls: ['./cenquiry-list.component.css']
})
export class CenquiryListComponent implements OnInit {
  //assign default page
  page: number=1;
  filter: string;
  
    constructor(public cenquiryService:CenquiryService, private router:Router) { }
  
    ngOnInit(): void {
      //get all course enquiry through service
      this.cenquiryService.bindListCEnquiry();
    }
    //populate form by clicking the column fields
    populateForm(cenquiry: Cenquiry)
    {
      console.log(cenquiry);
      //date format
      var datePipe= new DatePipe("en-UK");
      let formatedDate:any=datePipe.transform(cenquiry.EnquiryDate,'yyyy-MM-dd');
      cenquiry.EnquiryDate=formatedDate;
      this.cenquiryService.formData=Object.assign({},cenquiry);
    }
   
      //update course enquiry
      updateCEnquiry(CEnquiryId: number)
    {
      console.log(CEnquiryId);
      this.router.navigate(['cenquiry',CEnquiryId]);
    }
  }
  