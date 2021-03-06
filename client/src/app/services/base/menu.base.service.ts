/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE menuBaseService PLEASE EDIT ../menu.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Menu } from '../../domain/sito_pa_db/menu';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Menu.service.ts
 */

/*
 * SCHEMA DB Menu
 *
	{
		menu_data: {
			type: 'Date'
		},
		menu_link: {
			type: 'String'
		},
		menu_ordine: {
			type: 'Number'
		},
		menu_padre: {
			type: 'Number'
		},
		menu_voce: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class MenuBaseService {

    contextUrl: string = environment.endpoint + '/menus';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * MenuService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Menu): Observable<Menu> {
        return this.http
            .post<Menu>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * MenuService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * MenuService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Menu> {
        return this.http
            .get<Menu>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * MenuService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Menu[]> {
        return this.http
            .get<Menu[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * MenuService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Menu): Observable<Menu> {
        return this.http
            .post<Menu>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
