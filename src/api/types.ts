export enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface Payload<T> {
  data: T
}

export interface Response<T> {
  statusCode: string
  code: string
  message: string
  data: T
}
