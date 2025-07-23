export function getRandomGreeting(): string {
  return Math.random() < 0.5 ? "hi" : "bye";
}