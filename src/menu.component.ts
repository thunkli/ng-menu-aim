import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
    @Input() data: any[];

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        const url = this.router.url;
        let target: Element;
        if (url !== '/') {
            setTimeout(() => {
                const targetList: any = document.querySelectorAll(".ui-menu .ui-menu-link");
                [].every.call(targetList, (item: any) => {
                    if (item.hash === `#${url}`) {
                        target = item;
                        return false;
                    }
                    return true;
                });
                if (target) {
                    target = target.closest(".ui-menu-item")
                    this._defaultToggle(target)
                }
            }, 0)
        }
    }

    _defaultToggle = (target: any) => {
        this._highlight(target);
    };

    toggle = (e: any) => {
        const target: any = e.target;
        // const currentTarget: any = e.currentTarget;
        const closest = target.closest(".ui-menu-item");
        this._highlight(closest);
    };
    _highlight = (target: Element) => {
        if (target.classList.contains("active")) {
            target.classList.remove("active")
        } else {
            [].forEach.call(document.querySelectorAll(".ui-menu-item"), (item: Element, i) => {
                item.classList.remove("active")
            });

            while (target) {
                target.classList.add("active");
                target = target.closest(".ui-menu-item");
            }
        }
    }
}
