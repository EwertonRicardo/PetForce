import { Component, ViewEncapsulation } from '@angular/core';
import { FuseCardComponent } from "../../../../@fuse/components/card/card.component";
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector     : 'example',
    standalone   : true,
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [FuseCardComponent, MatButtonModule, NgClass, MatIconModule],
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
