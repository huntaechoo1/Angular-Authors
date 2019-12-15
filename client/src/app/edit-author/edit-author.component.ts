import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-edit-author',
	templateUrl: './edit-author.component.html',
	styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

	private _httpService : HttpService;
	private _route : ActivatedRoute;
	private _router : Router;
	public error2s : any = {};
	public oneAuthor : any = {};

	constructor(httpService: HttpService, router : Router, route : ActivatedRoute) {
		this._httpService = httpService;
		this._route = route;
    	this._router = router;
	}

	ngOnInit() {
		this._route.params.subscribe((params : Params) =>{
			console.log(params['_id']);
			const authorObservable : Observable<any> = this._httpService.getOne(params['_id']);
			authorObservable.subscribe( res =>{
				this.oneAuthor = res;
			})
		})
	}

	updateAuthor(_id){
		let observable = this._httpService.update(_id, this.oneAuthor);
		observable.subscribe( res => {
			console.log(res)
			if(res['errors']){
				this.error2s = res['errors'];
			}
			else{
				this._router.navigate(['/']);
			}
		});
	}

}
