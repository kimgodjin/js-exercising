function meetAt (year, month, date){
    if(date){
        return `${year}/${month}/${date}`
    }else if(month){
        return `${year}년 ${month}월`
    }else{
        return `${year}년`
    }
}

console.log(meetAt(2022))

// findSmallestElemnet 함수 구현

function findSmallestElemnet (arr){
    if(arr.length == 0){
        return 0;
    }

    let result = arr[0]

    for(let i=1; i < arr.length; i++){
        if(result > arr[i]){
            result = arr [i]
        }
    }

    return result
}

console.log(findSmallestElemnet([100,200,10,20,30,5]))

//돈을 매개변수 ~~~

let coin = [50000, 10000, 5000, 1000, 500, 100]

function calculateMoney (money){
    for(i=0; i < coin.length; i++){
        if(money > coin[i]){
            let num = Math.floor(money/coin[i])
            console.log(`${coin[i]} X ${num}`)
            money = money - coin[i] * num
        }
    }
}

calculateMoney(16300)