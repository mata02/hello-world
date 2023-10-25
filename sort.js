function sortArray(arr){
  arr.sort((a,b) => {
    if (a[0] < b[0]) return -1
  	if (a[0] > b[0]) return 1
  	if (a[1] < b[1]) return -1
  	if (a[1] > b[1]) return 1
    return 0
  })
}
    
// 出力    
// [
//  [ 1, 1 ], 
//  [ 1, 2 ], 
//  [ 1, 3 ], 
//  [ 2, 1 ] 
// ]
