import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cenquiry } from 'src/app/shared/cenquiry';
import { CenquiryService } from 'src/app/shared/cenquiry.service';

@Component({
  selector: 'app-cenquiry-edit',
  templateUrl: './cenquiry-edit.component.html',
  styleUrls: ['./cenquiry-edit.component.css']
})
export class CenquiryEditComponent implements OnInit {
  CEnquiryId: number;
  cenquiry: Cenquiry = new Cenquiry();


  constructor(public cenquiryService: CenquiryService, private route: ActivatedRoute, 
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.cenquiryService.BindCmdStatus();
    this.cenquiryService.BindCmdQualification();
    this.cenquiryService.bindListCEnquiry();

    this.CEnquiryId = this.route.snapshot.params['CEnquiryId'];
    //this.resetForm();
    if (this.CEnquiryId != 0 || this.CEnquiryId != null) {

      this.cenquiryService.getCEnquiry(this.CEnquiryId).subscribe(
        (data:any): void => {
          console.log(data);
          var datePipe = new DatePipe("en-UK");
          let formatedDate: any = datePipe.transform(data.EnquiryDate, 'yyyy-MM-dd');
          data.EnquiryDate = formatedDate
          this.cenquiryService.formData = Object.assign({}, data);
        },
        error => console.log(error)
      );
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    //update
    console.log("Updating record...");
    this.updateCEnquiryRecord(form);
    //this.toastrService.success('Course Enquiry record has been updated', 'CRM');
  }

  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //defining update record
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
  }

}
