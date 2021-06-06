
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients:any;
  public host:string="http://localhost:8080";
  constructor(private http: HttpClient) { }
  dtOptions: any = {};
  //dtOptions: DataTables.Settings = {};

  ngOnInit(): void {

    this.http.get(this.host+"/api/v1/client/all")
    .subscribe(ret=>{

              this.clients = ret;

              setTimeout(()=>{
                $('#datatableexample').DataTable( {
                  pagingType: 'full_numbers',
                  pageLength: 5,
                  processing: true,
                  lengthMenu : [5, 10, 25],
                  order:[[1,"asc"]]
              } );
              }, 1);


          });

  }

}
