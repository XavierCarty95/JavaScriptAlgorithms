function containsDuplicates(a) {
    var firstNum = 0;
    
for (var i = 0; i < a.length; i++) {
    
    // var temp = a;
    // if (temp[i] == [i]) {
    //     return true;
    
    for (var h = i + 1; h < a.length; h++){
        if ( a[i] == a[h]){
            return true;
        }
    }
}
    return false;
}
