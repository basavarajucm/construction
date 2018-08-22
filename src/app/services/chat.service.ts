import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';



@Injectable()
export class ChatService {

  url:string="http://adkambs.com/ConstructionApp/ConstructionApp/Welcome/getChatDetails";
  constructor(private http:Http) { }
  
  getChatDetails(id:number)
  {
    //console.log(id);
    
    
    return this.http.post(this.url,JSON.stringify({id:id}))
    .map((response:Response)=>response.json());
	  
  }



  saveChatDetails(FormData:FormData)
  {
  
    return this.http.post("http://adkambs.com/ConstructionApp/ConstructionApp/Welcome/saveChatDetails",FormData)
    .map((response:Response)=>response.json());   

  }


  

  
  
}
