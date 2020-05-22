declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;
    type GetIndexFunc = <T>(input: T[], comparator: Comparator<T>) => number;
    type GetElementFunc = <T>(input: T[], comparator: Comparator<T>) => T;
    export const getMaxIndex: GetIndexFunc;
    export const getMaxElement: GetElementFunc;
    export const getMinIndex: GetIndexFunc;
    export const getMinElement: GetElementFunc;
    export const getMedianIndex: GetIndexFunc;
    export const getMedianElement: GetElementFunc;
    export function getAverageValue<T, V>(input: T[], getValue: (input: T) => V): V;

}
// 我的菜鸡代码。。
// declare module 'stats' {
//     type Comparator<T> = (a: T, b: T) => number;
//     type GetValue<T> = (input: T) => number;
//     export function getMaxIndex<T>(input: T[], comparator: Comparator<T>): number;
//     export function getMaxElement<T>(input: T[], comparator: Comparator<T>): T;
//     export function getMinIndex<T>(input: T[], comparator: Comparator<T>): number;
//     export function getMinElement<T>(input: T[], comparator: Comparator<T>): T;
//     export function getMedianIndex<T>(input: T[], comparator: Comparator<T>): number;
//     export function getMedianElement<T>(input: T[], comparator: Comparator<T>): T;
//     export function getAverageValue<T>(input: T[], getValue: GetValue<T>): T;

// }
