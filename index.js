var array = [1,2,3];

function iterativeLog(array){

  array.forEach(
    console.log('${index}: ${element}')//problem here
  );

} // end of function iterativeLog

  function iterate(callback){
    
    var array2 = ["cat", "dog"];

    array2.forEach(callback);

    return array2;
    
  } // end of function iterate

function doToArray(array, callback){

  array.forEach(callback);
} // end of function doToArray


  