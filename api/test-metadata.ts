import "reflect-metadata";

class User {
  name!: string;
}

const meta = Reflect.getMetadata("design:type", new User(), "name");
console.log("Metadata:", meta);