import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class NotebookService {

    private routeStorage: any;

    constructor(
        private http: HttpClient
    ) {}

    public getNotebookList(): Observable<any> {
        return this.http.get(env.api.url('notebooks')).pipe(
            pluck('data')
        );
    }

    public getNotebook(id: string): Observable<any> {
        return this.http.get(env.api.url('notebooks/:id', {id})).pipe(
            pluck('data')
        );
    }

    public saveNotebook(notebook: any): Observable<any> {
        return this.http.post(env.api.url('notebooks'), notebook);
    }

    public getRouteStorage(): any {
        return this.routeStorage;
    }

    public setRouteStorage(notebook: any): void {
        this.routeStorage = notebook;
    }
}
