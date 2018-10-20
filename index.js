const zucc = require('say');

zucc.speak("Hello", 1.40, (err) => {
    if (err) {
      return console.error(err)
    }
    console.log('Text has been spoken.')
  });