"use strict";
// https://jsonplaceholder.typicode.com/posts
// 1. fetching 후 전체를 console.log로 출력
// 2. fetching 후 타입 모두 붙여서 타이틀만 출력하기
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const respone = yield fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = yield respone.json();
    return posts;
});
const getTitles = (posts) => {
    return posts.map((post) => post.title);
};
getPosts()
    .then((posts) => posts.map((post) => post.title))
    .then(console.log)
    .catch(console.error);
