export class UnsupportedActionError extends Error {
  code = 'UNSUPPORTED_ACTION';
  statusCode = 400;
  constructor(message = 'Action not supported by adapter') { super(message); }
}

export class AdapterNotReadyError extends Error {
  code = 'ADAPTER_NOT_READY';
  statusCode = 503;
  constructor(message = 'Adapter not initialized') { super(message); }
}
