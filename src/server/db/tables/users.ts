import { SelectQuery, ModifyQuery, AlterQuery } from "../../queryUtils";
import type { RowDataPacket } from "mysql2";
import { MySqlResponse, NewUser } from "../../types";
import { User } from "../../types";

export function find(column: string, value: string) {
    return SelectQuery<User>('SELECT * FROM Users WHERE ?? = ?', [column, value])
}

export function register(newUser: NewUser) {
    return ModifyQuery<MySqlResponse> (
        'INSERT INTO Users SET ?', [newUser]
    )
}