import { describe, expect, it, vi } from "vitest";
import useSteps from "./useSteps";

describe('Composable: useSteps', () => {
  it('should creates a stepper instance', () => {
    const stepper = useSteps(3);
    expect(stepper.currentStep.value).toBe(1);
    expect(stepper.totalSteps.value).toBe(3);
  })

  it('should increment steps property', () => {
    const stepper = useSteps(3);
    stepper.forward();
    expect(stepper.currentStep.value).toBe(2);
    stepper.forward();
    expect(stepper.currentStep.value).toBe(3);
    stepper.forward();
    expect(stepper.currentStep.value).toBe(3);
  })

  const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

  it('should not modify currentStep manually', () => {
    const stepper = useSteps(3);
    stepper.currentStep.value = 3;
    expect(consoleSpy).toHaveBeenCalledWith('[Vue warn] Write operation failed: computed value is readonly')
  })

  it('should not modify totalSteps manually', () => {
    const stepper = useSteps(3);
    stepper.totalSteps.value = 7;
    expect(consoleSpy).toHaveBeenCalledWith('[Vue warn] Write operation failed: computed value is readonly')
  })

  it('should creates a stepper', () => {
    const stepper = useSteps(5);
    expect(stepper.currentStep.value).toBe(1);
    expect(stepper.totalSteps.value).toBe(5);
  })
})