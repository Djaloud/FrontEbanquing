import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-voir-comptes',
  templateUrl: './voir-comptes.component.html',
  styleUrls: ['./voir-comptes.component.css']
})
export class VoirComptesComponent implements OnInit {

  public clients:any;
  public agent:any;
  public rib:any;
  public name:any;
  public host:string="http://192.168.1.4:999/api/v1/compte";
  constructor(private http: HttpClient,private route:Router) { }
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
      this.OnAgent();
  }
  open(p:any) {
        this.rib=p.id;
         this.name=p.nom;
      }
  OnVirement(p:any){
     this.http.put("http://192.168.1.4:999/api/v1/compte/update/"+p.rib+"/"+p.montant,p)
                                      .subscribe(res=>{
                                      this.route.navigateByUrl("/voirComptes");
                                      },err=>{
                                      console.log(err);
                                      })

  }

  OnAgent(): void {
      this.http.get("http://192.168.1.4:999/api/v1/agent/all")
                                   .subscribe(res=>{
                                     this.agent=res;
                                   },err=>{
                                   console.log(err);
                                   })
    }

    OnBlock(p:any){
      console.log(p);
    }

}
