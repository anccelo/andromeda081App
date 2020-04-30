import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[ast081BorderCard]'
})
export class BoarderCardDirective {
  private initialColor = '#f5f5f5';
  private defaultColor = '#009688';
  // private defaultHeight = 160;

  constructor(private el: ElementRef) { // el é l'elemento selezionato nel DOM
    this.setBorder(this.initialColor);
    // this.setHeight(this.defaultHeight);
  }
  @Input('ast081BorderCard')
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
    const border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }
}
