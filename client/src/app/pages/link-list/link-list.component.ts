import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { LinkService } from '../../services/link.service';
// Import Models
import { Link } from '../../domain/sito_pa_db/link';

// START - USED SERVICES
/**
* LinkService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* LinkService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Link
 * @class LinkListComponent
 */
@Component({
    selector: 'app-link-list',
    templateUrl: './link-list.component.html',
    styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
    list: Link[];
    search: any = {};
    idSelected: string;
    constructor(
        private linkService: LinkService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.linkService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Link to remove
     *
     * @param {string} id Id of the Link to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Link
     */
    deleteItem() {
        this.linkService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
