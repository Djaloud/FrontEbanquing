
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients:any;
  public host:string="http://localhost:8080/api/v1/client";

  constructor(private http: HttpClient) { }
  dtOptions: any = {};
/*
 clients= [
  {"id":1,"nom":"Djaloud","prenom":"Mohamed","email":"mrdjaloud@gmail.com","tele":"0691715786","login":"djadja","password":"123","agence":{"id":1,"nom":"SAfi","adresse":"Safi sidi abdel karim"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},
  {"id":2,"nom":"hafid","prenom":"khribech","email":"hafid@gmail.com","tele":"06754718","login":"hafid","password":"123","agence":{"id":2,"nom":"Marrakech","adresse":"Gueliz marakkech"}},


  ];
*/
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
