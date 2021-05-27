const express = require('express');
const router = express.Router();
const KubernetesFunFacts = require('../models/Kubernetesfunfacts');
// const { Op } = require("sequelize");


//Get all Catgeories /category
router.get("/", async (req, res) => {
    try {
        let allkubernetesfunfacts = await KubernetesFunFacts.findAll();

        res.send({ funfacts: allkubernetesfunfacts });
    } catch (e) {
        res.status(500).send({ "Error": e });
    }

});

// router.get("/", async (req, res) => {
//     try {

//         res.status(200).json({detail:"System Is Healthy"});
//     } catch (e) {

//         res.status(500).send({ "Error": String(e) });
//     }

// });

module.exports = router;