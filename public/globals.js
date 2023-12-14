class CommonJavascript {
  constructor() {}

  setup() {
    this.init_main_menu();
    this.search();
    this.dotted();
    this.faq();
    this.imageMagnify();
    this.cardDetailsNavigation();
  }

  init_main_menu() {
    const menu_level_1 = document.querySelectorAll('.header_menu_title');
    const menue_level_2 = document.querySelectorAll('.menue_list');
    menu_level_1.forEach(list => {
      let menu_item = list.getAttribute('data-name');
      list.addEventListener('mouseover', () => {
        menue_level_2.forEach(item => {
          let lists = item.getAttribute('data-list');
          if (menu_item == lists) {
            item.classList.remove('hidden');
          } else item.classList.add('hidden');
        });
      });

      menue_level_2.forEach(item => {
        item.addEventListener('mouseover', () => {
          item.classList.remove('hidden');
        });

        item.addEventListener('mouseout', () => {
          item.classList.add('hidden');
        });
      });
    });
  }

  search() {
    let searchBer = document.querySelector('.searchBer');
    let searchBox = document.querySelector('.searchBox');
    window.addEventListener('click', e => {
      if (e.target.className == 'outline-0') {
        searchBer.classList.add('border-amber-700');
        searchBox.classList.remove('hidden');
      } else {
        searchBer.classList.remove('border-amber-700');
        searchBox.classList.add('hidden');
      }
    });
    window.addEventListener('mouseover', e => {
      if (e.target.id == 'searchBox') {
        searchBox.classList.add('hidden');
      }
    });
  }

  dotted() {
    const dotted = document.querySelectorAll('.__put_border_in_dotted__');
    const removeDotted = () => {
      dotted.forEach(singleDot => {
        singleDot.classList.remove('outline');
        singleDot.classList.remove('outline-offset-[1px]');
      });
    };
    dotted.forEach(singleDot => {
      singleDot.addEventListener('click', () => {
        removeDotted();
        singleDot.classList.add('outline');
        singleDot.classList.add('outline-offset-[1px]');
      });
    });

    // dotted.addEventListener("click", () => {
    //     alert("hello")
    // })
  }

  faq() {
    const accordionItemHeaders = document.querySelectorAll(
      '.accordion-item-header'
    );
    accordionItemHeaders.forEach(accordionItemHeader => {
      accordionItemHeader.addEventListener('click', () => {
        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(
          '.accordion-item-header.active'
        );
        console.log(currentlyActiveAccordionItemHeader);
        if (
          currentlyActiveAccordionItemHeader &&
          currentlyActiveAccordionItemHeader !== accordionItemHeader
        ) {
          currentlyActiveAccordionItemHeader.classList.toggle('active');
          currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
          accordionItemBody.style.maxHeight =
            accordionItemBody.scrollHeight + 'px';
        } else {
          accordionItemBody.style.maxHeight = 0;
        }
      });
    });
  }

  imageMagnify() {
    const miniImages = document.querySelectorAll('.__miniImg__');
    const imageMagnify = document.querySelector(
      '.__magnify_imgContainer_box__'
    );
    function removeBorder() {
      miniImages.forEach(singleImage => {
        singleImage.classList.remove('border-[1px]');
      });
    }
    miniImages.forEach(singleImage => {
      singleImage.addEventListener('click', () => {
        removeBorder();
        // console.log(singleImage)
        singleImage.classList.add('border-[1px]');
        singleImage.classList.add('border-amber-500');
      });
    });

    miniImages.forEach(item => {
      item.addEventListener('click', () => getSrc(item.children[0].src));
    });
    const getSrc = key => {
      imageMagnify.src = key;
    };
  }

  cardDetailsNavigation() {
    const cardButton = document.querySelectorAll('.__card_navigation_button__');
    const putBorder = document.querySelectorAll(
      '.__card_navigation_button__ div'
    );
    const cardContainer = document.querySelectorAll('.__card_container_body__');
    function removeBorder() {
      putBorder.forEach(item => {
        item.classList.remove('w-full');
      });
    }

    cardButton.forEach(singleButton => {
      singleButton.addEventListener('click', () => {
        const putBorder = singleButton.querySelector('div');
        const getDataFromTitle = singleButton.getAttribute('data-title');
        cardContainer.forEach(singleCard => {
          const getDataFrombody = singleCard.getAttribute('data-body');
          if (getDataFrombody == getDataFromTitle) {
            singleCard.classList.remove('hidden');
          } else {
            singleCard.classList.add('hidden');
          }
        });
        removeBorder();
        putBorder.classList.add('w-full');
      });
    });
  }
}

const commonJs = new CommonJavascript();
commonJs.setup();
