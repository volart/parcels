export interface ParcelResponse {
    id: number;
    parcelSKU: string;
    description: string;
    streetAddress: string;
    town: string;
    country: string;
    deliveryDate: Date;
}
