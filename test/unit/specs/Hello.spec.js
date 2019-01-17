import Vue from 'vue';
import Home from '@/components/Home';
import { mount } from '@vue/test-utils';

describe('Dashboard.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App');
  });

  it('should have a login button that hides to show QR code on click', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();

    const wrapper = mount(Home);

    let loginButton = vm.$el.querySelector('#login');
    // let qrCode = vm.$el.querySelector('#qr-code');

    expect(loginButton.textContent).to.equal('Login');
    // document.getElementById('login').click();
    // expect(qrCode).to.equal(null);

    loginButton.click();
    vm.generateQrCode();

    wrapper.find('#login').trigger('click');

    // vm.$el.querySelector('#login').trigger('click');

    // expect(loginButton).to.equal(null);
    // expect(qrCode.getAttribute('value')).to.equal('0xcd234a471b72ba2f1ccf0a70fcaba648a5eecd8d');
  });
});
