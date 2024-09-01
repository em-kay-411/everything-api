const performAddition = (req, res) => {
    res.status(200).send({response : Number(req.query.a) + Number(req.query.b)});
}

const performSubtraction = (req, res) => {
    res.status(200).send({response : Number(req.query.a) - Number(req.query.b)});
}

const performMultiplication = (req, res) => {
    res.status(200).send({response : Number(req.query.a) * Number(req.query.b)});
}

const performDivision = (req, res) => {
    try{
        res.status(200).send({response : Number(req.query.a) / Number(req.query.b)});
    }
    catch(err){
        res.status(404).send({message : 'Error'})
    }
    
}

module.exports = {
    performAddition,
    performDivision,
    performMultiplication,
    performSubtraction
}