/**
 * Configuration used by the GreetFlow. 'saluation' is accessed via '$.helloworld.salutation'
 * similarly any APIBuilder.config parameter can be accessed.
 */
module.exports = {
	target: process.env.TARGET_URL || 'https://www.axway.com'
};
