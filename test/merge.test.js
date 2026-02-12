"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../src/merge");
describe('Merge Function Test', () => {
    test('Empty arrays', () => {
        const collection_1 = [];
        const collection_2 = [];
        const collection_3 = [];
        const merged = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(merged).toEqual([]);
    });
    test('Arrays with positive numbers', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 8, 7];
        const merged = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    test('Arrays with negative numbers', () => {
        const collection_1 = [-5, -3, -1];
        const collection_2 = [-4, -2, -1];
        const collection_3 = [-1, -2, -3];
        const merged = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(merged).toEqual([-5, -4, -3, -3, -2, -2, -1, -1, -1]);
    });
    test('Arrays with duplicate numbers', () => {
        const collection_1 = [1, 2, 2];
        const collection_2 = [2, 3, 4];
        const collection_3 = [4, 4, 3];
        const merged = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(merged).toEqual([1, 2, 2, 2, 3, 3, 4, 4, 4]);
    });
    test('Arrays of different lengths', () => {
        const collection_1 = [1, 4];
        const collection_2 = [2, 3, 5, 6];
        const collection_3 = [8, 7];
        const merged = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
    test('Arrays with mixed positive and negative numbers', () => {
        const collection_1 = [-1, 2, 3];
        const collection_2 = [-2, 0, 4];
        const collection_3 = [1, -1, -3];
        const merged = (0, merge_1.merge)(collection_1, collection_2, collection_3);
        expect(merged).toEqual([-3, -2, -1, -1, 0, 1, 2, 3, 4]);
    });
});
//# sourceMappingURL=merge.test.js.map