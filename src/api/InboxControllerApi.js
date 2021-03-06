/**
 * MailSlurp API Documentation
 * [MailSlurp](https://www.mailslurp.com) is an end-to-end email testing service. It has a [web-app](https://www.mailslurp.com/dashboard) for managing your account and a [REST API](https://api.mailslurp.com) for sending and receiving emails from randomly generated email addresses.  ## Why? MailSlurp was built to test the integration of email services within an app. If your application relies on the sending or receiving of emails, then MailSlurp will let you test that functionality. This is a more common need than you might think: if your app has a sign up process that requires email verification, how do you currently test that?  ## Getting started - [API Docs](https://www.mailslurp.com/documentation) - [Code Examples](https://www.mailslurp.com/documentation/examples) - [Swagger Definition](https://api.mailslurp.com/v2/api-docs)  Every API request requires a valid API Key appended as a query parameter. [To obtain an API Key visit your account dashboard](https://www.mailslurp.com/dashboard).    The general flow is as follows:  - Create a new inbox during a test. The email address will be returned in the response.  - Send an email to that address or trigger an action in your test that does so. - Fetch the email for your new inbox and check if its content is what you expected, or use the content in another action.  ## SDK - There is an official [Javascript SDK](https://www.npmjs.com/package/mailslurp-client) available on npm. - You can also use the [swagger JSON definition](https://api.mailslurp.com/v2/api-docs) and [swagger-codegen](https://github.com/swagger-api/swagger-codegen) to generate a swagger client in a language of your choice.  ## Legal The Mailslurp API code is owned by [PettmanUG](http://pettmanug.site) and uses a proprietary [software licence](http://www.binpress.com/license/view/l/c8376a01eca7465027a978d3fde5a1e2). The SDKs are free to use in any project and have an ISC licence.  ## Bugs, features, support To report bugs or request features please see the [contact page](https://www.mailslurp.com/contact). For help see [support](https://www.mailslurp.com/support).
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
    define(['ApiClient', 'model/Response', 'model/ResponseInboxDto', 'model/ResponseListEmailDto', 'model/ResponseListInboxDto', 'model/SendEmailDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Response'), require('../model/ResponseInboxDto'), require('../model/ResponseListEmailDto'), require('../model/ResponseListInboxDto'), require('../model/SendEmailDto'));
  } else {
    // Browser globals (root is window)
    if (!root.MailslurpClient) {
      root.MailslurpClient = {};
    }
    root.MailslurpClient.InboxcontrollerApi = factory(root.MailslurpClient.ApiClient, root.MailslurpClient.Response, root.MailslurpClient.ResponseInboxDto, root.MailslurpClient.ResponseListEmailDto, root.MailslurpClient.ResponseListInboxDto, root.MailslurpClient.SendEmailDto);
  }
}(this, function(ApiClient, Response, ResponseInboxDto, ResponseListEmailDto, ResponseListInboxDto, SendEmailDto) {
  'use strict';

  /**
   * Inboxcontroller service.
   * @module api/InboxcontrollerApi
   * @version 0.1.1514850454
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
    this.createRandomInboxUsingPOSTWithHttpInfo = function(apiKey) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling createRandomInboxUsingPOST");
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
      var collectionQueryParams = {};

      return this.apiClient.callApi(
        '/inboxes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, 
        postBody, authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an inbox
     * Create a new random inbox and return the id and email address for it. Send emails to this address and they will be stored for this inbox.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseInboxDto}
     */
    this.createRandomInboxUsingPOST = function(apiKey) {
      return this.createRandomInboxUsingPOSTWithHttpInfo(apiKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an inbox
     * Delete an inbox and all the emails associated with it.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {String} uuid The inbox&#39;s id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    this.deleteInboxUsingDELETEWithHttpInfo = function(apiKey, uuid) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling deleteInboxUsingDELETE");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteInboxUsingDELETE");
      }


      var pathParams = {
        'uuid': uuid
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
      var returnType = Response;
      var collectionQueryParams = {};

      return this.apiClient.callApi(
        '/inboxes/{uuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, 
        postBody, authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an inbox
     * Delete an inbox and all the emails associated with it.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {String} uuid The inbox&#39;s id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    this.deleteInboxUsingDELETE = function(apiKey, uuid) {
      return this.deleteInboxUsingDELETEWithHttpInfo(apiKey, uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch emails for a given inbox
     * Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The &#x60;since&#x60; parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the &#x60;waitFor&#x60; parameter to hold a request open until the desired number of emails is present. If this number is not met after 60 seconds, an error will be returned.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {String} uuid The inbox&#39;s id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minCount Wait a maximum of 60 seconds for atleast this many emails in an inbox before returning a result.
     * @param {Number} opts.maxWait Maximum seconds API should spend retrying your inbox until the minCount is satisfied
     * @param {Date} opts.since Filter for emails received on or after this ISO8601 LocalDateTime.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseListEmailDto} and HTTP response
     */
    this.getEmailsForInboxUsingGETWithHttpInfo = function(apiKey, uuid, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getEmailsForInboxUsingGET");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getEmailsForInboxUsingGET");
      }


      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
        'apiKey': apiKey,
        'minCount': opts['minCount'],
        'maxWait': opts['maxWait'],
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
      var collectionQueryParams = {};

      return this.apiClient.callApi(
        '/inboxes/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, 
        postBody, authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch emails for a given inbox
     * Return a list of emails stored in a given inbox. Each email contains various properties including the email body (in eml format), subject, and sender. The &#x60;since&#x60; parameter is a ISO8601 LocalDateTime that will filter for emails received on or after the given DateTime. Note that because an inbox may take 5 to 10 seconds to receive an email, you can use the &#x60;waitFor&#x60; parameter to hold a request open until the desired number of emails is present. If this number is not met after 60 seconds, an error will be returned.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {String} uuid The inbox&#39;s id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minCount Wait a maximum of 60 seconds for atleast this many emails in an inbox before returning a result.
     * @param {Number} opts.maxWait Maximum seconds API should spend retrying your inbox until the minCount is satisfied
     * @param {Date} opts.since Filter for emails received on or after this ISO8601 LocalDateTime.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseListEmailDto}
     */
    this.getEmailsForInboxUsingGET = function(apiKey, uuid, opts) {
      return this.getEmailsForInboxUsingGETWithHttpInfo(apiKey, uuid, opts)
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
    this.getListOfInboxesUsingGETWithHttpInfo = function(apiKey) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling getListOfInboxesUsingGET");
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
      var collectionQueryParams = {};

      return this.apiClient.callApi(
        '/inboxes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, 
        postBody, authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List your inboxes
     * Return a list of your inboxes. Each inbox has a uuid and an email address. Emails sent to the email address are stored in the inbox and can be fetched via &#x60;/inboxes/{uuid}&#x60;.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseListInboxDto}
     */
    this.getListOfInboxesUsingGET = function(apiKey) {
      return this.getListOfInboxesUsingGETWithHttpInfo(apiKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send an email
     * Send an email from the given inbox&#39;s email address. Useful if you need to test a user contacting you, for instance.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {String} uuid The inbox&#39;s id.
     * @param {module:model/SendEmailDto} sendEmailDto The email to send.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    this.sendEmailFromUserUsingPOSTWithHttpInfo = function(apiKey, uuid, sendEmailDto) {
      var postBody = sendEmailDto;

      // verify the required parameter 'apiKey' is set
      if (apiKey === undefined || apiKey === null) {
        throw new Error("Missing the required parameter 'apiKey' when calling sendEmailFromUserUsingPOST");
      }

      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling sendEmailFromUserUsingPOST");
      }

      // verify the required parameter 'sendEmailDto' is set
      if (sendEmailDto === undefined || sendEmailDto === null) {
        throw new Error("Missing the required parameter 'sendEmailDto' when calling sendEmailFromUserUsingPOST");
      }


      var pathParams = {
        'uuid': uuid
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
      var returnType = Response;
      var collectionQueryParams = {};

      return this.apiClient.callApi(
        '/inboxes/{uuid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, 
        postBody, authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send an email
     * Send an email from the given inbox&#39;s email address. Useful if you need to test a user contacting you, for instance.
     * @param {String} apiKey Your API Key. Sign up and find it in your dashboard.
     * @param {String} uuid The inbox&#39;s id.
     * @param {module:model/SendEmailDto} sendEmailDto The email to send.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    this.sendEmailFromUserUsingPOST = function(apiKey, uuid, sendEmailDto) {
      return this.sendEmailFromUserUsingPOSTWithHttpInfo(apiKey, uuid, sendEmailDto)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
