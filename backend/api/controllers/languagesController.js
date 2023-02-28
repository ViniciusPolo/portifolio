const Languages = require('../models/LanguagesModel');

module.exports = {
    async indexAll(req, res) {
        const languages = await Languages.findAll()
        return res.json(languages)
    },

    async store(req, res) {
        const { language, words } = req.body
        const languages = await Languages.create({
            language,
            words
        })
        return res.status(200).send({
            status: 1,
            message: "Language sucessefull included",
            languages
        })
    },

    async indexOne(req, res) {
        const { language } = req.params
        console.log(req.params)
        const languages = await Languages.findAll({
            where: { language: language }
        })
        return res.status(200).send({
            status: 1,
            message: `Language ${language} found`,
            languages
        })
    },

    async update(req, res) {
        const { language } = req.params
        const { words } = req.body
        const languages = await Languages.update({
            words: words
        },
            {
                where: { language: language }
            })
        return res.status(200).send({
            status: 1,
            message: `Language ${language} updated`,
            languages
        })
    },

    async addWord(req, res) {
        const { language } = req.params
        const { englishword, word } = req.query

        if (!englishword) {
            return res.status(400).send({
                status: 1,
                message: `We need a english word to reference`
            })
        }
        if (!word) {
            return res.status(400).send({
                status: 1,
                message: `We need a word to add`
            })
        }
        let key = englishword

        const languagesToAdd = await Languages.findAll({
            where: { language: language }
        })
        const savedwords = JSON.parse(languagesToAdd[0].dataValues.words)
        savedwords[key] = word

        const languages = await Languages.update({
            words: {
                ...savedwords
            }
        },
            {
                where: { language: languagesToAdd[0].dataValues.language }
            })
        return res.status(200).send({
            status: 1,
            message: `Word ${word} sucessfully included on language ${language}`,
            languages
        })
    }
}