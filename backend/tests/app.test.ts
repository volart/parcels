import app from '../src/app';
import request from 'supertest'
import * as db from '../src/models/db'


jest.mock('../src/models/db', () => ({
  saveParcel: jest.fn(),
}));

describe("POST /api/parcel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("it should create a new parcel", async () => {
    const now = new Date();

    (db.saveParcel as jest.Mock).mockImplementation((parcel) => {
      parcel.id = 1;
      return parcel;
    });

    const data = {
      parcelSKU: "SKU123456",
      description: "Sample parcel description",
      streetAddress: "123 Main St",
      town: "Anytown",
      country: "Wonderland",
      deliveryDate: now,
    };

    const response = await request(app)
      .post("/api/parcel")
      .send(data)
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 1,
    });
  });

  test("it should 400 for missing data", async () => {
    const missed_data = {
      parcelSKU: "SKU123456",
      description: "Sample parcel description",
      streetAddress: "123 Main St",
      town: "Anytown",
      country: "Wonderland",
    };

    (db.saveParcel as jest.Mock).mockImplementation((_) => {
      throw new Error("QueryFailedError: null value in column \"deliveryDate\" of relation \"parcel\" violates not-null constraint");
    });

    const response = await request(app)
      .post("/api/parcel")
      .send(missed_data)
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Failed to save the parcel." });
  });

  test("it should be 404 for wrong url", async () => {
    const data = {
      parcelSKU: "SKU123456",
      description: "Sample parcel description",
      streetAddress: "123 Main St",
      town: "Anytown",
      country: "Wonderland",
      deliveryDate: new Date(),
    };

    const response = await request(app)
      .post("/api/parcels")
      .send(data)
      .set("Accept", "application/json");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Not Found" });
  });
});