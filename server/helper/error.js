const ErrorCodes = {
  ERR_NONE: "ERR_NONE",
  ERR_INTERNAL: "ERR_INTERNAL",
  ERR_BAD_REQUEST: "ERR_BAD_REQUEST",
  ERR_NOT_FOUND: "ERR_NOT_FOUND",
  ERR_NOT_AUTHORIZED: "ERR_NOT_AUTHORIZED",
  ERR_NOT_IMPLEMENTED: "ERR_NOT_IMPLEMENTED",
  ERR_FORBIDDEN: "ERR_FORBIDDEN",
  ERR_VALIDATION: "ERR_VALIDATION",
  ERR_DATABASE: "ERR_DATABASE",
  ERR_DATABASE_TIMEOUT: "ERR_DATABASE_TIMEOUT",
  ERR_ACCESS_TOKEN_EXPIRED: "ERR_ACCESS_TOKEN_EXPIRED",
  ERR_REFRESH_TOKEN_EXPIRED: "ERR_REFRESH_TOKEN_EXPIRED",
  ERR_PAYLOAD_TOO_LARGE: "ERR_PAYLOAD_TOO_LARGE",
  ERR_CONFLICT: "ERR_CONFLICT",
};

export class ApplicationError extends Error {
  constructor(code, message, httpCode = 400) {
    super(message);
    this._code = code;
    this._httpCode = httpCode;
  }

  get code() {
    return this._code;
  }
  get httpCode() {
    return this._httpCode;
  }
}

export class InternalError extends ApplicationError {
  constructor(message, code = ErrorCodes.ERR_INTERNAL, httpCode = 500) {
    super(code, message, httpCode);
  }
}

export class UserError extends ApplicationError {
  constructor(message, code = ErrorCodes.ERR_BAD_REQUEST, httpCode = 400) {
    super(code, message, httpCode);
  }
}

export class NotAuthorizedError extends UserError {
  constructor(
    message = "Not authorized",
    code = ErrorCodes.ERR_NOT_AUTHORIZED
  ) {
    super(message, code, 401);
  }
}

export class ForbiddenError extends UserError {
  constructor(message = "Forbidden") {
    super(message, ErrorCodes.ERR_FORBIDDEN, 403);
  }
}

export class NotImplementedError extends UserError {
  constructor(message = "Not implemented") {
    super(message, ErrorCodes.ERR_NOT_IMPLEMENTED, 501);
  }
}

export class NotFoundError extends UserError {
  constructor(message = "Not found") {
    super(message, ErrorCodes.ERR_NOT_FOUND, 404);
  }
}

export class PayloadTooLargeError extends UserError {
  constructor(message = "File size is too large") {
    super(message, ErrorCodes.ERR_PAYLOAD_TOO_LARGE, 413);
  }
}

export class ConflictError extends UserError {
  constructor(message = "Duplicate found") {
    super(message, ErrorCodes.ERR_CONFLICT, 409);
  }
}

export { ErrorCodes };
