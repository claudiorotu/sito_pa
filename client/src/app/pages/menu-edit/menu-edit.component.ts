// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { MenuService } from '../../services/menu.service';
// Import Models
import { Menu } from '../../domain/sito_pa_db/menu';

// START - USED SERVICES
/**
* MenuService.create
*	@description CRUD ACTION create
*
* MenuService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* MenuService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Menu
 */
@Component({
    selector: 'app-menu-edit',
    templateUrl: 'menu-edit.component.html',
    styleUrls: ['menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
    item: Menu;
    model: Menu;
    formValid: Boolean;

    constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Menu();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.menuService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Menu
     *
     * @param {boolean} formValid Form validity check
     * @param Menu item Menu to save
     */
    save(formValid: boolean, item: Menu): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.menuService.update(item).subscribe(data => this.goBack());
            } else {
                this.menuService.create(item).subscribe(data => this.goBack());
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



