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

export const successBody = async(obj) => {
  return {
    status: 1,
    code: ErrorCodes.ERR_NONE,
    message: "success",
    ...obj,
  };
};

export const errorBody = async(err, obj = {}) => {
  if (err instanceof ApplicationError) {
    return {
      status: 0,
      code: err.code,
      message: err.message,
      ...obj,
    };
  } else if (err instanceof Error) {
    return {
      status: 0,
      code: ErrorCodes.ERR_BAD_REQUEST,
      message: err.message,
      ...obj,
    };
  } else {
    return {
      status: 0,
      code: ErrorCodes.ERR_BAD_REQUEST,
      message: err,
      ...obj,
    };
  }
};
