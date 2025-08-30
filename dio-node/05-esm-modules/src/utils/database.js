// Removido para evitar redeclaração da variável dataBaseType



// (removed duplicate function declarations)

export const dataBaseType = {
	userType: "admin",
	typeData: "data,local",
};

export async function connectToDatabase(dataName) {
	// logica de conecção
	console.log(`conectado ao banco ${dataName}`);
	// Exemplo: return await someDatabaseLibrary.connect(dataName);
}


export async function disconnectFromDatabase() {
	// logica de desconecção
	console.log("desconectado do banco de dados");
	// Exemplo: return await someDatabaseLibrary.disconnect();
}
