//importamos el app desde app
//index lanza la aplicacion al servidor

import { app } from "./app";

const PORT = 5000
app.listen(PORT,() => console.log(`Server init in http://localhost:${PORT}`));