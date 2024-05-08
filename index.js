import app from "./src/app.js";
import "dotenv/config"

const PORT = process.env.PORT || 3700
app.listen(PORT, () => {
  console.log(` Servidor en puerto ${PORT}`);
});
