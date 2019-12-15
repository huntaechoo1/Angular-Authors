import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

	private _httpService : HttpService;
	private _router : Router;
	public newAuthor : any = {};
	public errors : any = {};

	constructor(_httpService: HttpService, router : Router) {
		this._httpService = _httpService;
    	this._router = router;
	}

	ngOnInit() {
		console.log(this.newAuthor);
	}


	createAuthor(){
		console.log(this.newAuthor);
		let AuthorObservable : Observable<any> = this._httpService.create(this.newAuthor);
		AuthorObservable.subscribe( res=> {
			if(res.errors){
				console.log(res.errors);
				this.errors = res.errors;
			}
			else{
				this._router.navigate(['/']);
			}
		})
	}

}
