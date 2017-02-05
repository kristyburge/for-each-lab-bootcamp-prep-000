function iterativeLog(array) {
    array.forEach(function(element, index){
      console.log(`${index}: ${element}`);
    });
}


function iterate(callback) {
    var dogs = ['beagle', 'dachshund', 'mutt', 'german shepard'];
    dogs.forEach(callback);
    return dogs; 
}


function doToArray(array, callback) {
    array.forEach(callback);
} 