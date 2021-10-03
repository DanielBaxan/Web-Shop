import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

//This intercept if not catched in the code ....

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    // console.log(
    //   '🚀 ~ file: AllExceptionsFilter.ts ~ line 14 ~ AllExceptionsFilter ~ exception',
    //   Object.getOwnPropertyNames(exception),
    //   'exception instanceof Error = ',
    //   exception instanceof Error,
    //   ' exception instanceof HttpException=',
    //   exception instanceof HttpException,
    // );
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = 200;
    console.log(
      '🚀 ~ file: AllExceptionsFilter.ts ~ line 29 ~ AllExceptionsFilter ~ exception',
      exception,
    );
    status = 500;

    if (exception instanceof HttpException) {
      status = exception['status'];
    } else {
      status =
        exception instanceof Error &&
        Object.getOwnPropertyNames(exception).includes('statusCode')
          ? exception['statusCode']
          : HttpStatus.INTERNAL_SERVER_ERROR;

      // console.log(
      //   '🚀 ~ file: AllExceptionsFilter.ts ~ line 39 ~ AllExceptionsFilter ~ status',
      //   status,
      // );
    }

    // console.log(
    //   'Message = ',
    //   Object.getOwnPropertyNames(exception),
    //   // .includes('message'),
    // );

    let msg = '';
    if (Object.getOwnPropertyNames(exception).includes('message'))
      msg += exception['message'];

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: `intercepted by AllExceptionFilter. => ${msg} `,
      response: Object.getOwnPropertyNames(exception).includes('response')
        ? exception['response']
        : '',
      path: request.url,
    });
  }
}
