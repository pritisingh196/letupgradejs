const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function maxArray(num) {
    let max = num;
    for (let i = 1; i < num.length; i++) {
        if (i > max) {
            max = num[i];
        }
        }return(max);
}
    console.log(maxArray(num));
