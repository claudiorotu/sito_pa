// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { PostsService } from '../../services/posts.service';
// Import Models
import { Posts } from '../../domain/sito_pa_db/posts';

// START - USED SERVICES
/**
* PostsService.create
*	@description CRUD ACTION create
*
* PostsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* PostsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Posts
 */
@Component({
    selector: 'app-posts-edit',
    templateUrl: 'posts-edit.component.html',
    styleUrls: ['posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {
    item: Posts;
    model: Posts;
    formValid: Boolean;

    constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Posts();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.postsService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Posts
     *
     * @param {boolean} formValid Form validity check
     * @param Posts item Posts to save
     */
    save(formValid: boolean, item: Posts): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.postsService.update(item).subscribe(data => this.goBack());
            } else {
                this.postsService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



