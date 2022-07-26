import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from 'app/models/user/Forum';
import { Message } from 'app/models/user/Message';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  httpOptions = {
    headers: new HttpHeaders({
      'CONTENT_TYPE': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }



GetAllForums(){
  return this.httpClient.get('http://localhost:8080/api/forum/allforum',{
    headers:new HttpHeaders()
    .set('Content-Type','application/json') 
    }) ; 
}


GetForumbyId(id : any){
  return this.httpClient.get('http://localhost:8080/api/forum/'+ id,{
    headers:new HttpHeaders()
    .set('Content-Type','application/json') 
    }) ; 
}


GetAllMessages(){
  return this.httpClient.get('http://localhost:8080/api/UserForum/allmessages',{
    headers:new HttpHeaders()
    .set('Content-Type','application/json') 
    }) ; 
}
GetMessagesByForum(id: any){
  return this.httpClient.get('http://localhost:8080/api/UserForum/MessageByForum/'+ id,{
    headers:new HttpHeaders()
    .set('Content-Type','application/json') 
    }) ; 
}

saveourupdate(a:Forum){
  return this.httpClient.post('http://localhost:8080/api/forum/save',a);
}

delete_messages( id : any){
  return this.httpClient.delete('http://localhost:8080/api/UserForum/deletemessage/'+ id);

}

save_message (m : any){
  return this.httpClient.post('http://localhost:8080/api/UserForum/Message',m);
}



  

}