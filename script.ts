function VanENegativ(szamok:number[]):boolean{
    var i:number = 0;
    while(i < szamok.length && !(szamok[i] < 0)){
        i++
    }

    return i < szamok.length;
} 

function KorKerTer(r:number):[number, number]{
    var ker:number = 2 * r * Math.PI;
    var ter:number = r * r * Math.PI;

    return [ker, ter];
}

console.log(VanENegativ([5, 12, 0, 23, -1, 54]));
console.log(VanENegativ([5, 12, 0, 23, 54]));
console.log(KorKerTer(3));

interface Auto{
    gyarto:string;
    tipus:string;
    hengerurtartalom:number;
    benzinesE:boolean;
}

function MinAuto(autok:Auto[]):Auto{
    var MinAuto:Auto = autok[0];

    for(var i:number = 1; i < autok.length; i++){
        if(autok[i].hengerurtartalom < MinAuto.hengerurtartalom){
            MinAuto = autok[i];
        }
    }

    return MinAuto;
}

function BenzinesDb(autok:Auto[]):number{
    var db:number = 0;

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzinesE){
            db++;
        }
    }
    return db; 
}

var a1:Auto = {
    gyarto: "Opel",
    tipus: "Corsa",
    hengerurtartalom: 1200,
    benzinesE: true
};

var a2:Auto = {
    gyarto: "Volswagen",
    tipus: "Polo",
    hengerurtartalom: 1400,
    benzinesE: false
};

var a3:Auto = {
    gyarto: "Skoda",
    tipus: "Octavia",
    hengerurtartalom: 1600,
    benzinesE: true
};

var autok:Auto[] = [a1, a2, a3];

console.log(MinAuto(autok));
console.log(BenzinesDb(autok));