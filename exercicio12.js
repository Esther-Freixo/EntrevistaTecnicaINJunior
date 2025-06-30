const encontrarElementoUnico = (arr) => {
    let objNum = {};

    for (const num of arr) {
        if (objNum[num]) {
            objNum[num] += 1;
        } else {
            objNum[num] = 1;
        }
    }

    for (chave in objNum) {
        if (objNum[chave] === 1) {
            console.log(chave);
        }
    }

}

const arrTeste = [2, 6, 4, 5, 6, 4, 5];

encontrarElementoUnico(arrTeste);