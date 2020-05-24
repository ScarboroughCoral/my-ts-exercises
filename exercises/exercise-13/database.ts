type FieldQuery<T> = { $eq: T } | { $gt: T } | { $lt: T } | { $in: T[] };
type Query<T extends {}> = {
    [P in keyof T]?: FieldQuery<T[P]>;
} & {
    $text?: string;
    $and?: Query<T>[];
    $or?: Query<T>[];
}
export class Database<T> {
    protected filename: string;
    protected fullTextSearchFieldNames: string[];

    constructor(filename: string, fullTextSearchFieldNames: string[]) {
        this.filename = filename;
        this.fullTextSearchFieldNames = fullTextSearchFieldNames;
    }

    async find(query: Query<T>): Promise<T[]> {
        return [];
    }
}
