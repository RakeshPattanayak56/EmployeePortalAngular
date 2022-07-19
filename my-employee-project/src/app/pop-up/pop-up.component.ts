import { Component, OnInit } from '@angular/core';
import { PopUpService } from '../pop-up.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private popUpService:PopUpService) { }

  ngOnInit(): void {
  }
  public txtEmail='';
  public txtDate='';
  public NewSendData={
    Email:'',
    Date:'',
  };
  public AddNewData(){
    this.NewSendData={
      Email:this.txtEmail,
      Date:this.txtDate,
    };
    this.update(this.NewSendData);
  }
  update(NewSendData:any){
    this.popUpService.update(NewSendData).subscribe(
      () => {              
        this.txtEmail=''
        this.txtDate='';
        alert("update Succefully");  
      }
    );
  }

}
