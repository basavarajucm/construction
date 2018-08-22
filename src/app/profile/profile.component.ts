import { Component, OnInit,Inject } from '@angular/core';
import { Http,Response } from '@angular/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_AUTOCOMPLETE_SCROLL_STRATEGY} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router } from '@angular/router';
import {ProfileService} from '../services/profile.service';

declare let navigator:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  options: FormGroup;
  constructor(private http:Http,public dialog: MatDialog,private router:Router,private fb:FormBuilder,private profile:ProfileService) {
   
   }
  public currentUser:string;
  flag:boolean=false;
  flag1:boolean=false;
  name:string;
  userid:number;
  uname;
  email;
  phone;
  password;


  isResponse:boolean=false;
  status:string;
  
  enablename:boolean;
  disablename:boolean=true;

  enableemail:boolean;
  disableemail:boolean=true;

  enablephone:boolean;
  disablephone:boolean=true;

  enablepassword:boolean;
  disablepassword:boolean=true;

  imagePath:string;

  emailFormControl = new FormControl('', [Validators.required,Validators.email,]);
  
  changeName()
  {
    this.enablename =  true;
    this.disablename =  false;
  }
  changeEmail()
  {
    this.enableemail = true;
    this.disableemail = false;
  }
  changePhone()
  {
    this.enablephone = true;
    this.disablephone = false;
  }
 changePassword()
 {
   this.enablepassword=true;
   this.disablepassword=false;
 }
 
  saveChanges(e)
  {
    
        e.preventDefault();
        if(e.target.uname.value){
        this.uname=e.target.uname.value;
        }
        if(e.target.email.value){
        this.email=e.target.email.value;
        }
        if(e.target.phone){
          this.phone=e.target.phone.value;
        }
        if(e.target.password){
          this.password=e.target.password.value;
        }
        
        
      
        console.log(this.uname);
        console.log(this.email);
        console.log(this.phone);
        console.log(this.password);
        this.profile.updateProfile(this.userid,this.uname,this.email,this.phone,this.password)
        .subscribe(data=>{
                  console.log(data);
                  alert(data.status);
        });
      
    

   /* this.http.post("http://localhost/ipskc/file/edit_details",JSON.stringify({id:this.userid,workedAt:this.workedAt,workedAs:this.workedAs,qualification:this.qualifiCation}))
    .map((response:Response)=>response.json())
    .subscribe(
      data => {
             console.log(data);
             

             });
     return Observable.of(JSON.stringify({"status":"Your Profile Details Updated Successfully"}))
      .map((data) => data)
      .subscribe(
        data => {
                 this.status=JSON.parse(data).status;
               
        }); */        

  }
  
  
  ngOnInit() {
    this.currentUser=JSON.parse(localStorage.getItem('Userinfo'));
  // 
    this.name=this.currentUser['name'];
    this.userid=this.currentUser['uid'];
    console.log(this.currentUser['uid']);
    console.log(this.currentUser['name']);

  this.profile.getProfileData(this.userid)
  .subscribe(data=>{
          console.log(data);
          this.name=data.name;
          this.email=data.email;
          this.phone=data.phone;
          this.password=data.password;
    });
   /* this.http.post("http://localhost/ipskc/file/view_profile_picture",JSON.stringify({id:this.userid}))
    .map((response:Response)=>response.json())
    .subscribe(
      data => {
            // console.log(data);
             //this.imagePath=data.imagePath;
           //  this.isResponse=data.status;
            

             });
             return Observable.of(JSON.stringify({"name":"janvi", "email":"janvi@gmail.com","phone":"9964976363"}))
             .map((data) => data)
             .subscribe(
               data => {
                      
              
                this.name=JSON.parse(data).name;
                this.email=JSON.parse(data).email;
                this.phone=JSON.parse(data).phone;
                console.log(this.name);
                console.log(this.email);
                console.log(this.phone);
                 }
         
             );    */     

   
            
   
  }

}
@Component({
  selector: 'app-profileDilog',
  templateUrl:'./profileDilogue.component.html',
  styleUrls: ['./profile.component.css']
  
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

   onNoClick(): void {
   this.dialogRef.close();
  }

}
@Component({
  selector: 'app-profileDilog',
  template:`<mat-dialog-content style="margin: 20px -24px;">Do You Want to the following changes?</mat-dialog-content>
            <mat-dialog-actions>
      <div class="dilog-container">
    <button mat-button (click)="dialogRef.close(false)">No</button>
    <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
    <button mat-button (click)="dialogRef.close(true)">Yes</button>
  </div>
  </mat-dialog-actions>`
  
  
})
export class DilogForSaveChanges
{
  constructor( 
    public dialogRef: MatDialogRef<DilogForSaveChanges>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
    onNoClick(): void {
      this.dialogRef.close();
    }
}
@Component({
  selector: 'app-profileDilog',
  template:` <mat-dialog-content style="font-size:30px; font-weight:bold;margin-bottom: 10px;">Select Image</mat-dialog-content>
             <mat-dialog-content style="font-size: 20px;margin-bottom: 5px" (click)="openGallary()">Open Gallary</mat-dialog-content>
            <mat-dialog-content style="font-size: 20px;" (click)="openCamera()">Take a Picture</mat-dialog-content>`
  
  
})
export class DilogForChangeProfilePicture
{
  constructor( 
    public dialogRef: MatDialogRef<DilogForChangeProfilePicture>,
    @Inject(MAT_DIALOG_DATA) public data: any){}
    onNoClick(): void {
      this.dialogRef.close();
    }
    openCamera()
    {
      console.log("take picture");
      navigator.camera.getPicture(this.onPhotoDataSuccess, this.onFail, { 
      quality: 50, 
      sourceType: navigator.camera.PictureSourceType.CAMERA, 
      destinationType: navigator.camera.DestinationType.DATA_URL, 
      
     }); 
   this.dialogRef.close();
   }  
//base64 encoding the image
   onPhotoDataSuccess(imageData)
   { 
      var photo = document.getElementById('image').setAttribute('src',"data:image/jpeg;base64,"+imageData); 
       console.log("photo"+photo);
   } 
   onFail(message)
   { 
      alert('Failed because:' + message); 
   }   
    
    openGallary()
    {
      navigator.camera.getPicture(this.onGetPictureSuccess, this.onGetPictureFail, { 
        quality: 50, 
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY, 
        destinationType: navigator.camera.DestinationType.DATA_URL, 
    });
     this.dialogRef.close();

   }
//base64 encoding the image
     onGetPictureSuccess(imageData)
     { 
       var photo = document.getElementById('image').setAttribute('src',"data:image/jpeg;base64,"+imageData); 
      } 
    onGetPictureFail(message){ 
          alert('Failed because:' + message); 
       } 

}