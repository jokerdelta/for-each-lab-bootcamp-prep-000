var array = [];

function iterativeLog(array){

  array.forEach(console.log ("${index}"+ ":" + "${element}"));

} // end of function iterativeLog

  function iterate(callback){
    
    var array2 = ["cat", "dog"];

    array2.forEach(callback); // passing the callback to .forEach??

    return array2;
    
  } // end of function iterate

function doToArray(array, callback){

  array.forEach(callback);//passing the callback as the forEach callback?
}


  