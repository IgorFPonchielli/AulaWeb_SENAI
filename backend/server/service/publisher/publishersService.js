const publishersData = require('../../data/publisher/publishersData');

exports.getPublishers = function() {
    return publishersData.getPublishers();
}

exports.getPublisher = function(publisherCod) {
    return publishersData.getPublisher(publisherCod);
}

exports.deletePublisher = function(publisherCod) {
    return publishersData.deletePublisher(publisherCod);
}

exports.savePublisher = function(publisher) {
    return publishersData.savePublisher(publisher);
}