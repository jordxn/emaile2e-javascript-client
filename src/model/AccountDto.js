/**
 * MailSlurp API Documentation
 * [MailSlurp](https://www.mailslurp.com) is an end-to-end email testing service. It has a [web-app](https://www.mailslurp.com/dashboard) for managing your account and a [REST API](https://api.mailslurp.com) for sending and receiving emails from randomly generated email addresses.  ## Why? MailSlurp was built to test the integration of email services within an app. If your application relies on the sending or receiving of emails, then MailSlurp will let you test that functionality. This is a more common need than you might think: if your app has a sign up process that requires email verification, how do you currently test that?  ## Getting started - [API Docs](https://www.mailslurp.com/documentation) - [Code Examples](https://www.mailslurp.com/documentation/examples) - [Swagger Definition](https://api.mailslurp.com/v2/api-docs)  Every API request requires a valid API Key appended as a query parameter. [To obtain an API Key visit your account dashboard](https://www.mailslurp.com/dashboard).    The general flow is as follows:  - Create a new inbox during a test. The email address will be returned in the response.  - Send an email to that address or trigger an action in your test that does so. - Fetch the email for your new inbox and check if its content is what you expected, or use the content in another action.  ## SDK - There is an official [Javascript SDK](https://www.npmjs.com/package/mailslurp-client) available on npm. - You can also use the [swagger JSON definition](https://api.mailslurp.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.  ## Legal The Mailslurp API code is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2). The SDKs are free to use in any project and have an ISC licence.  ## Bugs, features, support To report bugs or request features please see the [contact page](https://www.mailslurp.com/contact). For help see [support](https://www.mailslurp.com/support).
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MailslurpClient) {
      root.MailslurpClient = {};
    }
    root.MailslurpClient.AccountDto = factory(root.MailslurpClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountDto model module.
   * @module model/AccountDto
   * @version 0.1.1535642288
   */

  /**
   * Constructs a new <code>AccountDto</code>.
   * @alias module:model/AccountDto
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AccountDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountDto} obj Optional instance to populate.
   * @return {module:model/AccountDto} The populated <code>AccountDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'String');
      }
      if (data.hasOwnProperty('priceCents')) {
        obj['priceCents'] = ApiClient.convertToType(data['priceCents'], 'Number');
      }
      if (data.hasOwnProperty('priceString')) {
        obj['priceString'] = ApiClient.convertToType(data['priceString'], 'String');
      }
      if (data.hasOwnProperty('stripeProduct')) {
        obj['stripeProduct'] = ApiClient.convertToType(data['stripeProduct'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountDto.AccountTypeEnum} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * @member {String} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Number} priceCents
   */
  exports.prototype['priceCents'] = undefined;
  /**
   * @member {String} priceString
   */
  exports.prototype['priceString'] = undefined;
  /**
   * @member {String} stripeProduct
   */
  exports.prototype['stripeProduct'] = undefined;


  /**
   * Allowed values for the <code>accountType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountTypeEnum = {
    /**
     * value: "FREE"
     * @const
     */
    "FREE": "FREE",
    /**
     * value: "PAID"
     * @const
     */
    "PAID": "PAID"  };


  return exports;
}));


