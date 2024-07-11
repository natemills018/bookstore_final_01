import { SelectQuery, ModifyQuery, AlterQuery } from "../../queryUtils";
import { Category } from "../../types";
import { NewBook } from "../../types";


export function getOne( id: number) {
    return SelectQuery<Category>('SELECT * FROM Categories WHERE id = ?', [id])
}

export function getAll() {
    return SelectQuery<Category>('SELECT * FROM Categories');
}