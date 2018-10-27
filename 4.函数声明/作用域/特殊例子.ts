for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
console.log("打印的是",i)