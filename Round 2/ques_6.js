// Round 2
// Q-6: Implement Promise.all

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

function myPromiseAll(promises) {
    let result = [];
    return new Promise((Resolve, reject) => {
        promises.forEach((p, index) => {
            p.then(res => {
                result.push(res);
                if (index === promises.length - 1) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    });
}

myPromiseAll([
    showText("Hello", 1000), 
    Promise.resolve("Hi"), 
    // Promise.reject("Bye")
]).then((value) => console.log(value));