import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public clients:any;
  public agence:any;
  public host:string="http://localhost:8080/api/v1/client";
   constructor(private http: HttpClient) { }

  ngOnInit() {
   this.http.get("http://localhost:8080/api/v1/agence/all")
                           .subscribe(res=>{
                             this.agence=res;
                           },err=>{
                           console.log(err);
                           })

  }
   onAjouterClient(value:any){
               this.http.post(this.host+"/add/"+value.id_agences,value)
                                  .subscribe(res=>{
                                  console.log(res);
                                  },err=>{
                                  console.log(err);
                                  })

  }

}
