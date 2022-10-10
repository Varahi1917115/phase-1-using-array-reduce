const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (accumulator, item) => {
    let total = 0

    const batteries = () => {
        
        let sum = 0;
        for (let n of batteryBatches) 
        sum += n;
        console.log(sum);

    }
    return accumulator += total;
}

let totalBatteries = batteryBatches.reduce(reducer, 0)