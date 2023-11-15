import { shallowMount } from '@vue/test-utils';
import SimpleCalculator from '@/components/SimpleCalculator.vue';

describe('SimpleCalculator', () => {
  test('clear method should reset the current value', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: '123' }); // Set an initial value
    wrapper.vm.clear(); // Call the clear method
    expect(wrapper.vm.current).toBe(''); // Verify that the current value is reset to an empty string
  });
  it('should update the current value correctly', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: '5', previous: '3', operator: (a, b) => a + b})

    wrapper.vm.equal();

    expect(wrapper.vm.current).toBe('8');
  });
  it('plus function correctly add two numbers', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: 5, previous: 3, operator: (a, b) => a + b});
    wrapper.vm.plus = function() {
      this.current = this.operator(this.current, this.previous);
    };
    wrapper.vm.plus();
    expect(wrapper.vm.current).toBe(8);
  });
  it('minus function should correctly subtract two numbers', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: 5, previous: 3, operator: (a, b) => a - b});
    wrapper.vm.minus = function() {
      this.current = this.operator(this.current, this.previous);
    };
    wrapper.vm.minus();
    expect(wrapper.vm.current).toBe(2);
  });
  it('should multiply two numbers correctly', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: 2, previous: 3, operator: (a, b) => a * b});
    wrapper.vm.times = function() {
      this.current = this.operator(this.current, this.previous);
    };
    wrapper.vm.times();
    expect(wrapper.vm.current).toBe(6);
  });
  it('should divide two numbers correctly', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: 10, previous: 2, operator: (a, b) => a / b});
    wrapper.vm.divide = function() {
      this.current = this.operator(this.current, this.previous);
    };
    wrapper.vm.divide();
    expect(wrapper.vm.current).toBe(5);
  });
  it('should append the number to the current value', () => {
    const wrapper = shallowMount(SimpleCalculator);
    const number = '5';
    wrapper.setData({ current: '10'});
    wrapper.vm.append(number);
    expect(wrapper.vm.current).toBe('105');
  });
  it('should calculate the percentage correctly', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: '50'});
    wrapper.vm.percent();
    expect(wrapper.vm.current).toBe('0.5');
  });
  it('should append a dot to the current value if it does not already contain a dot', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: '10'});
    wrapper.vm.dot();

    expect(wrapper.vm.current).toBe('10.');
  });
  it('should not append a dot the current value if it already contains a dot', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: '10.5'});
    wrapper.vm.dot();

    expect(wrapper.vm.current).toBe('10.5');
  });
  it('should toggle the sign of the current number', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: '5'});

    // Positive number
    expect(wrapper.vm.current).toBe('5');

    // Trigger sign method
    wrapper.vm.sign();

    // Current number should be negative
    expect(wrapper.vm.current).toBe('-5');
    
    // Trigger sign method again
    wrapper.vm.sign();

    // Current number should be positive once again
    expect(wrapper.vm.current).toBe('5');
  });
  it('should update the "previous" data property correctly', () => {
    const wrapper = shallowMount(SimpleCalculator);
    wrapper.setData({ current: '5', operatorClicked: false});

    wrapper.vm.setPrevious();

    expect(wrapper.vm.previous).toBe('5');
    expect(wrapper.vm.operatorClicked).toBe(true);
  });
});