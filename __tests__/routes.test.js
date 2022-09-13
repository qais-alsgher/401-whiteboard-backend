`use strict`;
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);
jest.setTimeout(10000);


describe('test router get method', () => {
    it('test get all', async () => {
        const res = await request.get('/post');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"id":1,"postAouthr":"qais","postTitle":"hi","postContent":"hi all","updatedAt":"2022-09-13T19:16:05.999Z","createdAt":"2022-09-13T19:16:05.999Z"}');
    });

    it('test get one', async () => {
        const res = await request.get('/post/1');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"{"id":1,"postAouthr":"qais","postTitle":"hi","postContent":"hi all","updatedAt":"2022-09-13T19:16:05.999Z","createdAt":"2022-09-13T19:16:05.999Z"}')
    });

});

describe('test router post method', () => {
    it('test post to create post', async () => {
        const newPost = {
            postAouthr: 'abdullah',
            postTitle: "hi",
            postContent: 'yes'
        };
        const res = await request.post('/post').send(newPost);
        expect(res.status).toEqual(201);
    })
});

describe('test router put method', () => {
    it('test put to update post', async () => {
        const updatePost = {
            postContent: 'Hi'
        };
        const res = await request.put('/post/1').send(updatePost);
        expect(res.status).toEqual(200);
    })
});

describe('test router delet method', () => {
    it('test delete to delete post', async () => {
        const res = await request.delete('/post/19');
        expect(res.status).toEqual(204);
        expect(res.text).toEqual("");
    })
})