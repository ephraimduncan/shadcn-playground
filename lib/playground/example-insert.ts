export function shouldConfirmExampleReplace(
  currentCode: string,
  nextExampleCode: string,
): boolean {
  return currentCode.trim().length > 0 && currentCode !== nextExampleCode;
}
