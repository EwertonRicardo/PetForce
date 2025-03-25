import { Component, ViewEncapsulation } from '@angular/core';
import { FuseCardComponent } from "../../../../@fuse/components/card/card.component";
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'home',
    standalone   : true,
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [FuseCardComponent, MatButtonModule, RouterLink, MatIconModule],
})
export class ExampleComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
