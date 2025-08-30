//module.exports


//export default async

exports.connectToDatabase = async (dataName) => {

    console.log("Conectando-se  ao banco:"+ dataName) 
}

exports.disconnectDatabase = async (dataName) => {

    console.log("desconectando")
}   



async function connectToDatabase(dataName) {
    console.log(" Se conectando ao banco:"+ dataName) 
}

async function disconnectDatabase(dataName){
// lógica 
console.log("desconectando")
}
