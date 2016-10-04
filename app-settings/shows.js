
/**
 * @private
 * @param {Object} obj
 * @param {String} path
 */
var _objectpath = function(obj, path) {
    if (typeof path !== 'string') {
        return;
    }
    path = path.split('.');

    while (obj && path.length) {
        obj = obj[path.shift()];
    }
    return obj;
};

exports.app_settings = function(ddoc, req) {

  var settings = (ddoc && ddoc.app_settings) || {},
      meta = ddoc.kanso || ddoc.couchapp,
      path = req.query.objectpath;

  if (path) {
      settings = _objectpath(settings, path);
  }

  return {
    body: JSON.stringify({
      settings: settings,
      meta: meta
    }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  };

};
