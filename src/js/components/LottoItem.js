import Component from '../abstracts/component';
import LottoImage from '../../../images/lotto.png';

class LottoItem extends Component {
  constructor() {
    super();
    this.lottoNums = this.getAttribute('data-lotto-nums');
  }

  connectedCallback() {
    this.render();
    this.subscribe();
  }

  render() {
    this.innerHTML = this.template(this.lottoNums);
  }

  template(lottoNums) {
    return `
      <li><img src=${LottoImage} />${lottoNums}</li>
    `;
  }
}

customElements.define('lotto-item', LottoItem);

export default LottoItem;
