// for loop

// for (let i = 1; i <= 5; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("Element is 5");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop iteration: ${i}`);
//     for (let j = 1; j <= 5; j++) {

//         // console.log(`i: ${i}, j: ${j}`);
//         console.log(i + "*" + j + "=" + (i * j));
//     }
// }

// let arr = ["spiderman", "batman", "superman", "ironman", "hulk"];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

//keywords 

// break, continue, return

// for (let i = 1; i <= 20; i++) {
//     // const element = array[i];
//     if( i == 5 ){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    // const element = array[i];
    if( i == 5 ){
        console.log("Detected 5")
        continue;
    }
    console.log(`value of i is ${i}`);
    
}