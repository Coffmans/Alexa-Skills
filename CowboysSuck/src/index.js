'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.d430c86a-f1ca-4d0a-bb81-d0f001d1d749";

var SKILL_NAME = 'Cowboys Suck';

/**
 * Array containing insults.
 */
var INSULTS = [
	"Did you hear about the joke that Tony Romo told his receivers? It went over their heads.",
	"Why can't Tony Romo use the phone anymore? Because he can't find the receiver.",
	"When was the last time cowboys beat anyone? When Dez Bryant beat his mama.",
	"How many Cowboys does it take to win a Super Bowl? Only two, Emmitt Smith and Troy Aikman, and they are both retired.",
	"What did the Giants say to the Cowboys? Look at my Super bowl Ring.",
	"What do the Cowboys and a Chick-Fil-A manager have in common? Neither one shows up for work on Sunday.",
	"What's the difference between John Wayne Bobbitt and Jerry Jones? Jones cut off his own Johnson.",
	"How many Cowboys fans does it take to change a light bulb? None they are happy living in New York’s shadow!",
	"What can the Cowboys and their cheerleaders do together but not apart? Score.",
	"What do they call a drug ring in Dallas? The huddle.",
	"What Does the Cowboys and the movie Brokeback Mountain have in common? They both have cowboys that suck!",
	"Why is Tony Romo unable to answer a telephone? He can't find the receiver.",
	"Want to hear a Cowboys joke? Tony Romo!",
	"Why was Barry Switzer carrying a gun? He was practicing the Run and Shoot.",
	"What's Jerry Jones biggest Collective Bargaining concern? If Bail Money count against the Salary Cap.",
	"Why can't Michael Irvin get into a huddle on the field anymore? It is a parole violation for him to associate with known felons.",
	"Did you know the Cowboys had a 11 and 5 season this year.A: 11 arrests, 5 convictions.",
	"What do you say to a Cowboy in a suit? Will the defendant please rise.",
	"What do you call 53 millionaires around a TV watching the Super Bowl? The Cowboys.",
	"What do the Cowboys and Billy Graham have in common? They both can make 70,000 people stand up and yell Jesus Christ.",
	"How do you keep a Cowboys out of your yard? Put up goal posts.",
	"What do the Cowboys and vacuums have in common? They both suck",
	"What is a Cowboy fan's favorite whine?  We can't beat New York.",
	"What’s difference between a bucket of poo and a Cowboys fan? The bucket.",
	"If you have a car containing a Cowboys wide receiver, a Cowboys linebacker, and a Cowboys defensive back, who is driving the car? The cop.",
	"What should you do if you find three Cowboys football fans buried up to their neck in cement? Get more cement.",
	"What's the difference between an Cowboys fan and a carp? One is a bottom-feeding, scum sucker, and the other is a fish. ",
	"How did the Cowboys fan die from drinking milk?A. The cow fell on him!",
	"What's the best way to teach your dog to roll over and play dead? Have him watch a couple Cowboys games.",
	"What does a Cowboys fan do when his team has won the Super Bowl? He turns off the PlayStation 4.",
	"What do you call a Cowboy in the Super Bowl? A referee.",
	"Why do Cowboys fans keep their season tickets on their dashboards? So they can park in handicap spaces. ",
	"How do the Cowboys spend the first week of training camp? Studying the Miranda Rights.",
	"When is the last time the Cowboys beat the Redskins? When they gave the Redskins smallpox filled blankets.",
	"Why should Texas succeed from the union? So the Cowboys will no longer be America's Team.",
	"Why do the Cowboys want to change their name to the Tampons? Because they are only good for one period and do not have a second string!",
	"Where do you go in in case of a tornado? Cowboys Stadium - they never get a touchdown there!",
	"Why doesn't El Paso have a professional football team? Because then Dallas would want one.",
	"Why are Cowboys jokes getting dumber and dumber? Because Cowboys fans have started to make them up themselves.",
	"What's the difference between Cowboys fans and mosquitoes? Mosquitoes are only annoying in the summer.",
	"What's the difference between the Cowboys and a pinball machine? The pinball machine scores more points.",
	"Why was Jason Garrett upset when the Cowboys playback was stolen? Because he hadn’t finished coloring it. ",
	"According to a new poll 91 percent of people are satisfied with their lives. The other 9 percent are Cowboys fans.",
	"My wife was about to put my son in a Cowboys jersey, but I reminded her it was a choking hazard.",
	"I took my broken vacuum cleaner back to the store. They put a Cowboys jersey on it and now it sucks again.",
	"Are you scared of catching the flu? Just hang in the Cowboys end zone, they don't catch anything there.",
	"What do you call 47 people sitting around a TV watching the Playoffs? The Cowboys. ",
	"The Cowboys adopted a new Honor System. Yes, your Honor, No, your Honor."
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
        var speechOutput = "You can say tell me why the cowboys suck, or, you can say exit... What can I help you with?";
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