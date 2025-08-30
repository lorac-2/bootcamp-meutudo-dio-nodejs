// todas as funções que lidam com produto

const productTpe = {
    version: "digital",
    tax:" x1"
}



async function getFullName(codeId, productName) {
    console.log("productX" + codeId + "--" + productName);
    await doBreakLine();
}
// hidden function
async function doBreakLine() {
    console.log("\n");
}


async function getProductLabel(productName){
console.log("Product" + productName);
}

module.exports ={
    getFullName,
    getProductLabel,
}