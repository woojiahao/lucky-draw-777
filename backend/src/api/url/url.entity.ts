import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Url {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'varchar', length: 255 })
    public original: string;

    @Column({ type: 'varchar', length: 255 })
    public hash: string;

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt!: Date;
}