function simpleArraySum(input) {
    var text = input.split("\n");
    console.log(text)
    var array = text[1].split(" ");
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=parseInt(array[i]);
    }
    console.log(sum);
}

let ar = [1, 2, 3]

simpleArraySum(ar)
