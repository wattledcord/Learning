var graph = require('@microsoft/microsoft-graph-client');

module.exports = {
  getUserDetails: async function(accessToken) {
    const client = getAuthenticatedClient(accessToken);

    const user = await client.api('/me').get();
    return user;
  },getEvents: async function(accessToken) {
    const client = getAuthenticatedClient(accessToken);
  
    const events = await client
      .api('/me/events')
      .select('subject,organizer,start,end')
      .orderby('createdDateTime DESC')
      .get();
  // console.log("Events",events)
    return events;
  },getOneDriveFiles: async function(accessToken){
  const client =getAuthenticatedClient(accessToken);
  const files=await client.api('me/drive/root/children').get();
  return files;
  },
  getAudioFiles:async function (accessToken) {
const client=getAuthenticatedClient(accessToken);
const files=await client.api('me/drive/special/Music/children').get();
return files;
  } 
};

function getAuthenticatedClient(accessToken) {
  // Initialize Graph client
  const client = graph.Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: (done) => {
      done(null, accessToken);
    }
  });

  return client;
}