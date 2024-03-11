const OpenAI = require("openai");

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

module.exports = async text => {
	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{
				role: "user",
				content: text,
			},
		],
		model: "gpt-4",
	});
	console.log(chatCompletion.choices[0]);
	return chatCompletion.choices[0].message.content;
};
