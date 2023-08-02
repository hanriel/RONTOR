import { Module } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { ComputersController } from './computers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputerEntity } from './entities/computer.entity';

@Module({
  controllers: [ComputersController],
  providers: [ComputersService],
  imports: [TypeOrmModule.forFeature([ComputerEntity])],
})
export class ComputersModule {}
