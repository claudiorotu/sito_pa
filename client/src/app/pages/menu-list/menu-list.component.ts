import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { MenuService } from '../../services/menu.service';
// Import Models
import { Menu } from '../../domain/sito_pa_db/menu';

// START - USED SERVICES
/**
* MenuService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* MenuService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Menu
 * @class MenuListComponent
 */
@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
    list: Menu[];
    search: any = {};
    idSelected: string;
    constructor(
        private menuService: MenuService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.menuService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Menu to remove
     *
     * @param {string} id Id of the Menu to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Menu
     */
    deleteItem() {
        this.menuService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
