import pool from './connection';
import type { ResultSetHeader } from 'mysql2';
import { MySqlResponse } from './types';

export async function SelectQuery<T>(queryString: string, params?: any): Promise<Partial<T>[]> {
    const [results] = await pool.query(queryString, params);
    return results as T[];
}


export async function ModifyQuery<T>(queryString: string, params?: any): Promise<ResultSetHeader> {
    const [results] = await pool.query(queryString, params);
    return results as ResultSetHeader;
}

export async function AlterQuery<T>(queryString: string, params?: any): Promise<MySqlResponse> {
    const [results] = await pool.query(queryString, params);
    return results as MySqlResponse;
}
