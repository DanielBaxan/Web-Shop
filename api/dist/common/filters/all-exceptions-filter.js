"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = 200;
        console.log('🚀 ~ file: AllExceptionsFilter.ts ~ line 29 ~ AllExceptionsFilter ~ exception', exception);
        status = 500;
        if (exception instanceof common_1.HttpException) {
            status = exception['status'];
        }
        else {
            status =
                exception instanceof Error &&
                    Object.getOwnPropertyNames(exception).includes('statusCode')
                    ? exception['statusCode']
                    : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        }
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
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exceptions-filter.js.map