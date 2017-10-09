import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

    @Input() defaultColor: string;

    //@Input() myHighlight: string;    //别名
    @Input('myHighlight') highlightColor: string;
    //@Input() highlightColor: string;


    @HostListener('mouseenter') onMouseEnter() {
        //this.highlight('blue');
        //this.highlight(this.highlightColor || 'red');
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}