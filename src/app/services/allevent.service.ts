import { Injectable, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class AlleventService{
    public eventbus: EventEmitter<any> = new EventEmitter<any>();
    constructor ( private http:HttpClient ){}
}
