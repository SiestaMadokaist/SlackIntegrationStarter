/**
 * @param {(req: import('express').Request, res: import('express').Response, next: import('express').NextFunction) => void} cb
 */
const wrapAsync = (cb) => {
  return async (req, res, next) => {
    // wrap again, in case cb doesn't return a promise
    const action = async () => {
      return cb(req, res, next);
    };
    return action().catch((error) => next(error));
  };
};

module.exports = { wrapAsync };
