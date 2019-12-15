import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'client';
	private _http : HttpService;
	


	constructor(httpService : HttpService){
		this._http = httpService;
	}

	ngOnInit(){
	}

}
