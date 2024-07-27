const faqService = require('../services/faqService');
const emailService = require('../services/emailService');

exports.getResponse = async (req, res) => {
    const { message } = req.body;
    try {
        const response = await faqService.getFAQResponse(message);
        res.json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ response: "Sorry, I couldn't process your request." });
    }
};
