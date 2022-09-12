`use strict`;
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);
jest.setTimeout(10000);


describe('test router get method', () => {
    it('test get all', async () => {
        const res = await request.get('/message');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"message":[{"id":1,"messageAouthr":"qais","messageContent":"hello all","createdAt":"2022-09-12T08:02:56.413Z","updatedAt":"2022-09-12T08:02:56.413Z"},{"id":3,"messageAouthr":"yazeed","messageContent":"hi","createdAt":"2022-09-12T08:15:05.259Z","updatedAt":"2022-09-12T10:20:23.527Z"}]}');
    });

    it('test get one', async () => {
        const res = await request.get('/message/1');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"message":{"id":1,"messageAouthr":"qais","messageContent":"hello all","createdAt":"2022-09-12T08:02:56.413Z","updatedAt":"2022-09-12T08:02:56.413Z"}}')
    });

});

describe('test router post method', () => {
    it('test post to create message', async () => {
        const newMessage = {
            messageAouthr: 'abdullah',
            messageContent: 'yes'
        };
        const res = await request.post('/message').send(newMessage);
        expect(res.status).toEqual(201);
    })
});

describe('test router put method', () => {
    it('test put to update message', async () => {
        const updateMessage = {
            messageContent: 'Hi'
        };
        const res = await request.put('/message/19').send(updateMessage);
        expect(res.status).toEqual(200);
    })
});

describe('test router delet method', () => {
    it('test delete to delete message', async () => {
        const res = await request.delete('/message/19');
        expect(res.status).toEqual(204);
        expect(res.text).toEqual("");
    })
})