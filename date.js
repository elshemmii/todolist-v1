//exports function getDate()
exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    };
    return today.toLocaleDateString("en-US", options);
}

//exports function getDate()
exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long",

    };
    return today.toLocaleDateString("en-US", options);
}

