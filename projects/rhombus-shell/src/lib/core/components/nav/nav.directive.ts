import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: 'mat-list-item[rhActive], a[rhActive][mat-list-item]',
})
/** A directive that can be added to Material list items to apply a selected style. */
export class RhShellSelectedListItemDirective {

    @HostBinding('class.rh-list-item--active')

    @Input('rhActive')
    isActive = true;

    constructor() {}
}
