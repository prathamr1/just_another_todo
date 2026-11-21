import { Directive, input, effect, ElementRef,inject} from '@angular/core';

@Directive({
  selector: '[appHighlightcompleted]',
})
export class Highlightcompleted {
  isCompleted = input(false);
  el = inject(ElementRef);
  constructor(){}

  styleeffect = effect(() => {
    if (this.isCompleted()){
      this.el.nativeElement.style.backgroundColor = '#C1E1C1';
      this.el.nativeElement.style.color = '000';
      this.el.nativeElement.style.textDecoration = 'line-through'
    }
    else{
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '000';
      this.el.nativeElement.style.textDecoration = 'none'
    }
  });
}
