const DEBUG = true
//const DEBUG = false

let v = function () {
  let self = {
    links: {},
    linksDetected: undefined,
    hasVoiceDetection: undefined,
    linksValues: undefined,
    recognition: undefined,
  }

  self.init = function () {
    self.detectLinks()
    self.initAnnyang()
  }
  self.detectLinks = function () {

    let links = document.getElementsByTagName('a')
    let linksWithTags = Array.from(links).filter(function (link) {
      if (DEBUG) {
        console.log(link);
        console.log(link.attributes);
        console.log(link.attributes["data-voice"]);
      }
      if (!link.attributes["data-voice"]) {
        return false
      } else {
        if (DEBUG) {
          console.log(link.attributes["data-voice"].value)
          console.log("ELEMENT FOUND")
        }
        return true
      }
    })
    if (DEBUG) {
      console.log(links);
      console.log(linksWithTags);
    }
    if (linksWithTags.length > 0) {
      self.links = linksWithTags
    } else {
      self.links = null
    }

  }
  self.initAnnyang = function () {
    if (annyang) {
      // Add our commands to annyang
      let commands = {
        'reload': function () {
          window.location.reload()
        },

      }
      annyang.addCommands(commands);
      annyang.addCallback('resultNoMatch', function (userSaid) {
        console.log("Not found : ", userSaid); // sample output: 'hello'
      });

      // Tell KITT to use annyang
      SpeechKITT.annyang();

      // Define a stylesheet for KITT to use
      SpeechKITT.setStylesheet('https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat-amethyst.css');

      // Render KITT's interface
      SpeechKITT.vroom();
      annyang.start()
      self.hasVoiceDetection = true
    } else {
      self.hasVoiceDetection = false
    }
  }


  self.startListening = function () {
    annyang.start()
  }
  self.init()
  return self
}

let Voice = new v()
