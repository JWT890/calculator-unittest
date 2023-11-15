import { mount } from '@vue/test-utils';
import SimpleCalculator from '@/components/SimpleCalculator.vue';

describe('SimpleCalculator', () => {
  test('clear method should reset the current value', () => {
    const wrapper = mount(SimpleCalculator);
    wrapper.setData({ current: '123' }); // Set an initial value
    wrapper.vm.clear(); // Call the clear method
    expect(wrapper.vm.current).toBe(''); // Verify that the current value is reset to an empty string
  });
  it('should update the current value correctly', () => {
    const wrapper = mount(SimpleCalculator);
    wrapper.setData({ current: '5', previous: '3', operator: (a, b) => a + b})

    wrapper.vm.equal();

    expect(wrapper.vm.current).toBe('8');
  });
  it('plus function correctly add two numbers', () => {
    const wrapper = mount(SimpleCalculator);
    wrapper.setData({ current: '5', previous: '3', operator: (a, b) => a + b});

    wrapper.vm.plus();

    expect(wrapper.vm.current).toBe('5');
  });
});