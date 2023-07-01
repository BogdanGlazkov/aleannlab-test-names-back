import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('companies')
export class Name {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'number', nullable: false })
  rank: number;
}
