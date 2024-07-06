const app = require('./app');
const configVariables = require('./config/config');

app.listen(configVariables.PORT || 8080, () => {
    console.log(`LISTENING ON PORT ${configVariables.PORT}`);
});

