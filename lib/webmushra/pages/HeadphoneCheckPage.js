/*************************************************************************
         (C) Copyright AudioLabs 2017 

This source code is protected by copyright law and international treaties. This source code is made available to You subject to the terms and conditions of the Software License for the webMUSHRA.js Software. Said terms and conditions have been made available to You prior to Your download of this source code. By downloading this source code You agree to be bound by the above mentionend terms and conditions, which can also be found here: https://www.audiolabs-erlangen.de/resources/webMUSHRA. Any unauthorised use of this source code may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under law. 

**************************************************************************/

function HeadphoneCheckPage(_pageManager, _pageTemplateRenderer, _pageConfig) {  
  this.pageTemplateRenderer = _pageTemplateRenderer;
  this.pageManager = _pageManager;
  this.title = _pageConfig.name;
  this.content = _pageConfig.content;
  this.language = _pageConfig.language;
} 

/**
 * @return {String} Returns the name of the page. Objects of a HeadphoneCheckPage class might have different names.  
 */
HeadphoneCheckPage.prototype.getName = function () {
  return this.title;
};

/**
 * The ini method is called before the pages are rendered. The method is called only once.
 * @param {Function} _callbackError The function that must be called if an error occurs. The function has one argument which is the error message.
 */
HeadphoneCheckPage.prototype.init = function (_callbackError) { 
};

/**
 * Renders the page. This function might be called multiple times (depending on whether navigation is allowed and on the user behaviour)
 * @param {Object} _parent JQuery element which represent the parent DOM element where the content of the page must be stored.
 */
HeadphoneCheckPage.prototype.render = function (_parent) {
  const headphonesCheck = new HeadphonesCheck(_parent, {
    callback: passed => {
      if (passed) {
        this.pageTemplateRenderer.unlockNextButton();
        _parent.append("<p>Thank you for completing the headphone check. When you are ready you may proceed by clicking <em>Next</em></p>");
      } else {
        _parent.append('<p class="notice">Unfortunately, you did not pass the headphones check.</p>' +
        '<p class="notice">You may now close the window.</p>');
      }
    },
    trialCount: 6,
    passMark: 6
  });
  headphonesCheck.checkHeadphones();
  return;
};

/**
 * This method is called after the page is rendered. The purpose of this method is to load default values or saved values of the input controls. 
 */
HeadphoneCheckPage.prototype.load = function () {
  this.pageTemplateRenderer.lockNextButton();
};

/**
 * This method is called just before the next page is presented to the user. In case values of input controls are needed for rerendering, they must be saved within in method. 
 */
HeadphoneCheckPage.prototype.save = function () {
};

/**
 * @param {ResponsesStorage} _reponsesStorage
 */
HeadphoneCheckPage.prototype.store = function (_reponsesStorage) {
};
