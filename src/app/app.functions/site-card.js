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
  
  const bandeauExpert = {
    "type": "image",
    "src": "https://cdn.experconnect.com/crm/expert_green.png",
    "alt": "Bandeau vert expert"
  };
  const bandeauContactClient = {
    "type": "image",
    "src": "https://cdn.experconnect.com/crm/contact_brown.png",
    "alt": "Bandeau brun contact client"
  };
  
  if (type_contact === 'Client') {
    const bandeau = {
      "type": "image",
      "src": "https://cdn.experconnect.com/crm/expert_green.png",
      "alt": "Bandeau vert expert"
    };
  } else {
    const bandeau = {
      "type": "image",
      "src": "https://cdn.experconnect.com/crm/expert_green.png",
      "alt": "Bandeau vert expert"
    };
  }
  
  // Defines the first section of the CRM card

  try {    
    sendResponse({ sections: [bandeau] });
    
    // sendResponse({
    //   sections: [{
    //       "type": "image",
    //       "src": "https://cdn.experconnect.com/crm/expert_green.png",
    //       "alt": "Bandeau vert expert"
    //     },
    //     {
    //       type: "text",
    //       format: "markdown",
    //       text: `Le type contact de ${firstname} ${lastname} est **${type_contact}**`
    //     },
    //   ]
    // });
  } catch (error) {
    console.error(error);
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: 'ERROR',
        body: `Error: ${error.message}`
      },
      sections: [introMessage]
    });
  }
};