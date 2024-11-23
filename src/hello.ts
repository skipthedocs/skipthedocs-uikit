type Args = {
  firstName: string;
};

export function helloWorld({ firstName }: Args) {
  console.log(`Hello ${firstName}`);
}
