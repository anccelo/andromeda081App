import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[and081BorderCard]'
})
export class BoarderCardDirective {
  private initialColor = '#f5f5f5';
  private defaultColor = '#009688';
  private defaultHeight = 190;

  constructor(private el: ElementRef) { // el é l'elemento selezionato nel DOM
    this.setBorder(this.initialColor);
    // this.setHeight(this.defaultHeight);
  }
  @Input('and081BorderCard')
  borderColor: string;

  @HostListener('mouseenter')
  private onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave')
  private onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string){
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }
  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }
}
