// Visual configuration

export interface IOptionProps {
    key: string;
    text: string;
}

export interface ISourceData {
    id?: number;
    title: string;
    type?: string;
    value?: string | number | null;
    isChecked?: boolean;
    minValue?: number;
    maxValue?: number;
    step?: number;
    fields?: ISourceData[];
    options?: IOptionProps[]
}