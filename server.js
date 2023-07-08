const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/dist/kindnesscode'));

app.post('/api/subscribe', async (req, res) => {
    console.log(req.body)
    const { email } = req.body;

    const hubspotApiUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
    const headers = { 
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    };
    const data = {
        properties: {
            email: email,
        }
    };

    try {
        const response = await axios.post(hubspotApiUrl, data, { headers });
        res.status(200).json({ message: "Contact created successfully." });
    } catch (error) {
        console.error('Error creating contact: ', error.response ? error.response.data : error.message);
        console.error('Error creating contact: ', error);
        res.status(500).json({ message: "Error creating contact." });
    }
});

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/kindnesscode/index.html'));
});

app.listen(process.env.PORT || 8080);
