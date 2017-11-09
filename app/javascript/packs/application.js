/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import config from '../src/js/components/constants/configuration';
import Navigation from '../src/js/components/Navigation';
import Services from '../src/js/components/Services';
import Helpers from '../src/js/components/Helpers';

/**
 * Initialize main banner slider
 */
$(`.${config.selectors.slidesHolder}`).slick(config.slick);

/**
 * Initialize main recent stories slider
 */
$(`.${config.selectors.recentSlidesHolder}`).slick(config.recentSlick);

/**
 * Initialize main recent stories slider
 */
$(`.${config.selectors.gallerySlick}`).slick(config.gallerySlick);

/**
 * Initialize main recent stories slider
 */
$(`.${config.selectors.gallerySlickMiniature}`).slick(config.gallerySlickMiniature);
/**
 * Initialize main article grid
 */
$(`.${config.selectors.articleList}`).masonry(config.masonry);
/**
 * Initialize mobile navigation
 */
new Navigation();

/**
 * Initialize services hover handlers
 */
new Services();
