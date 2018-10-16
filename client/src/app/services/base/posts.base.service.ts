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
 *  FOR CUSTOMIZE postsBaseService PLEASE EDIT ../posts.service.ts
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
import { Posts } from '../../domain/sito_pa_db/posts';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Posts.service.ts
 */

/*
 * SCHEMA DB Posts
 *
	{
		category_id: {
			type: 'Integer'
		},
		post_author: {
			type: 'String'
		},
		post_content: {
			type: 'String'
		},
		post_date: {
			type: 'Date'
		},
		post_image: {
			type: 'String'
		},
		post_status: {
			type: 'Boolean'
		},
		post_title: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class PostsBaseService {

    contextUrl: string = environment.endpoint + '/posts';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * PostsService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Posts): Observable<Posts> {
        return this.http
            .post<Posts>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * PostsService.delete
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
    * PostsService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Posts> {
        return this.http
            .get<Posts>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * PostsService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Posts[]> {
        return this.http
            .get<Posts[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * PostsService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Posts): Observable<Posts> {
        return this.http
            .post<Posts>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}