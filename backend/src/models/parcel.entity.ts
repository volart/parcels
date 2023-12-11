import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("parcel")
export class ParcelEntity {
    @PrimaryGeneratedColumn()
    id: number

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
