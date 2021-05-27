const express = require('express');
const router = express.Router();
const KubernetesFunFacts = require('../models/Kubernetesfunfacts');
const MicrosoftFunFacts = require('../models/Microsoftfunfact');

//Get all funfacts for a subject
router.get("/", async (req, res) => {

    let Model = getModel(process.env.FUN_FACT_TABLE)

    try {
        let funfacts = await Model.findAll();

        res.send({ funfacts: funfacts });
    } catch (e) {
        res.status(500).send({ "Error": e });
    }

});

//Check if system is healthy
router.get("/healthy", async (req, res) => {
    try {
        res.status(200).json({ detail: "System Is Healthy" });
    } catch (e) {

        res.status(500).send({ "Error": String(e) });
    }

});

function getModel(table_name) {
    console.log("table_name: ", table_name)
    if (table_name === 'Kubernetes') {
        return KubernetesFunFacts
    } else if (table_name === 'Microsoft') {
        return MicrosoftFunFacts
    }
}

module.exports = router;