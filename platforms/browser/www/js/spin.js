var first_run = true;
        var food = [
            "Hotdog",
            "Burger",
            "Döner",
            "Pizza"
        ];

        const planeMachine = document.querySelector('#planeMachine');
        var slot_machin = null;



        function Gen() {
            first_run = false;
            for (var i = 0; i < food.length; i++) {
                var slot = document.createElement('div');

                slot.className = 'text-center';
                slot.append(food[i]);

                document.getElementById('planeMachine').appendChild(slot);
            }

            slot_machin = new SlotMachine(planeMachine, {
                active: Math.floor(Math.random() * (food.length)),
                auto: false,
                onComplete: function() {
                    console.log("Stopt!");
                    console.log(food[slot_machin.visibleTile]);

                    var index = food.indexOf(food[slot_machin.visibleTile]);

                    if (index > -1) {
                        food.splice(index, 1);
                    }

                    var myNode = document.getElementById("planeMachine");
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.firstChild);
                    }

                },
                randomize() {
                    return this.nextIndex;
                }
            });
        };



        document.getElementById("Start").onclick = function() {
            if (first_run) {
                Gen();
                slot_machin.shuffle(30);
                console.log("Lets Role!");
            } else {
                if (!slot_machin.running) {
                    Gen();
                    slot_machin.shuffle(30);
                    console.log("Lets Role!");
                } else {
                    console.log("Error we are in a Spin!")
                }
            }
        };