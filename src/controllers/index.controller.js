
import { pool } from '../db.js';

export const queryIndex = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM employees");
    res.json([result]);
}