export function isModuleUnlocked(
  moduleOrder: number,
  completedModuleOrders: number[],
): boolean {
  if (moduleOrder === 1) {
    return true;
  }

  return completedModuleOrders.includes(
    moduleOrder - 1,
  );
}