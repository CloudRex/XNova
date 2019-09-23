export enum ResponseStatus {
    OK = "ok",

    Failed = "failed"
}

export default class Response<T = any> {
    public static createDefault<T>(data: T): Response<T> {
        return new Response(ResponseStatus.OK, data);
    }

    public readonly status: ResponseStatus;

    public readonly data: T;

    public constructor(status: ResponseStatus, data: T) {
        this.status = status;
        this.data = data;
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}
