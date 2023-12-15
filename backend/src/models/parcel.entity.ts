import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("parcel")
export class ParcelEntity {
    @PrimaryColumn()
    id: string

    @Column()
    parcelSKU: string

    @Column("text")
    description: string

    @Column()
    streetAddress: string

    @Column()
    town: string

    @Column()
    country: string

    @Column({ type: "date"})
    deliveryDate: Date
}
