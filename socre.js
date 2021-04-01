function compareTriplets(a, b) {
    
    let score_ = [ 0, 0]
    for(let i = 0; i < a.length;  i++){
        console.log(a[i])
        if(a[i] > b[i]){
            score_[0] = score_[0] + 1
        }
        else if( a[i] < b[i]){
            score_[1] = score_[1] + 1
        }
      
    }
    return score_
}

let a = [1, 3, 5, 19]
let b = [12, 2, 5, 20]
compareTriplets(a, b)