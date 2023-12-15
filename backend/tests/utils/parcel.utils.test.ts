import { ParcelEntity } from "../../src/models/parcel.entity";
import { ParcelRequest } from "../../src/types/parcel.request";
import { ParcelResponse } from "../../src/types/parcel.response";
import { ParcelsResponse } from "../../src/types/parcels.response";
import {
  toParcelEntity,
  toParcelResponse,
  toParcelsResponse,
} from "../../src/utils/parcels.utils";

// TODO: Make randomizer for original values
describe("toParcelEntity", () => {
  it("should convert ParcelRequest to ParcelEntity", () => {
    const request: ParcelRequest = {
      parcelSKU: "SKU123",
      description: "Test Parcel",
      streetAddress: "123 Main St",
      town: "Anytown",
      country: "Wonderland",
      deliveryDate: new Date(),
    };

    const entity: ParcelEntity = toParcelEntity(request);

    expect(entity).toBeDefined();
    expect(entity.parcelSKU).toBe(request.parcelSKU);
    expect(entity.description).toBe(request.description);
    expect(entity.streetAddress).toBe(request.streetAddress);
    expect(entity.town).toBe(request.town);
    expect(entity.country).toBe(request.country);
    expect(entity.deliveryDate).toBe(request.deliveryDate);
  });
});

describe("toParcelResponse", () => {
  it("should convert ParcelEntity to ParcelResponse", () => {
    const entity: ParcelEntity = {
      id: "1702671812839-3f75c9da",
      parcelSKU: "SKU123",
      description: "Test Parcel",
      streetAddress: "123 Main St",
      town: "Anytown",
      country: "Wonderland",
      deliveryDate: new Date(),
    };

    const response: ParcelResponse = toParcelResponse(entity);

    expect(response).toBeDefined();
    expect(response.id).toBe(entity.id);
    expect(response.parcelSKU).toBe(entity.parcelSKU);
    expect(response.description).toBe(entity.description);
    expect(response.streetAddress).toBe(entity.streetAddress);
    expect(response.town).toBe(entity.town);
    expect(response.country).toBe(entity.country);
    expect(response.deliveryDate).toBe(entity.deliveryDate);
  });
});

describe("toParcelsResponse", () => {
  it("should convert an array of ParcelEntity to ParcelsResponse", () => {
    const entities: ParcelEntity[] = [
      {
        id: "c",
        parcelSKU: "SKU123",
        description: "Parcel 1",
        streetAddress: "123 Main St",
        town: "Anytown",
        country: "Wonderland",
        deliveryDate: new Date(),
      },
      {
        id: "1702671812840-4a47c8dc",
        parcelSKU: "SKU456",
        description: "Parcel 2",
        streetAddress: "456 Elm St",
        town: "Other Town",
        country: "Fairyland",
        deliveryDate: new Date(),
      },
    ];

    const response: ParcelsResponse = toParcelsResponse(entities);

    expect(response).toBeDefined();
    expect(response.parcels).toHaveLength(entities.length);
    response.parcels.forEach((parcel, index) => {
      const entity = entities[index];

      expect(parcel.id).toBe(entity.id);
      expect(parcel.parcelSKU).toBe(entity.parcelSKU);
      expect(parcel.description).toBe(entity.description);
      expect(parcel.streetAddress).toBe(entity.streetAddress);
      expect(parcel.town).toBe(entity.town);
      expect(parcel.country).toBe(entity.country);
      expect(parcel.deliveryDate).toBe(entity.deliveryDate);
    });
  });
});
