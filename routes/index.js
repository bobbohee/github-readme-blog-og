const express = require('express');
const router = express.Router();

const box = () => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50">
            <rect width="200" height="50" stroke="#333333" stroke-width="5" fill="#f2f2f2"/>
        </svg>
    `;
}

router.get('/', (req, res) => {
    res.header('Content-Type', 'image/svg+xml');
    res.send(box());
});

module.exports = router;