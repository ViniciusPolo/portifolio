const Languages = require('../models/LanguagesModel');

console.log("entrei aqui")

module.exports={
    async indexAll (req, res){
        const languages = await Languages.findAll()
        return res.json(languages)
    },

    async store (req,res){
        const {language, words} = req.body
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

    async indexOne (req,res){
        const {language} = req.params
        console.log(req.params)
        const languages = await Languages.findAll({
            where: {language: language}
        })
        return res.status(200).send({
            status: 1,
            message: `Language ${language} found` ,
            languages
        })
    },

    async update (req,res){
        const {language} = req.params
        const {words} = req.body
        console.log(req.params)
        const languages = await Languages.update({
            words : words},
            {where: {language: language}
        })
        return res.status(200).send({
            status: 1,
            message: `Language ${language} updated` ,
            languages
        })
    }
}