let arr = [15, 5, 9, 65, 8, 7, 6];

for(i = 4; i < arr.length; i++){
    let a = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = a;
};
alert(arr[2]);