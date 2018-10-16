import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { PostsService } from '../../services/posts.service';
// Import Models
import { Posts } from '../../domain/sito_pa_db/posts';

// START - USED SERVICES
/**
* PostsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* PostsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Posts
 * @class PostsListComponent
 */
@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
    list: Posts[];
    search: any = {};
    idSelected: string;
    constructor(
        private postsService: PostsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.postsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Posts to remove
     *
     * @param {string} id Id of the Posts to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Posts
     */
    deleteItem() {
        this.postsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
