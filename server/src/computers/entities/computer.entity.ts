import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('computers')
export class ComputerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint')
  inv: number;

  @Column()
  hostname: string;

  @Column()
  type: number;

  @Column({
    default: 0,
  })
  model: string;

  @Column({
    default: 0,
  })
  os: number;

  @Column({
    default: 0,
  })
  cpu: string;

  @Column({
    default: 0,
  })
  cpu_cores: number;

  @Column({
    default: 0,
  })
  cpu_base: number;

  @Column({
    default: 0,
  })
  ram_slots: number;

  @Column({
    default: 0,
  })
  ram_type: number;

  @Column({
    default: 0,
  })
  ram_modules: number;

  @Column({
    default: 0,
  })
  ram_size: number;

  @Column({
    default: 0,
  })
  disk_type: boolean;

  @Column({
    default: 0,
  })
  disk_space: number;

  @Column({
    default: false,
  })
  speak: boolean;

  @Column({
    default: false,
  })
  mic: boolean;

  @Column({
    default: 0,
  })
  usb: number;

  @Column({
    default: 0,
  })
  hdmi: number;

  @Column({
    default: 0,
  })
  vga: boolean;

  @Column({
    default: 0,
  })
  dvi: number;

  @Column({
    default: false,
  })
  wan: boolean;

  @Column({
    default: 100,
  })
  psu: number;

  @Column({
    default: '',
  })
  photo: string;
}
