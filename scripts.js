var friends = ["Kaitlyn", "Josh", "Alex", "Allison", "Scott"];
var locations = ["kitchen", "living room", "bathroom", "copy room", "office", "classroom", "sketchy elevator", "stairwell", "drivethru", "driveway"];
var weapons = ["spatula", "paper clip", "fork", "spoon", "chair", "table", "water bottle", "coffe mug", "tv", "hammer", "trash can", "backpack", "apple", "plastic cup", "car seat", "diaper", "shirt", "sock", "pipe", "phone", ];

for (var i=0; i<100; i++) {
    var $h3 = $("<h3> Accusation " + (i+1) + "</h3>");
    $h3.click(displayAlert(i));
    $h3.appendTo("body");
}

function displayAlert(i) {
    return function() {
        alert("Accusation " + (i+1) + ": I accuse " + friends[i % 5] + ", with the " + weapons[i % 20] + " in the "+locations[i % 10] + "!");
    }
}