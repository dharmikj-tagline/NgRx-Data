import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
    selector: '[appMinMax]',
    standalone: true,
})
export class MinMaxDirective {
    private elRef = inject(ElementRef);
    @Input() min: number = 0;
    @Input() max: number = 100;

    @HostListener('input', ['$event'])
    onInput(): void {
        const inputValue: string = this.elRef.nativeElement.value || this.min.toString();
        const digitsOnly = inputValue.replace(/\D/g, '');
        const intValue = parseInt(digitsOnly, 10);
        const clampedValue = Math.min(this.max, Math.max(this.min, intValue));
        this.elRef.nativeElement.value = clampedValue.toString();
    }
}
