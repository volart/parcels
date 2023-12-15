### Commands to run
```bash
npx tsc
node ./dist/app.js
npm test
```


### Manual test

When the server is running you can test:

1) Creating of a parcel
```bash
curl -X POST http://localhost:3000/api/parcel \
-H "Content-Type: application/json" \
-d '{
    "parcelSKU": "SKU1111",
    "description": "Sample parcel description",
    "streetAddress": "123 Main St",
    "town": "Anytown",
    "country": "Wonderland",
    "deliveryDate": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"
}'
```

### Commands log
```bash
npm install ts-node --save-dev
npm install typeorm --save
npm install reflect-metadata --save
npm install pg --save
npx typeorm init --database postgres
npx typeorm entity:create src/models/parcel
npm install --save-dev jest ts-jest ts-node @types/jest @types/supertest @types/express
npx ts-jest config:init
```
