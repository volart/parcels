export interface ParcelRequest {
    parcelSKU: string;
    description: string;
    streetAddress: string;
    town: string;
    country: string;
    deliveryDate: Date;
}
