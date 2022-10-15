// Example crm-card.js file

// Include HubSpot node API client
const hubspot = require('@hubspot/api-client');

exports.main = async (context = {}, sendResponse) => {
  // Store contact info, configured as propertiesToSend in crm-card.json
  const { hs_object_id, firstname, lastname, type_contact } = context.propertiesToSend;
  
  if (`${type_contact}` === `Expert`) {
    sendResponse({ sections: [{
        "type": "image",
        "src": "https://cdn.experconnect.com/crm/expert_green.png",
        "alt": "Bandeau vert expert"
      }], 
    });
  } else if (`${type_contact}` === `Client`){
    sendResponse({ sections: [{
        "type": "image",
        "src": "https://cdn.experconnect.com/crm/contact_brown.png",
        "alt": "Bandeau brun contact client"
      }], 
    });
  } else {
    sendResponse({ sections: [{
        "type": "text",
        "text": "Ce contact n'est ni un expert ni un client",
      }], 
    });
  };
  console.log(`${type_contact}`, `${type_contact}` === `Expert`)
};