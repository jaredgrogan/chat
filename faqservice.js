const documentSearch = require('../utils/documentSearch');

exports.getFAQResponse = async (message) => {
    const response = await documentSearch.searchDocument(message);
    return response || "I couldn't find an answer to that question.";
};
