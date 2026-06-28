import { TrainerRepository } from '../repositories/TrainerRepository';

export class RestartTrainer {
  constructor(
     private repository: TrainerRepository,
  ) {}

  execute() {

    this.repository.restart();
  }
}