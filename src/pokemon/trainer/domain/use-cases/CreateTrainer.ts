
import { Trainer } from '../entities/Trainer';
import { type TrainerForm } from '../entities/TrainerForm';
import { type TrainerRepository } from '../entities/TrainerRepository';
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