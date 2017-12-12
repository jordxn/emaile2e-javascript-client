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
    define(['ApiClient', 'model/ResponseInboxDto', 'model/ResponseListEmailDto', 'model/ResponseListInboxDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ResponseInboxDto'), require('../model/ResponseListEmailDto'), require('../model/ResponseListInboxDto'));
  } else {
    // Browser globals (root is window)
    if (!root.Emaile2eClient) {
      root.Emaile2eClient = {};
    }
    root.Emaile2eClient.InboxcontrollerApi = factory(root.Emaile2eClient.ApiClient, root.Emaile2eClient.ResponseInboxDto, root.Emaile2eClient.ResponseListEmailDto, root.Emaile2eClient.ResponseListInboxDto);
  }
}(this, function(ApiClient, ResponseInboxDto, ResponseListEmailDto, ResponseListInboxDto) {
  'use strict';

  /**
   * Inboxcontroller service.
   * @module api/InboxcontrollerApi
   * @version 0.1.1513081270
   */

  /**
   * Constructs a new InboxcontrollerApi. 
   * @alias module:api/InboxcontrollerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create an inbox
     * Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseInboxDto} and HTTP response
     */
    this.createUsingPOSTWithHttpInfo = function(apiKey) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseInboxDto;

      return this.apiClient.callApi(
        '/inboxes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an inbox
     * Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseInboxDto}
     */
    this.createUsingPOST = function(apiKey) {
      return this.createUsingPOSTWithHttpInfo(apiKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List your inboxes
     * Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via &#x60;/inboxes/{uuid}&#x60;.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseListInboxDto} and HTTP response
     */
    this.indexUsingGETWithHttpInfo = function(apiKey) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling indexUsingGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apiKey': apiKey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseListInboxDto;

      return this.apiClient.callApi(
        '/inboxes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List your inboxes
     * Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via &#x60;/inboxes/{uuid}&#x60;.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseListInboxDto}
     */
    this.indexUsingGET = function(apiKey) {
      return this.indexUsingGETWithHttpInfo(apiKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch emails for a given inbox
     * Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The &#x60;since&#x60; parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the &#x60;waitFor&#x60; parameter to hold a request open until the desired number of emails is present. If this number is not met after 30 seconds, an error will be returned.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {String} uuid The inbox&#39;s id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.waitFor Wait a maximum of 30 seconds for atleast this many emails in an inbox before returning a result.
     * @param {Date} opts.since Filter for emails received on or after this ISO8601 LocalDateTime.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseListEmailDto} and HTTP response
     */
    this.viewUsingGETWithHttpInfo = function(apiKey, uuid, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling viewUsingGET");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling viewUsingGET");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
        'apiKey': apiKey,
        'waitFor': opts['waitFor'],
        'since': opts['since']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseListEmailDto;

      return this.apiClient.callApi(
        '/inboxes/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch emails for a given inbox
     * Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The &#x60;since&#x60; parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the &#x60;waitFor&#x60; parameter to hold a request open until the desired number of emails is present. If this number is not met after 30 seconds, an error will be returned.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {String} uuid The inbox&#39;s id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.waitFor Wait a maximum of 30 seconds for atleast this many emails in an inbox before returning a result.
     * @param {Date} opts.since Filter for emails received on or after this ISO8601 LocalDateTime.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseListEmailDto}
     */
    this.viewUsingGET = function(apiKey, uuid, opts) {
      return this.viewUsingGETWithHttpInfo(apiKey, uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
