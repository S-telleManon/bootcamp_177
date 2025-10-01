
let compareToTen = function(number){
    promise = new Promise function(resolve,reject){

    }
}
            {
                if (number <= 10)
                {
                    resolve("Number is less or equal to 10");
                }
                else
                {
                    reject("Number is greater than 10")
                }
            });

        compareToTen.then(function(value)
        {
            console.log(value);
        }       
        );

        compareToTen.catch(function(value)
        {
            console.log(value);
        }   
        );
        console.log(compareToTen);


compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))