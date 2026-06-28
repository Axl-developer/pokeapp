import { TrainerForm } from '../../presentation/types/TrainerForm';
import { Trainer } from '../entities/Trainer';
import { TrainerRepository } from '../repositories/TrainerRepository';
import { UuidGenerator } from '../services/UuidGenerator';

export class CreateTrainer {
  constructor(
     private repository: TrainerRepository,
     private idGenerator: UuidGenerator,
  ) {}

  execute(form: TrainerForm) {
    const trainer: Trainer = {
      id: this.idGenerator.generate(),
      ...form,
    };

    this.repository.create(trainer);
  }
}