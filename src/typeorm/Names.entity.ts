import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('names')
export class Name {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', unique: true, nullable: false })
  name: string;

  @Column({ type: 'numeric', nullable: false })
  rank: number;
}
