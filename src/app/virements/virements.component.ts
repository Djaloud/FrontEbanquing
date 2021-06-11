import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-virements',
  templateUrl: './virements.component.html',
  styleUrls: ['./virements.component.css']
})
export class VirementsComponent implements OnInit {
 public agent:any;
 constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get("http://localhost:8080/api/v1/agent/all")
                                   .subscribe(res=>{
                                     this.agent=res;
                                   },err=>{
                                   console.log(err);
                                   })

  }

}
