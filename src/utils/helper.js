/**
 * @param {(req: import('express').Request, res: import('express').Response, next: import('express').NextFunction) => void} cb
 */
const expressWrapper = (cb) => {
  return async (req, res, next) => {
    return cb(req, res, next).catch((error) => next(error));
  };
};

module.exports = { wrapAsync: expressWrapper };
