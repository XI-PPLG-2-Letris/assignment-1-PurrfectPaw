let a = 10
let b = 20

const operator = (a, b) => {
    console.log(`Penjumlahan ${a} + ${b} = ${a + b}`);
    console.log(`Pengurangan ${a} - ${b} = ${a - b}`);
    console.log(`Perkalian ${a} * ${b} = ${a * b}`);
    console.log(`Pembagian ${a} / ${b} = ${a / b}`);
    console.log(`Perpangkatan ${a} ** ${b} = ${a ** b}`);
    console.log(`Modulus ${a} % ${b} = ${a % b}`);
}
operator(a, b);