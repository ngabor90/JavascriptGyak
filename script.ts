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