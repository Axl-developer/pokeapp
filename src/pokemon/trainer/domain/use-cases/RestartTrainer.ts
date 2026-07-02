import { type TrainerRepository } from "../entities/TrainerRepository";


export class RestartTrainer {
  constructor(
     private repository: TrainerRepository,
  ) {}

  execute() {

    this.repository.restart();
  }
}