//Closure exists when an INNER function makes use of variables declared in an OUTER function which has previously returned.
//Closure does not exist if you do not return an inner function and if that inner function does not make use of variable returned by an outer function

for (var i = 1; i <= 100; i++) { //Loop should run through all accusations
    createAccu(i);
};

function createAccu(num) { //Create outer function to begin closure
    var friend = ['Victoria', 'Greg', 'Carlin', 'Rachel', 'Mike'];
    var weapon = ['pineapple', 'butterknife', 'cast iron skillet', 'string lights', 'power cord', 'guitar strap', 'fan blade', 'pencil', 'shark tooth', 'fire extinguisher', 'baseball bat', 'broken bottle', 'tree branch', 'paint brush', 'camp stove', 'twig', 'yarn', 'dog leash', 'mace', 'grass blade'];
    var location = ['grocery store', 'post office', 'mansion', 'garden', 'restaurant', 'garage', 'forest', 'office', 'mall', 'hardware store'];

    var f = num % friend.length;  //Use Modulus Operator to decide which friend... 
    var w = num % weapon.length;  //...weapon
    var l = num % location.length;  //...and location

    var h3 = document.createElement('h3'); //Create H3 element
    h3.textContent = 'Accusation ' + (num); // Create text node for Accusations on page
    document.body.appendChild(h3); //Append H3 element to document
    var accusationNum = 'Accusation ' + (num); //Accusation # on alert

    h3.addEventListener('click', function () { //Return clickable H3 event listener (inner functon)
        alert(accusationNum + ': I accuse ' + friend[f] + ', with the ' + weapon[w] + ' in the ' + location[l] + '!'); //Alert with Accusation
    })
};

