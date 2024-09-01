const checkPalindrome = (req, res) => {
    const str = req.query.string;
    let i = 0;
    let j = str.length - 1;

    while(i < j){
        if(str[i] !== str[j]){
            res.status(200).send({response: false});
        }

        i++;
        j--;
    }

    res.status(200).send({response : true});
}

const toLowercase = (req, res) => {
    res.status(200).send({response : req.query.string.toLowerCase()});
}

const toUppercase = (req, res) => {
    res.status(200).send({response : req.query.string.toUpperCase()});
}

module.exports = {
    checkPalindrome,
    toLowercase,
    toUppercase
}