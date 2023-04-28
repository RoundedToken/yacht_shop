export interface IBrandSelectItem {
    styles: {
        readonly [key: string]: string;
    };
    selectedBrands: string[];
    brandOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    brand: string;
}
