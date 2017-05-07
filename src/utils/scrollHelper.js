import $ from 'jquery';
import './scrollHelper.scss';

export default class ScrollHelper {
  constructor(options) {
    this.target = $(options.target);
    this.mouseContainer = null;
    this.mouse = null;

    this.leftOffset = options.offset.left;
    this.rightOffset = options.offset.right;
    this.topOffset = options.offset.top;
    this.bottomOffset = options.offset.bottom;

  }


  init() {
    this.removeSecond();
    const html = `
        <div class='mouse-container'>
          <div class='mouse'>
            <span class='scroll-down'></span>
            <i class="mouse__chevron"></i>
          </div>
        </div> `;

    this.target.append(html);

    this.mouseContainer = $('.mouse-container');
    this.mouse = $('.mouse', this.mouseContainer);

    this.mouse.css({
      position: 'absolute',
      left: this.leftOffset,
      right: this.rightOffset,
      top: this.topOffset,
      bottom: this.bottomOffset
    });
  }

  removeSecond(){
    $('.mouse-container:not(.mouse-container:first-child)').remove();
  }

}

