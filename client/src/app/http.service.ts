import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	private _httpClient : HttpClient;

	constructor(httpClient : HttpClient) {
		this._httpClient = httpClient;
	}

	getAll() : Observable<any>{
		return this._httpClient.get('/authors');
	}

	create(authordata : any) : Observable<any>{
		return this._httpClient.post('/authors', authordata);
	}

	getOne(_id) : Observable <any>{
		return this._httpClient.get(`/authors/${_id}`);
	}

	update(_id, authordata : any){
		return this._httpClient.put(`/authors/${_id}`, authordata);
	}

	delete(_id){
		return this._httpClient.delete(`authors/${_id}`)
	}
}
