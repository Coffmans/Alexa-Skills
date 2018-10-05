'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.756ebed2-7b7d-4f32-a689-f12a97ff1b5b";

var SKILL_NAME = 'Niners Suck';

/**
 * Array containing insults.
 */
var INSULTS = [
	"Want to hear a 49ers joke? Colin Kaepernick!",
	"Did you hear that Levi's Stadium had to be resodded?  Thats really sad when you cant even get your own grass to root for you!",
	"I put a Colin Kaepernick bumper sticker on my car and now it won't start.",
	"Colin Kaepernick is a very relatable guy, much like most Americans who don't understand all the legal jargon in their insurance policies, he can't read coverage.",
	"What do the San Francisco 49ers playoff run and the Civil War have in common?  Both of them were ended by a man named Sherman.",
	"What do you call a 49ers player who won a Super Bowl? Grandpa.",
	"Why is the 49ers offensive line like having unprotected sex? Neither can provide protection.",
	"What did the 49ers fan say after his team won the Super Bowl? Dammit mom, why'd you wake me up, I was having an amazing dream",
	"How are the 49ers like my neighbors?  They can't pick up a single yard!",
	"Why is Vernon Davis like a grizzly bear? Every fall he goes into hibernation.",
	"What do the 49ers and the Post Office have in common? Neither deliver on Sundays!",
	"Why doesn't Michael Crabtrees home have electricity? He's already used to living in Richard Sherman’s shadow.",
	"How many 49ers fans does it take to change a light bulb? None they are happy living in Seattle's shadow!",
	"What's the difference between the 49ers and cigarettes?  Russell Wilson doesn't smoke cigarettes. ",
	"What do the San Francisco 49ers and a Chick-Fil-A manager have in common?  Neither one shows up for work on Sunday.",
	"What is the difference between a porcupine and Candlestick park? Candlestick park has 60 thousand pricks on the inside.",
	"How do you know the California State Police are seriously enforcing the Speed Limits into San Francisco.  For the first offense, they give you two 49ers tickets. If you get stopped a second time, they make you use them.",
	"How do you stop an San Francisco 49ers fan from beating his wife?  Dress her in New Orleans Black and Gold!",
	"How do you recognize a 49er in a department store? He's the one trying to slam the revolving door.",
	"What do 49er fans and laxatives have in common? Both irritate the absolute crap out of you!",
	"Where do you go in San Francisco in case of a tornado?  Candlestick Park - they never get a touchdown there!",
	"Why doesn't Sacramento have a professional football team?  Because then San Francisco would want one.",
	"Why are 49ers jokes getting dumber and dumber? Because 49ers fans have started to make them up themselves.",
	"What's the difference between the San Francisco 49ers and a pinball machine?  The pinball machine scores more points.",
	"49ers fan doesn't always eat pastries, but when he does it's usually a turnover.",
	"What's the difference between the 49ers and a dollar bill? You can still get four quarters out of a dollar bill.",
	"What do the 49ers and possums have in common? Both play dead at home and get killed on the road!",
	"What is the difference between a 49ers fan and a baby? The baby will stop whining after awhile.",
	"Why do ducks fly over Candlestick Park upside down? There's nothing worth craping on!",
	"How many 49ers fans does it take to change a lightbulb? None. Lava lamps don't burn out man!",
	"How many 49ers does it take to change a tire? One, unless it's a blowout, in which case they all show up",
	"Why are so many 49ers players claiming they have the Swine Flu? So They don't have to touch the pigskin!",
	"Did you hear that the 49ers football team doesn't have a website? They can't string three W's together.",
	"What does a 49ers fan and a bottle of beer have in common? They're both empty from the neck up."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetInsult');
    },
    'GetNewInsultIntent': function () {
        this.emit('GetInsult');
    },
    'GetInsult': function () {
        // Get a random insult from the insuls list
        var insultIndex = Math.floor(Math.random() * INSULTS.length);
        var randomInsult = INSULTS[insultIndex];

        // Create speech output
        var speechOutput = "Here goes... " + randomInsult;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomInsult)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me why the niners suck, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};