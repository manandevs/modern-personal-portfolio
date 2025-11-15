
type ClassValue = string | number | null | boolean | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  let str = '';
  for (let i = 0; i < inputs.length; i++) {
    const arg = inputs[i];
    if (!arg) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      str && (str += ' ');
      str += arg;
    } else if (Array.isArray(arg) && arg.length) {
      const inner = cn(...arg);
      if (inner) {
        str && (str += ' ');
        str += inner;
      }
    }
  }
  return str;
}
