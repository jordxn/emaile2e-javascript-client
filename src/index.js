/**
 * Emaile2e API Documentation
 * [Emaile2e](http://www.emaile2e.com) provides a simple REST API that lets you create randomized email addresses and fetch the emails sent to them.  ## Why? If your application uses emails at any point, Emaile2e makes testing your app's email integration easier.  Say your app sign-up process sends a verification email. During e2e tests you can create a new random email  address for a test user, sign-up, and then fetch the verification email and use the verification code in the next steps of your test.  ## Getting started Every API request requires a valid API Key appended as a query parameter. **To obtain an API Key** [visit your account dashboard](http://www.emaile2e.com/dashboard).    The general flow is as follow:  1. Create a new inbox during a test. The email address will be returned in the response.  2. Send an email to that address or trigger an action in your test that does so. 3. Fetch the email for your new inbox and check if their content is what you expected.  ## SDK - There is an official [Javascript SDK](https://www.npmjs.com/package/emaile2e-client) available on npm. - You can also use the [swagger JSON definition](https://api.emaile2e.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.  ## Legal The Emaile2e API is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2).    ## Bugs, features, support To report bugs or request features please see the [contact page](http://www.emaile2e.com/contact). For help see [support](http://www.emaile2e.com/support).
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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EmailDto', 'model/InboxDto', 'model/ResponseInboxDto', 'model/ResponseListEmailDto', 'model/ResponseListInboxDto', 'api/InboxcontrollerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/EmailDto'), require('./model/InboxDto'), require('./model/ResponseInboxDto'), require('./model/ResponseListEmailDto'), require('./model/ResponseListInboxDto'), require('./api/InboxcontrollerApi'));
  }
}(function(ApiClient, EmailDto, InboxDto, ResponseInboxDto, ResponseListEmailDto, ResponseListInboxDto, InboxcontrollerApi) {
  'use strict';

  /**
   * The official javascript client for the Emaile2e API. See https://emaile2e.com for more information..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Emaile2eClient = require('index'); // See note below*.
   * var xxxSvc = new Emaile2eClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Emaile2eClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Emaile2eClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Emaile2eClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.1512783689
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The EmailDto model constructor.
     * @property {module:model/EmailDto}
     */
    EmailDto: EmailDto,
    /**
     * The InboxDto model constructor.
     * @property {module:model/InboxDto}
     */
    InboxDto: InboxDto,
    /**
     * The ResponseInboxDto model constructor.
     * @property {module:model/ResponseInboxDto}
     */
    ResponseInboxDto: ResponseInboxDto,
    /**
     * The ResponseListEmailDto model constructor.
     * @property {module:model/ResponseListEmailDto}
     */
    ResponseListEmailDto: ResponseListEmailDto,
    /**
     * The ResponseListInboxDto model constructor.
     * @property {module:model/ResponseListInboxDto}
     */
    ResponseListInboxDto: ResponseListInboxDto,
    /**
     * The InboxcontrollerApi service constructor.
     * @property {module:api/InboxcontrollerApi}
     */
    InboxcontrollerApi: InboxcontrollerApi
  };

  return exports;
}));
