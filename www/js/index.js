var FOODGEN = {
    food: [
        "Hotdog",
        "Burger",
        "Döner",
        "Pizza"
    ],
    init: function(){
        console.log("Das Programm ist fertig geladen!");
    },
    gen: function(){
        //Zufällige Zahl generieren
        rand = Math.floor(Math.random() * this.food.length);
        index = this.food.indexOf(this.food[rand]);

        //Zufälliges essen ausgeben oder auch nicht
        if(this.food.length == 0){
            //alert("Du ficker hast keine essen mehr zur verfügung");
            document.getElementById("essen_card").innerHTML = "Du ficker hast keine essen mehr zur verfügung";
        } else {
            //alert("Dein essen des heutigen Tages ist: " + this.food[rand]);
            document.getElementById("essen_card").innerHTML = this.food[rand];
        }

        //Das Schon gezogene essen aus dem Array löschen
        if (index > -1) {
            this.food.splice(index, 1);
        }
    },
    reset: function(){
        this.food = [
            "Hotdog",
            "Burger",
            "Döner",
            "Pizza"
        ]
    }
};

FOODGEN.init();

document.getElementById("randome").onclick = function() {FOODGEN.gen()};
