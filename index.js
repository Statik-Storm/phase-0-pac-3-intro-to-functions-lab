const expect = require("expect");

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(toUpperCase) {
    console.log('HELLO');
}
logShout('HELLO');

function logWhisper(toLowerCase) {
    console.log('hello');
}
logWhisper('hello');

function sayHiToHeadphonedRoommate(string) {
    var hello = 'I can\'t hear you!';
    var HELLO = 'YES INDEED!';
    if (string.toLowerCase(string) === string) {
        return hello;
    }
    else if (string.toUpperCase(string) === string) {
        return HELLO;
    }
    else if ('Let\'s have dinner together!' === string) {
        return ('I would love to!')
    }
}