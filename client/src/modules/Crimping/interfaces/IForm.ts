export interface IForm {
    styles: {
        readonly [key: string]: string;
    };
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}
