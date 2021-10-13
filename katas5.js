// implemente aqui as funções de teste
function testReverseString1(){
    const test = reverseString("Teste1")
    const result = "1etseT"
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testReverseString2(){
    const test = reverseString("AaBbAa")
    const result = "aAbBaA"
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testReverseSentence1(){
    const test = reverseSentence("Eu sou inevitável")
    const result = "inevitável sou Eu"
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testReverseSentence2(){
    const test = reverseSentence("um dois,três quatro")
    const result = "quatro dois,três um"
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testMinimumValue1() {
    const test = minimumValue([1,2,3,4,5])
    const result = 1
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testMinimumValue2() {
    const test = minimumValue([-1,-2,-3,-4,-5])
    const result = -5
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testMaximumValue1() {
    const test = maximumValue([1,2,3,4,5])
    const result = 5
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testMaximumValue2() {
    const test = maximumValue([-1,-2,-3,-4,-5])
    const result = -1
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testCalculateRemainder1(){
    const test = calculateRemainder(12,5)
    const result = 2
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testCalculateRemainder2(){
    const test = calculateRemainder(20,5)
    const result = 0
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testDistinctValues1(){
    const test = distinctValues("a a a b a c d e")
    const result = "a b c d e"
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testDistinctValues2(){
    const test = distinctValues("1 2 2 2 4 1 3")
    const result = "1 2 4 3"
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testCountValues1(){
    const test = countValues("a a a b a c d e")
    const result = "a(4) b(1) c(1) d(1) e(1)"
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)
}
function testCountValues2(){
    const test = countValues("1 2 2 2 4 1 3")
    const result = "1(2) 2(3) 3(1) 4(1)"
    console.assert(result===test, `Esperado: ${result}, obtido: ${test}`)

}
//funções
function reverseString(str){
    let res = ""
    for(let i=0;i<str.length;i++){
        res+=str[str.length-i-1]
    }
    return res
}
function reverseSentence(str){
    let arr=str.split(" ")
    const res = [];
    const size = arr.length
    for (let i=0;i<size;i++){
        res.push(arr.pop())
    }
    arr = res.join(" ")
    return arr;
}
function minimumValue(val){
    let res  = val[0]
    for(let i=1;i<val.length;i++){
        if(val[i]<res){
            res=val[i]
        }
    }
    return res
}
function maximumValue(val){
    let res = val[0]
    for(let i=1;i<val.length;i++){
        if(val[i]>res){
            res=val[i]
        }
    }
    return res
}
function calculateRemainder(num1, num2){
    return num1%num2
}
function distinctValues(str){
    let arr = str.split(" ")
    let res = []
    arr.forEach((x)=>{
        if(res.indexOf(x)===-1){
            res.push(x)
        }
    })
    return res.join(" ")
}
function countValues(str){
    let arr = str.split(" ")
    let res = {}
    arr.forEach((x)=>{
        if(res[x]===undefined){
            res[x]=1
        }else{
            res[x]++
        }
    })
    let retorno = []
    for(let i in res){
        retorno.push(`${i}(${res[i]})`)
    }
    return retorno.join(" ")
}