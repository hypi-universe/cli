
interface Platform {
  validate(): object;
  generate(): Promise<string>;
}
