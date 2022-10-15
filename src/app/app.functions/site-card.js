// Example crm-card.js file

// Include HubSpot node API client
const hubspot = require('@hubspot/api-client');

exports.main = async (context = {}, sendResponse) => {
  // Store contact info, configured as propertiesToSend in crm-card.json
  const { hs_object_id, firstname, lastname, type_contact } = context.propertiesToSend;

  // instantiate HubSpot Node API client
  // const hubspotClient = new hubspot.Client({
  //   accessToken: context.secrets.PRIVATE_APP_ACCESS_TOKEN,
  // });
  
  // const bandeauExpert = {
  //   "type": "image",
  //   "src": "https://cdn.experconnect.com/crm/expert_green.png",
  //   "alt": "Bandeau vert expert"
  // };
  // const bandeauContactClient = {
  //   "type": "image",
  //   "src": "https://cdn.experconnect.com/crm/contact_brown.png",
  //   "alt": "Bandeau brun contact client"
  // };
  // const errorMessage = {
  //   "type": "text",
  //   "text": `Le type contact est ${type_contact}`,
  // };
  
  if (`${type_contact}` === `Expert`) {
    sendResponse({ sections: [{
        "type": "image",
        "src": "https://cdn.experconnect.com/crm/expert_green.png",
        "alt": "Bandeau vert expert"
      }], 
    });
  } else {
    sendResponse({ sections: [{
        "type": "image",
        "src": "https://cdn.experconnect.com/crm/contact_brown.png",
        "alt": "Bandeau brun contact client"
      }], 
    });
  };
  console.log(`${type_contact}`, `${type_contact}` === `Expert`)
};