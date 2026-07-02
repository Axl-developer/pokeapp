
import * as Crypto from "expo-crypto";
import { type UuidGenerator } from "../../domain/services/UuidGenerator";

export class ExpoUuidGenerator implements UuidGenerator {
  generate(): string {
    return Crypto.randomUUID();
  }
}