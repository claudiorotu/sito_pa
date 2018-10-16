// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { LinkService } from '../../services/link.service';
// Import Models
import { Link } from '../../domain/sito_pa_db/link';

// START - USED SERVICES
/**
* LinkService.create
*	@description CRUD ACTION create
*
* LinkService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* LinkService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Link
 */
@Component({
    selector: 'app-link-edit',
    templateUrl: 'link-edit.component.html',
    styleUrls: ['link-edit.component.css']
})
export class LinkEditComponent implements OnInit {
    item: Link;
    model: Link;
    formValid: Boolean;

    constructor(
    private linkService: LinkService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Link();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.linkService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Link
     *
     * @param {boolean} formValid Form validity check
     * @param Link item Link to save
     */
    save(formValid: boolean, item: Link): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.linkService.update(item).subscribe(data => this.goBack());
            } else {
                this.linkService.create(item).subscribe(data => this.goBack());
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



