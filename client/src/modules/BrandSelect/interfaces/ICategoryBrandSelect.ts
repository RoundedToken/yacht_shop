export interface ICategoryBrandSelect {
    styles: {
        readonly [key: string]: string;
    };
    categoryId: number;
    selectedBrands: string[];
    brandOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
