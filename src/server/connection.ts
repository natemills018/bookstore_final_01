import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    user: 'bookstore_final_user',
    password: 'password123',
    host: 'localhost',
    database: 'bookstore_final_01'
})

export default pool;


