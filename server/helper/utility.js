import * as errorModule from './error.js';

const {
    ApplicationError, 
    ErrorCodes, 
    NotAuthorizedError, 
    InternalError, 
    UserError, 
    NotFoundError, 
    ForbiddenError
} = errorModule;

export const successBody = (obj) => {
  return {
    status: 1,
    code: ErrorCodes.ERR_NONE,
    message: obj.message || "success",
    data: {
      ...obj,
    }
  };
};

export const errorBody = (err, obj = {}) => {
  if (err instanceof ApplicationError) {
    return {
      status: 0,
      code: err.code,
      message: err.message,
      data: {
        ...obj,
      }
    };
  } else if (err instanceof Error) {
    return {
      status: 0,
      code: ErrorCodes.ERR_BAD_REQUEST,
      message: err.message,
      data: {
        ...obj,
      }
    };
  } else {
    return {
      status: 0,
      code: ErrorCodes.ERR_BAD_REQUEST,
      message: err,
      data: {
        ...obj,
      }
    };
  }
};
