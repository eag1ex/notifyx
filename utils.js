exports.objectSize = (obj) => (obj && (Object.prototype === (obj).__proto__)) ? Object.entries(obj).length : 0