export type ValidatorFunction<T> = (value: T, ...args: string[]) => boolean;

export type FormValidations<T> = {
    [K in keyof T]: [ValidatorFunction<T[K]>, string];
};

export type ValidationFields<T> = {
    [K in keyof T as `${string & K}Valid`]: string | null;
};