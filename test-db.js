// test-db.js
import pool from "./db.js";

async function test() {
  try {
    const [rows] = await pool.execute("SELECT 1 + 1 AS result");
    console.log("Conexión exitosa a MySQL:", rows[0].result);
  } catch (err) {
    console.error("Error al conectar con MySQL:", err);
  }
}

test();
