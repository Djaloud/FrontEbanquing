import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voir-comptes',
  templateUrl: './voir-comptes.component.html',
  styleUrls: ['./voir-comptes.component.css']
})
export class VoirComptesComponent implements OnInit {

  public clients:any;
  public host:string="http://localhost:8080/api/v1/compte";
  constructor(private http: HttpClient) { }
  dtOptions: any = {};

  ngOnInit(): void {
     this.http.get(this.host+"/all")
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
