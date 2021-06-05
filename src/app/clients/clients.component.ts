
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients:any;
  public sze:number=5;
  public Pge:number=0;
  public totalPage

  public host:string="http://localhost:8080";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.host+"/api/v1/client/all?page="+this.Pge+"&size="+this.sze)
    .subscribe(data=>{
      this.clients=data;
    },err=>{
    console.log(err)
    })
  }

}
