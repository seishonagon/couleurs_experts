// Example crm-card.js file

// Include HubSpot node API client
const hubspot = require('@hubspot/api-client');

exports.main = async (context = {}, sendResponse) => {
  // Store contact info, configured as propertiesToSend in crm-card.json
  const { hs_object_id, firstname, lastname, type_contact } = context.propertiesToSend;

  // instantiate HubSpot Node API client
  const hubspotClient = new hubspot.Client({
    accessToken: context.secrets.PRIVATE_APP_ACCESS_TOKEN,
  });

  // Defines the first section of the CRM card

  try {
    sendResponse({
      sections: [{
          type: "heading",
          text: "Type Contact"
        },
        {
          type: "text",
          text: `Le type contact de ${firstname} ${lastname} est **${type_contact}**`
        },
          {
            "type": "image",
            "src": "https://www.ui-extensibility.com/hubfs/welcome-sign.png",
            "alt": "A Welcome Sign sample image"
          }
      ]
    });
  } catch (error) {
    console.error(error);
  }
};