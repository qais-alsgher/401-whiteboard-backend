`use strict`;
const express = require('express');
const cors = require('cors');
const app = express();
const messageRuoter = require('./routes/post.route');
app.use(cors);
app.use(express.json());
app.use(messageRuoter);

function start(port) {
    app.listen(port, () => { console.log(`the server start for port ${port}`) });
}

module.exports = {
    start
};