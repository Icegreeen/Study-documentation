// Funcionamento interno do Filter()

Array.prototype.filter2 = function(callback){
    const newArray = []
    for( let i = 0; i < this.length; i++ ) {
        if(callback(this[i], i, this)) {
            newArray.push(this[1]);
        }
    }

    return newArray
}

