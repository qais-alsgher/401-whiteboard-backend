`use strict`;
const express = require('express');
const cors = require('cors');
const messageRuoter = require('./routes/post.route');
const app = express();
app.use(cors);
app.use(express.json());
app.use(messageRuoter);

function start(port) {
    app.listen(port, () => { console.log(`the server start for port ${port}`) });
}

module.exports = {
    start
};