function VanENegativ(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    return i < szamok.length;
}
function KorKerTer(r) {
    var ker = 2 * r * Math.PI;
    var ter = r * r * Math.PI;
    return [ker, ter];
}
console.log(VanENegativ([5, 12, 0, 23, -1, 54]));
console.log(VanENegativ([5, 12, 0, 23, 54]));
console.log(KorKerTer(3));
function MinAuto(autok) {
    var MinAuto = autok[0];
    for (var i = 1; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < MinAuto.hengerurtartalom) {
            MinAuto = autok[i];
        }
    }
    return MinAuto;
}
function BenzinesDb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE) {
            db++;
        }
    }
    return db;
}
var a1 = {
    gyarto: "Opel",
    tipus: "Corsa",
    hengerurtartalom: 1200,
    benzinesE: true
};
var a2 = {
    gyarto: "Volswagen",
    tipus: "Polo",
    hengerurtartalom: 1400,
    benzinesE: false
};
var a3 = {
    gyarto: "Skoda",
    tipus: "Octavia",
    hengerurtartalom: 1600,
    benzinesE: true
};
var autok = [a1, a2, a3];
console.log(MinAuto(autok));
console.log(BenzinesDb(autok));
