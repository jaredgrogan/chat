const express = require('express');
const bodyParser = require('body-parser');
const chatbotRoutes = require('./routes/chatbotRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/chat', chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
