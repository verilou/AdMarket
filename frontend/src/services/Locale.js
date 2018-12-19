export default class Locale
{
    static text = {};

    static init(locale)
    {
        switch (locale) {
            case 'fr-FR':
                this.text = require('../document/text_content_fr-FR.json');
                break;
        }
    }
}