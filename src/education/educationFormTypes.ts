export type ValidatorFunction<T> = (value: T, ...args: string[]) => boolean;

export type FormValidations<T> = {
    [K in keyof T]: [ValidatorFunction<T[K]>, string];
};

export interface EducationFormInterface {
    name: string;
    institution: string;
    degreeType: string;
    startDate: Date | null;
    endDate: Date | null;
    status: string;
}