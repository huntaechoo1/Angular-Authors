import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
	public allAuthors : any = [];
	private _httpService : HttpService;
	private _router : Router;

	constructor(httpService : HttpService, router : Router) {
		this._httpService = httpService;
		this._router = router;
	}

	ngOnInit() {
		const AuthorObservable : Observable<any> = this._httpService.getAll();
		AuthorObservable.subscribe(res =>{
			this.allAuthors = res
			console.log(res);
		});
	}

	clickDelete(_id){
		let observable = this._httpService.delete(_id);
		observable.subscribe(()=>{
			console.log('deleted');
			this._router.navigate(['/']);
			this.ngOnInit();
		})
	}

}
