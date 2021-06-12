import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public clients:any;
  public agence:any;
  public host:string="http://192.168.1.4:999/api/v1/client";
   constructor(private http: HttpClient,private route:Router) { }

  ngOnInit() {
   this.http.get("http://192.168.1.4:999/api/v1/agence/all")
                           .subscribe(res=>{
                             this.agence=res;
                           },err=>{
                           console.log(err);
                           })

  }
   onAjouterClient(value:any){
             this.http.post(this.host+"/add/"+value.id_agences,value)
                                  .subscribe(res=>{
                                  this.route.navigateByUrl("/clients");
                                  },err=>{
                                  console.log(err);
                                  })


  }

}
