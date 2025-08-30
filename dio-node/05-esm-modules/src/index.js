import { connectToDatabase, dataBaseType, disconnectFromDatabase } from "./utils/database.js";

import * as api from "./utils/api.js";

api.getDataFromApi();
disconnectFromDatabase();



