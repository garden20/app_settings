exports.app_settings = function(doc, req) {

  var settings = (doc && doc.app_settings) || {};

  return {
    body: JSON.stringify(settings),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  };

};