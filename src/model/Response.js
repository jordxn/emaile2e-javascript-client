/**
 * Emaile2e API Documentation
 * [Email-e2e](https://emaile2e.com) is and end-to-end email testing service. It has a web-app for managing your account and a REST API for sending and receiving emails from randomized email addresses.  ## Why? Email-e2e was built to test the integration of email services within an app. If your application relies on the sending or receiving of emails, then Email-e2e will let you test that functionality. This is a more common need than you might think: if your app has a sign up process that requires email verification, how do you currently test that?  ## Getting started Every API request requires a valid API Key appended as a query parameter. **To obtain an API Key** [visit your account dashboard](http://www.emaile2e.com/dashboard).    The general flow is as follows:  - Create a new inbox during a test. The email address will be returned in the response.  - Send an email to that address or trigger an action in your test that does so. - Fetch the email for your new inbox and check if its content is what you expected, or use the content in another action.  ## SDK - There is an official [Javascript SDK](https://www.npmjs.com/package/emaile2e-client) available on npm. - You can also use the [swagger JSON definition](https://api.emaile2e.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.  ## Legal The Emaile2e API code is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2). The SDKs are free to use in any project and have an ISC licence.  ## Bugs, features, support To report bugs or request features please see the [contact page](http://www.emaile2e.com/contact). For help see [support](http://www.emaile2e.com/support).
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    if (!root.Emaile2eClient) {
      root.Emaile2eClient = {};
    }
    root.Emaile2eClient.Response = factory(root.Emaile2eClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Response model module.
   * @module model/Response
   * @version 0.1.1513898268
   */

  /**
   * Constructs a new <code>Response</code>.
   * @alias module:model/Response
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response} obj Optional instance to populate.
   * @return {module:model/Response} The populated <code>Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Object} payload
   */
  exports.prototype['payload'] = undefined;



  return exports;
}));


