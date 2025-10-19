function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();


// calling
// resolved
// Promise {<pending>}
// [[Prototype]]
// : 
// Promise
// catch
// : 
// ƒ catch()
// constructor
// : 
// ƒ Promise()
// finally
// : 
// ƒ finally()
// then
// : 
// ƒ then()
// Symbol(Symbol.toStringTag)
// : 
// "Promise"
// [[Prototype]]
// : 
// Object
// [[PromiseState]]
// : 
// "pending"
// [[PromiseResult]]
// : 
// undefined