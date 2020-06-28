$(() => {
  //  more block
  $('.content-more').each(function () {
    let $this = $(this);
    let allWrapMore = $this.find('.wrap-more');
    let countWrapMores = allWrapMore.length;
    let showMoreBtn = $this.find('.show-more');
    let showElementsCount = Number($this.attr('data-show'));
    let newShowElements = showElementsCount;

    if (countWrapMores <= showElementsCount) {
      showMoreBtn.hide();
    }
    for (let i = 0; i < showElementsCount; i++) {
      allWrapMore.eq(i).addClass('fadeIn');
    }

    let fadeIn = $this.find('.fadeIn').length;
    showMoreBtn.find(".count-more").text(countWrapMores - fadeIn);

    showMoreBtn.on('click', function () {
      let showMoreBtn = $this.find('.wrap-more').length;
      let showElementsCount = Number($this.attr('data-show'));

      newShowElements = newShowElements + showElementsCount;

      if (countWrapMores <= newShowElements) {
        $(this).hide();
      }

      for (showElementsCount; showElementsCount < newShowElements; showElementsCount++) {
        allWrapMore.eq(showElementsCount).addClass('fadeIn');
      }

      let fadeInCount = $this.find('.fadeIn').length;
      $(this).find(".count-more").text(showMoreBtn - fadeInCount);
    });
  });

  // end more block

  // tabs
  let $tabsContainer = $('.tabs-container');

  $tabsContainer.on("click", '.tab-link', function (e) {
    e.preventDefault();
    let $this = $(this);
    let id = $this.attr("href");
    let $parents = $this.parents('.tabs-container');

    $parents.find('.tab-link').removeClass("active");
    $this.addClass('active');
    $parents.find('.tabs-content .tab-item').removeClass("active");
    $parents.find(id).addClass("active");
  });
  // end tabs

  $('.state-view-link').on('click','.view', function (e) {
    e.preventDefault();

    let $this = $(this);

  });
});
