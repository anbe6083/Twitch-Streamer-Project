function getJson(){
  var json = [
  {
    "stream": {
      "mature": false,
      "status": "Greg working on Electron-Vue boilerplate w/ Akira #programming #vuejs #electron",
      "broadcaster_language": "en",
      "display_name": "FreeCodeCamp",
      "game": "Creative",
      "language": "en",
      "_id": 79776140,
      "name": "freecodecamp",
      "created_at": "2015-01-14T03:36:47Z",
      "updated_at": "2016-09-17T05:00:52Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png",
      "profile_banner_background_color": null,
      "partner": false,
      "url": "https://www.twitch.tv/freecodecamp",
      "views": 161989,
      "followers": 10048,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/freecodecamp",
        "follows": "https://api.twitch.tv/kraken/channels/freecodecamp/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/freecodecamp/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/freecodecamp/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/freecodecamp",
        "subscriptions": "https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/freecodecamp/editors",
        "teams": "https://api.twitch.tv/kraken/channels/freecodecamp/teams",
        "videos": "https://api.twitch.tv/kraken/channels/freecodecamp/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/freecodecamp",
      "channel": "https://api.twitch.tv/kraken/channels/freecodecamp"
    }
  },
  {
    "stream": null,
    "display_name": "OgamingSC2",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/ogamingsc2",
      "channel": "https://api.twitch.tv/kraken/channels/ogamingsc2"
    }
  },
  {
    "stream": {
      "mature": false,
      "status": "RERUN: StarCraft 2 - Kane vs. HuK (ZvP) - WCS Season 3 Challenger AM - Match 4",
      "broadcaster_language": "en",
      "display_name": "ESL_SC2",
      "game": "StarCraft II",
      "language": "en",
      "_id": 30220059,
      "name": "esl_sc2",
      "created_at": "2012-05-02T09:59:20Z",
      "updated_at": "2016-09-17T06:02:57Z",
      "delay": null,
      "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
      "banner": null,
      "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
      "background": null,
      "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
      "profile_banner_background_color": "#050506",
      "partner": true,
      "url": "https://www.twitch.tv/esl_sc2",
      "views": 60843789,
      "followers": 135275,
      "_links": {
        "self": "https://api.twitch.tv/kraken/channels/esl_sc2",
        "follows": "https://api.twitch.tv/kraken/channels/esl_sc2/follows",
        "commercial": "https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
        "stream_key": "https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
        "chat": "https://api.twitch.tv/kraken/chat/esl_sc2",
        "subscriptions": "https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
        "editors": "https://api.twitch.tv/kraken/channels/esl_sc2/editors",
        "teams": "https://api.twitch.tv/kraken/channels/esl_sc2/teams",
        "videos": "https://api.twitch.tv/kraken/channels/esl_sc2/videos"
      }
    },
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "stream": null,
    "display_name": "noobs2ninjas",
    "_links": {
      "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
      "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
  },
  {
    "error": "Not Found",
    "status": 404,
    "message": "Channel 'not-a-valid-account' does not exist"
  }
];
  
  $.each(json, function(index, jsonObject) {
    if('stream' in jsonObject){
      appendToHtml(index, jsonObject); 
    }
  });
}
function createLink(text, href) {
    var link = document.createElement('a');
    link.appendChild(text);
    link.title = text;
    link.href = href;
    link.target = "_blank";
    return link;
  };
function appendTwitchUserName(userName) {
    var div = document.createElement('div');
    $(div).addClass('col-sm-4');
    var textNode = document.createTextNode(userName); 
    div.appendChild(textNode);
    return div;
  }
function isStreamOnline(stream) {
  if(stream === null) { 
    return false;
  } else {
    return true;
  }
}

function createDiv(userName, divClass) {
    var textNode, div;
    div = document.createElement('div');
    $(div).addClass(divClass);
    textNode = document.createTextNode(userName);
    return div.appendChild(textNode);
  }


function appendToHtml(index, jsonObject) {
  console.log(jsonObject);
  var userName, row, twitchUserStatus, twitchImage, newElement, container, onlineOrOfflineClass, id, channelLink, streamIsOnline;
  streamIsOnline = this.isStreamOnline(jsonObject.stream);

  //get the info from the JSON object
  if(streamIsOnline) {
    userName = jsonObject.stream.display_name;
    twitchUserStatus = jsonObject.stream.status;
    twitchImage = jsonObject.stream.logo;
    onlineOrOfflineClass = 'twitchUserOnline col-sm-4';
    channelLink = jsonObject.stream.url;
  } else {
    userName = jsonObject.display_name;
    twitchUserStatus = "offline";
    twitchImage = 'https://player.twitch.tv/favicon.png';
    onlineOrOfflineClass = 'twitchUserOffline col-sm-4';
    channelLink = '#';
  }
  container = document.getElementById('container');
  var row = document.createElement('div');
  $(row).addClass(onlineOrOfflineClass);
  //create a div for the user's image, import the image into html and append the image to the div
  var twitchImageDiv = document.createElement('div');
  twitchImageDiv.setAttribute('class', 'twitchImage col-sm-4');
  var image = document.createElement('img');
  image.src = twitchImage;
  $(image).addClass('img-fluid'); 
  twitchImageDiv.appendChild(image);

  
  //create a div for the twitch user's name, append the text to the div
  
  var twitchUserNameDiv = this.createDiv(userName, 'col-sm-4');
    
  //create a div for the twitch channel's description, append the text to the div
  var twitchDescriptionDiv = document.createElement('div');
  
  $(twitchDescriptionDiv).addClass('twitchDesription col-sm-4');
  var descriptionText = document.createTextNode(twitchUserStatus);
  
  if(streamIsOnline) {
    twitchDescriptionDiv.appendChild(this.createLink(descriptionText, channelLink));
  } else {
    twitchDescriptionDiv.appendChild(descriptionText);
  }
  
  row.appendChild(twitchDescriptionDiv);
  row.insertBefore(twitchUserNameDiv, twitchDescriptionDiv);
  row.insertBefore(twitchImageDiv, twitchUserNameDiv);
  container.appendChild(row);
}



$(document).ready(function(){
  //event handlers
  getJson();
  $(".handle").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
  $('#offlineBtn').on('click', function() {
    var online = document.getElementById('online');
    console.log(online);
    $('.twitchUserOnline').hide();
    $('.twitchUserOffline').show();
    $("nav ul").toggleClass("showing");
  });
  
  $('#showAllBtn').on('click', function() {
    $('.twitchUserOffline').show();
    $('.twitchUserOnline').show();
    $("nav ul").toggleClass("showing");
  });
  
  $('#onlineBtn').on('click', function() {
    $('.twitchUserOffline').hide();
    $('.twitchUserOnline').show();
    $("nav ul").toggleClass("showing");
  })
  
});