const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.get('/contentfulSecrets', function(req, res) {
    res.json({
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });
});

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/dist/kindnesscode'));

const getSubscriptionTypes = async () => {
    const url = 'https://api.hubapi.com/email/public/v1/subscriptions';
    const headers = { 
      'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    };
  
    try {
      const response = await axios.get(url, { headers });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching subscription types: ', error.response ? error.response.data : error.message);
      console.error('Detailed Error: ', error);
    }
  }
  
  getSubscriptionTypes();

app.post('/api/subscribe', async (req, res) => {
    const { firstName, lastName, email, interests, message } = req.body;
    
    const hubspotApiUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
    const subscriptionUpdateUrl = `https://api.hubapi.com/email/public/v1/subscriptions/${email}`;
    const subscriptionTypeIds = [process.env.MARKETING_TYPE_ID, process.env.ONE_ON_ONE_TYPE_ID];
    const headers = { 
        'Authorization': `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    };
    const data = {
        properties: {
            email: email,
            firstname: firstName, 
            lastname: lastName, 
            interests: interests.join(';'),
            message: message
        }
    };

    try {
        const response = await axios.post(hubspotApiUrl, data, { headers });

        // Update subscription status of newly created contact
        const subscriptionData = {
            subscriptionStatuses: subscriptionTypeIds.map(id => ({
                id: id, // Subscription type ID
                subscribed: true, // Set this to "true" to opt in the contact
                optState: "OPT_IN" // The optState can be "OPT_IN" or "OPT_OUT"
            }))
        };

        try {
            await axios.put(subscriptionUpdateUrl, subscriptionData, { headers });
            console.log("Subscription updated successfully");
        } catch (error) {
            console.error('Error updating subscription: ', error.response ? error.response.data : error.message);
            console.error('Detailed Error: ', error);
        }
        
        res.status(200).json({ message: "Contact created and possibly subscribed successfully." });
    } catch (error) {
        console.error('Error creating contact: ', error.response ? error.response.data : error.message);
        console.error('Detailed Error: ', error);
        res.status(500).json({ message: "Error creating contact." });
    }
});


app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/kindnesscode/index.html'));
});

app.listen(process.env.PORT || 8080);
