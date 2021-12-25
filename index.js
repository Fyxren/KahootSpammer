const KahootSpam = require('kahoot-spam');
const prompts = require('prompts');

(async () => {

    const questions = [
        {
            type: 'number',
            name: 'code',
            message: 'What is the lobby code?'
        },
        {
            type: 'text',
            name: 'name',
            message: 'What do you want the name to be?'
        },
        {
            type: 'number',
            name: 'amount',
            message: 'How many \'users\' do you want?'
        }
    ]

    const res = await prompts(questions);
    await console.table(res);

    const confirmPrompt = await prompts({
        type: 'confirm',
        name: 'confirm',
        message: 'Is this right?'
    });

    if (!confirmPrompt.confirm) {
        console.log('🛑 • Okay boss, I stopped');
    } else {
        console.log('⚠️ • Attempting to spam...');
        KahootSpam.spam(res.code, res.name, res.amount);
    }

})();