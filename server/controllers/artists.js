const Artists = require('../models/userModel');


const addArtists = async (req, res) => {
    try {
        req.body.createdBy = req.userId;
        await Artists.create(req.body);
        res.json({ message: "Artist added successfully", success: true});
    } catch (error) {
        console.log(error)
    }

};


const getArtists = async (req, res) => {
    try {
        const artists = await Artists.find();
        res.json({ data: artists, success: true});
    } catch (error) {
        console.log(error)
    }

};

module.exports = {addArtists, getArtists};