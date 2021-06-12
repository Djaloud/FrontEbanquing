import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ClientsComponent implements OnInit {
  public clients:any;
  public agent:any;
  public id_de_client:any;
  public solde:any="00";
  public host:string="http://192.168.1.4:999/api/v1/client";
  constructor(private http: HttpClient,private route:Router) { }
  dtOptions: any = {};

  OnDelete(p:any){
  let conf=confirm("Etes vous sure de supprimer "+p.prenom+" ?");
  if(conf){
     this.http.delete(this.host+"/delete/"+p.id)
     .subscribe(res=>{
            this.route.navigateByUrl("/welcome");
             },err=>{
                  console.log(err);
              })
         }

  }

  ngOnInit(): void {
    this.Onaffich();
    this.http.get("http://192.168.1.4:999/api/v1/agent/all")
                                 .subscribe(res=>{
                                   this.agent=res;
                                 },err=>{
                                 console.log(err);
                                 })
  }


  OnSaveCompte(value:any){
    this.http.post("http://192.168.1.4:999/api/v1/compte/add/"+value.id_client+"/"+value.id_agent,value)
                                      .subscribe(res=>{
                                      this.route.navigateByUrl("/voirComptes");
                                      },err=>{
                                      console.log(err);
                                      })
  }

  open(p:any) {
      this.id_de_client=p.id;

    }

  Onaffich():void{

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
