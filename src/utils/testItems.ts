import genf from './generalFunctions';
import { phoneMask } from './phoneMask';

function generateStakeholders(amount: number){
    let stakeholdersList = [];

    for(let i = 0; i < amount; i++){
        stakeholdersList.push({
            id: genf.makeRandomString(15),
            name: genf.makeRandomString(10),
            phone: phoneMask(genf.makeRandomString(11, 'numbers')),
            email: genf.makeRandomString(10) + '@' + ['gmail', 'outlook', 'hotmail', 'clieent'][Math.floor(Math.random() * 3)] + '.com',
            company: genf.makeRandomString(10),
            position: genf.makeRandomString(10),
            projects: genf.makeRandomString(10),
            proposals: genf.makeRandomString(10),
            color: genf.makeRandomHexColor(),
            avatar_url: `https://i.pravatar.cc/150?img=${genf.makeRandomNumber(1, 70)}`,
            birthdate: `${('0' + genf.makeRandomNumber(1, 31)).slice(-2)}/${('0' + genf.makeRandomNumber(1, 12)).slice(-2)}/${genf.makeRandomNumber(1920, 2023)}`,
            tags: generateTags(Math.floor(Math.random() * 7)),
            hasMoreContacts: genf.randomBinary(),
            selected: false
        })
    }

    return stakeholdersList;
}

function generateTags(amount: number = 10, defaultTextColor?: string, defaultBackgroundColor?: string){
    let tags = [];
    for(let i = 0; i < amount; i++){
        tags.push({
            id: i.toString(),
            text: `Tag_${genf.makeRandomString(Math.floor(Math.random() * (15 - 5 + 1) + 5), 'letnum')}`,
            selected: false,
            backgroundColor: defaultBackgroundColor ?? genf.makeRandomHexColor(),
            textColor: defaultTextColor ?? genf.makeRandomHexColor(),
            borderColor: Math.floor(Math.random() * 2) == 1 ? 'white' : ''
        });
    }
    
    return tags;
}

const testItems = {
    generateStakeholders,
    generateTags
}

export default testItems;