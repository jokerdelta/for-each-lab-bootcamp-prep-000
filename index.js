var array = [0,1,2,3,4];

function iterativeLog(array){

  array.forEach(element => {
    console.log('${index}: ${element}')
  });


} // end of function iterativeLog

  function iterate(callback){
    
    var array2 = ["cat", "dog"];

    array2.forEach(callback);

    return array2;
    
  } // end of function iterate

function doToArray(array, callback){

  array.forEach(callback);
} // end of function doToArray


  