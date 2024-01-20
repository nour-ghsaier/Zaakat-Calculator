import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MetalPriceService } from 'src/app/shared/currency.service';
import { InputZakaat } from 'src/app/shared/input-zakaat';
import { PriceMetal } from "src/app/shared/price-metal";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  
            formulaire = new FormGroup({
            cachHome: new FormControl(),
            owedToYou: new FormControl(),
            bankSaving: new FormControl(),
             otherAssets: new FormControl(),
             Gold: new FormControl(),
             Silver: new FormControl(),
             Liabilities: new FormControl(),
                 }
                 );
               ch: InputZakaat={
                cachHome:0,
                owedToYou:0,
                bankSaving:0,
                otherAssets:0,
                Gold:0,
                Silver:0,
                Liabilities:0


               }
   metal: PriceMetal = {
    rates: {
      EUR: 0,
      GBP: 0,
      PA: 0,
      PL: 0,
      XAG: 0,
      XAU: 0
    },
  }
    rate = this.metal.rates
    metals: any
   resultat1:number=0;
   valueOfGold:number=0
   valueOfSilver:number=0
   xValueGold:number=0
   xValueSilver:number=0
   result11:number=0
   amount:number=0
   totalZakaat:number=0
   nissab:number=487.01 
   isValid: boolean=true
  

  constructor(private metalPriceService: MetalPriceService, private fb: FormBuilder)
   {
    this.formulaire = this.fb.group({
      cachHome: [''],
      owedToYou: [''],
      bankSaving: [''],
     otherAssets: [''],
     Silver: [''],
      Gold: [''],
      Liabilities: [''],
        }); 
    }
  
ngOnInit(): void {
  
this.metalPriceService.getCurrentMetalPrice().subscribe(
  (data) => {
    this.metals = data;
    console.log('hello', data.rates.XAU);
  },
  (error: any) => {
    console.error('Error fetching metal prices:', error);
  }
);

}
      onSubmit() {
        this.ch.cachHome=this.formulaire.value.cachHome
        this.ch.owedToYou=this.formulaire.value.owedToYou
        this.ch.bankSaving=this.formulaire.value.bankSaving
        this.ch.otherAssets=this.formulaire.value.otherAssets
        this.ch.Gold=this.formulaire.value.Gold
        this.ch.Silver=this.formulaire.value.Silver
        this.ch.Liabilities=this.formulaire.value.Silver
         console.log('Formulaire soumis avec les valeurs :', this.ch);
        this. valueOfGold=( Number(this.formulaire.value.Gold)*(this.metals.rates.XAU))
        this.xValueGold=parseFloat(this.valueOfGold.toFixed(3))
        this.valueOfSilver=(Number(this.formulaire.value.Silver)*(this.metals.rates.XAG))
        this.xValueSilver=parseFloat(this.valueOfSilver.toFixed(3))
         this.resultat1 = Number(this.formulaire.value.cachHome)
          + Number(this.formulaire.value.owedToYou)
         + Number(this.formulaire.value.bankSaving)+Number(this.formulaire.value.otherAssets)
          +this.xValueGold
          + this.valueOfSilver
         
         this. result11=parseFloat(this.resultat1.toFixed(3))
         this.amount=this.result11-Number(this.formulaire.value.Liabilities)
         this.totalZakaat=parseFloat(Number(this.amount*0.025).toFixed(3))
         console.log('somme',this.resultat1)
         console.log('silv',this.metals.rates.XAU)
         this.isValid = this.totalZakaat < this.nissab;


        
      }
      
      
   
    
}






