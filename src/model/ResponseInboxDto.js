/**
 * Emaile2e API Documentation
 * [Emaile2e](http://www.emaile2e.com) provides a simple REST API that lets you create randomized email addresses and fetch the emails sent to them.  ## Why? If your application uses emails at any point, Emaile2e makes testing your app's email integration easier.  Say your app sign-up process sends a verification email. During e2e tests you can create a new random email  address for a test user, sign-up, and then fetch the verification email and use the verification code in the next steps of your test.  ## Getting started Every API request requires a valid API Key appended as a query parameter. **To obtain an API Key** [visit your account dashboard](http://www.emaile2e.com/dashboard).    The general flow is as follows:  1. Create a new inbox during a test. The email address will be returned in the response.  2. Send an email to that address or trigger an action in your test that does so. 3. Fetch the email for your new inbox and check if their content is what you expected.  ## SDK - There is an official [Javascript SDK](https://www.npmjs.com/package/emaile2e-client) available on npm. - You can also use the [swagger JSON definition](https://api.emaile2e.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.  ## Legal The Emaile2e API code is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2). The SDKs are free to use in any project and have an ISC licence.  ## Bugs, features, support To report bugs or request features please see the [contact page](http://www.emaile2e.com/contact). For help see [support](http://www.emaile2e.com/support).
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
    define(['ApiClient', 'model/InboxDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InboxDto'));
  } else {
    // Browser globals (root is window)
    if (!root.Emaile2eClient) {
      root.Emaile2eClient = {};
    }
    root.Emaile2eClient.ResponseInboxDto = factory(root.Emaile2eClient.ApiClient, root.Emaile2eClient.InboxDto);
  }
}(this, function(ApiClient, InboxDto) {
  'use strict';




  /**
   * The ResponseInboxDto model module.
   * @module model/ResponseInboxDto
   * @version 0.1.1513081270
   */

  /**
   * Constructs a new <code>ResponseInboxDto</code>.
   * @alias module:model/ResponseInboxDto
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ResponseInboxDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseInboxDto} obj Optional instance to populate.
   * @return {module:model/ResponseInboxDto} The populated <code>ResponseInboxDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'Boolean');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = InboxDto.constructFromObject(data['payload']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/InboxDto} payload
   */
  exports.prototype['payload'] = undefined;



  return exports;
}));


