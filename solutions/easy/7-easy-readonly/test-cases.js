"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tObj = {
    title: 't',
    description: 'string',
    completed: true,
    meta: {
        author: 'a'
    }
};
// @ts-expect-error
tObj.meta.author = 'b';
