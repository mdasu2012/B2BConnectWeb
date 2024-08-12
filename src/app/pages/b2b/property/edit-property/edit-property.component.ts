import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {
  url:any;
  bsValue = new Date();
  bsValue1= new Date();
  selectedId:any;  
  selectedType:any;
  showView:boolean;
  headerName:any;
  editPropertyForm: UntypedFormGroup;
  bsConfiguration: Partial<BsDatepickerConfig>;
  propertydata:any={propertyName:'adas',companyName:'sdsdf',status:'sdf',address:{
    state:'AP',directions:'',village:'',district:''},mobile:'9283476926',extensionDate:new Date(),reraNumber:'3243',guidelineValue:'wef',
    startDate:new Date(),propertyType:'PLOT',totalPlots:'1',poc:'',amenities:'sd',propertyDescription:'sdfkjhsd',propertyMap:''
  }
  constructor(private activateRouter:ActivatedRoute,private router: Router, private fb: UntypedFormBuilder, private propertyService:PropertyService) {
    this.selectedId = this.activateRouter.snapshot.paramMap.get('id');
    this.selectedType = this.activateRouter.snapshot.paramMap.get('type');    
  }

  ngOnInit(): void {
    if(this.selectedType === 'edit'){
      this.headerName= 'Update';
      this.showView = false;
    } else {
      this.headerName= 'View';
      this.showView = true;
    }
    this.editPropertyForm = this.fb.group({
      propertyName: [this.propertydata.propertyName, Validators.required],
      companyName: [this.propertydata.companyName, Validators.required],
      reraNumber: [this.propertydata.reraNumber, Validators.required],

      guidelineValue: [this.propertydata.guidelineValue, Validators.required],

      propertyType: [this.propertydata.propertyType, Validators.required],
      totalPlots: [this.propertydata.totalPlots, Validators.required],

      poc: [this.propertydata.poc, Validators.required],
      mobile: [this.propertydata.mobile, Validators.required],

      amenities: [this.propertydata.amenities, Validators.required],
      startDate: [this.propertydata.startDate, Validators.required],

      extensionDate: [this.propertydata.extensionDate, Validators.required],
      propertyDescription: [this.propertydata.propertyDescription],
      status: [this.propertydata.status, Validators.required],
      propertyMap: [this.propertydata.propertyMap],

      address: this.fb.group({
        directions: [this.propertydata.address.directions, Validators.required],
        village: [this.propertydata.address.village, Validators.required],
        district: [this.propertydata.address.district, Validators.required],
        state: [this.propertydata.address.state, Validators.required],
      })

    });
    this.bsConfiguration = {
      dateInputFormat: 'YYYY-MM-DD',
      containerClass: 'theme-red',
      isAnimated: true,
    };
    this.editPropertyForm.markAllAsTouched();
    this.editPropertyForm.updateValueAndValidity();
  }

  updateProperty(){
    this.propertyService.createProperty(this.editPropertyForm.value).subscribe((data: any) =>{

      this.router.navigateByUrl("/admin/properties");
    }, (error: any) =>{

    })
  }

  gotoBack(){
    this.router.navigateByUrl('/admin/properties');
  }
  get f(): { [key: string]: AbstractControl } {
    return this.editPropertyForm.controls;
  }
  get g(): { [key: string]: AbstractControl } {
  let c= this.editPropertyForm.controls.address as FormGroup
    return c.controls;
  }
}