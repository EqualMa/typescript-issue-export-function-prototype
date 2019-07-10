export function MyCustomException(message: string, customInfo: string) {
  this.name = "MyCustomException";
  this.message = message;
  this.customInfo = customInfo;
}
MyCustomException.prototype = Error.prototype;

export function MyAnotherCustomException(
  message: string,
  anotherCustomInfo: string
) {
  this.name = "MyAnotherCustomException";
  this.message = message;
  this.anotherCustomInfo = anotherCustomInfo;
}
MyAnotherCustomException.prototype = Error.prototype;
