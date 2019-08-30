/**
 * (C) Copyright IBM Corp. 2018, 2019.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const helper = require('ibm-cloud-sdk-core'); // for mocking `getMissingParams`
const { NoAuthAuthenticator } = require('ibm-cloud-sdk-core');
const CompareComplyV1 = require('../../compare-comply/v1');
const utils = require('../resources/unitTestUtils');

const {
  getOptions,
  checkUrlAndMethod,
  checkCallback,
  checkMediaHeaders,
  missingParamsSuccess,
  expectToBePromise,
  missingParamsError,
  checkForEmptyObject,
  checkRequiredParamsHandling,
  checkDefaultSuccessArgs,
} = utils;

const noop = () => {};

const service = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://gateway.watsonplatform.net/compare-comply/api/compare-comply/api',
  version: '2018-10-18',
};

const compareComply = new CompareComplyV1(service);
const createRequestMock = jest.spyOn(compareComply, 'createRequest');
const missingParamsMock = jest.spyOn(helper, 'getMissingParams');

// dont actually create a request
createRequestMock.mockImplementation(noop);

afterEach(() => {
  createRequestMock.mockReset();
  missingParamsMock.mockClear();
});

describe('convertToHtml', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const file = 'fake_file';
      const fileContentType = 'fake_fileContentType';
      const model = 'fake_model';
      const params = {
        file,
        fileContentType,
        model,
      };

      // invoke method
      compareComply.convertToHtml(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/html_conversion', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'multipart/form-data';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.formData['file'].data).toEqual(file);
      expect(options.formData['file'].contentType).toEqual(fileContentType);
      expect(options.qs['model']).toEqual(model);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const file = 'fake_file';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        file,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.convertToHtml(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const file = 'fake_file';
      const params = {
        file,
      };

      // invoke method
      const convertToHtmlPromise = compareComply.convertToHtml(params);
      expectToBePromise(convertToHtmlPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.convertToHtml(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['file'];

      compareComply.convertToHtml({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['file'];

      const convertToHtmlPromise = compareComply.convertToHtml();
      expectToBePromise(convertToHtmlPromise);

      convertToHtmlPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('classifyElements', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const file = 'fake_file';
      const fileContentType = 'fake_fileContentType';
      const model = 'fake_model';
      const params = {
        file,
        fileContentType,
        model,
      };

      // invoke method
      compareComply.classifyElements(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/element_classification', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'multipart/form-data';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.formData['file'].data).toEqual(file);
      expect(options.formData['file'].contentType).toEqual(fileContentType);
      expect(options.qs['model']).toEqual(model);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const file = 'fake_file';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        file,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.classifyElements(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const file = 'fake_file';
      const params = {
        file,
      };

      // invoke method
      const classifyElementsPromise = compareComply.classifyElements(params);
      expectToBePromise(classifyElementsPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.classifyElements(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['file'];

      compareComply.classifyElements({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['file'];

      const classifyElementsPromise = compareComply.classifyElements();
      expectToBePromise(classifyElementsPromise);

      classifyElementsPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('extractTables', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const file = 'fake_file';
      const fileContentType = 'fake_fileContentType';
      const model = 'fake_model';
      const params = {
        file,
        fileContentType,
        model,
      };

      // invoke method
      compareComply.extractTables(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/tables', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'multipart/form-data';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.formData['file'].data).toEqual(file);
      expect(options.formData['file'].contentType).toEqual(fileContentType);
      expect(options.qs['model']).toEqual(model);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const file = 'fake_file';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        file,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.extractTables(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const file = 'fake_file';
      const params = {
        file,
      };

      // invoke method
      const extractTablesPromise = compareComply.extractTables(params);
      expectToBePromise(extractTablesPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.extractTables(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['file'];

      compareComply.extractTables({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['file'];

      const extractTablesPromise = compareComply.extractTables();
      expectToBePromise(extractTablesPromise);

      extractTablesPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('compareDocuments', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const file1 = 'fake_file1';
      const file2 = 'fake_file2';
      const file1ContentType = 'fake_file1ContentType';
      const file2ContentType = 'fake_file2ContentType';
      const file1Label = 'fake_file1Label';
      const file2Label = 'fake_file2Label';
      const model = 'fake_model';
      const params = {
        file1,
        file2,
        file1ContentType,
        file2ContentType,
        file1Label,
        file2Label,
        model,
      };

      // invoke method
      compareComply.compareDocuments(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/comparison', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'multipart/form-data';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.formData['file_1'].data).toEqual(file1);
      expect(options.formData['file_1'].contentType).toEqual(file1ContentType);
      expect(options.formData['file_2'].data).toEqual(file2);
      expect(options.formData['file_2'].contentType).toEqual(file2ContentType);
      expect(options.qs['file_1_label']).toEqual(file1Label);
      expect(options.qs['file_2_label']).toEqual(file2Label);
      expect(options.qs['model']).toEqual(model);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const file1 = 'fake_file1';
      const file2 = 'fake_file2';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        file1,
        file2,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.compareDocuments(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const file1 = 'fake_file1';
      const file2 = 'fake_file2';
      const params = {
        file1,
        file2,
      };

      // invoke method
      const compareDocumentsPromise = compareComply.compareDocuments(params);
      expectToBePromise(compareDocumentsPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.compareDocuments(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['file1', 'file2'];

      compareComply.compareDocuments({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['file1', 'file2'];

      const compareDocumentsPromise = compareComply.compareDocuments();
      expectToBePromise(compareDocumentsPromise);

      compareDocumentsPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('addFeedback', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const feedbackData = 'fake_feedbackData';
      const userId = 'fake_userId';
      const comment = 'fake_comment';
      const params = {
        feedbackData,
        userId,
        comment,
      };

      // invoke method
      compareComply.addFeedback(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/feedback', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'application/json';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.body['feedback_data']).toEqual(feedbackData);
      expect(options.body['user_id']).toEqual(userId);
      expect(options.body['comment']).toEqual(comment);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const feedbackData = 'fake_feedbackData';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        feedbackData,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.addFeedback(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const feedbackData = 'fake_feedbackData';
      const params = {
        feedbackData,
      };

      // invoke method
      const addFeedbackPromise = compareComply.addFeedback(params);
      expectToBePromise(addFeedbackPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.addFeedback(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['feedbackData'];

      compareComply.addFeedback({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['feedbackData'];

      const addFeedbackPromise = compareComply.addFeedback();
      expectToBePromise(addFeedbackPromise);

      addFeedbackPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('listFeedback', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const feedbackType = 'fake_feedbackType';
      const before = 'fake_before';
      const after = 'fake_after';
      const documentTitle = 'fake_documentTitle';
      const modelId = 'fake_modelId';
      const modelVersion = 'fake_modelVersion';
      const categoryRemoved = 'fake_categoryRemoved';
      const categoryAdded = 'fake_categoryAdded';
      const categoryNotChanged = 'fake_categoryNotChanged';
      const typeRemoved = 'fake_typeRemoved';
      const typeAdded = 'fake_typeAdded';
      const typeNotChanged = 'fake_typeNotChanged';
      const pageLimit = 'fake_pageLimit';
      const cursor = 'fake_cursor';
      const sort = 'fake_sort';
      const includeTotal = 'fake_includeTotal';
      const params = {
        feedbackType,
        before,
        after,
        documentTitle,
        modelId,
        modelVersion,
        categoryRemoved,
        categoryAdded,
        categoryNotChanged,
        typeRemoved,
        typeAdded,
        typeNotChanged,
        pageLimit,
        cursor,
        sort,
        includeTotal,
      };

      // invoke method
      compareComply.listFeedback(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/feedback', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.qs['feedback_type']).toEqual(feedbackType);
      expect(options.qs['before']).toEqual(before);
      expect(options.qs['after']).toEqual(after);
      expect(options.qs['document_title']).toEqual(documentTitle);
      expect(options.qs['model_id']).toEqual(modelId);
      expect(options.qs['model_version']).toEqual(modelVersion);
      expect(options.qs['category_removed']).toEqual(categoryRemoved);
      expect(options.qs['category_added']).toEqual(categoryAdded);
      expect(options.qs['category_not_changed']).toEqual(categoryNotChanged);
      expect(options.qs['type_removed']).toEqual(typeRemoved);
      expect(options.qs['type_added']).toEqual(typeAdded);
      expect(options.qs['type_not_changed']).toEqual(typeNotChanged);
      expect(options.qs['page_limit']).toEqual(pageLimit);
      expect(options.qs['cursor']).toEqual(cursor);
      expect(options.qs['sort']).toEqual(sort);
      expect(options.qs['include_total']).toEqual(includeTotal);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.listFeedback(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const params = {};

      // invoke method
      const listFeedbackPromise = compareComply.listFeedback(params);
      expectToBePromise(listFeedbackPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
    test('should not have any problems when no parameters are passed in', () => {
      // invoke the method
      compareComply.listFeedback({}, noop);
      checkDefaultSuccessArgs(createRequestMock);
    });

    test('should use argument as callback function if only one is passed in', () => {
      // invoke the method
      compareComply.listFeedback(noop);
      checkDefaultSuccessArgs(createRequestMock);
    });
  });
});

describe('getFeedback', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const feedbackId = 'fake_feedbackId';
      const model = 'fake_model';
      const params = {
        feedbackId,
        model,
      };

      // invoke method
      compareComply.getFeedback(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/feedback/{feedback_id}', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.qs['model']).toEqual(model);
      expect(options.path['feedback_id']).toEqual(feedbackId);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const feedbackId = 'fake_feedbackId';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        feedbackId,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.getFeedback(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const feedbackId = 'fake_feedbackId';
      const params = {
        feedbackId,
      };

      // invoke method
      const getFeedbackPromise = compareComply.getFeedback(params);
      expectToBePromise(getFeedbackPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.getFeedback(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['feedbackId'];

      compareComply.getFeedback({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['feedbackId'];

      const getFeedbackPromise = compareComply.getFeedback();
      expectToBePromise(getFeedbackPromise);

      getFeedbackPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('deleteFeedback', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const feedbackId = 'fake_feedbackId';
      const model = 'fake_model';
      const params = {
        feedbackId,
        model,
      };

      // invoke method
      compareComply.deleteFeedback(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/feedback/{feedback_id}', 'DELETE');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.qs['model']).toEqual(model);
      expect(options.path['feedback_id']).toEqual(feedbackId);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const feedbackId = 'fake_feedbackId';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        feedbackId,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.deleteFeedback(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const feedbackId = 'fake_feedbackId';
      const params = {
        feedbackId,
      };

      // invoke method
      const deleteFeedbackPromise = compareComply.deleteFeedback(params);
      expectToBePromise(deleteFeedbackPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.deleteFeedback(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['feedbackId'];

      compareComply.deleteFeedback({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['feedbackId'];

      const deleteFeedbackPromise = compareComply.deleteFeedback();
      expectToBePromise(deleteFeedbackPromise);

      deleteFeedbackPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('createBatch', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const _function = 'fake__function';
      const inputCredentialsFile = 'fake_inputCredentialsFile';
      const inputBucketLocation = 'fake_inputBucketLocation';
      const inputBucketName = 'fake_inputBucketName';
      const outputCredentialsFile = 'fake_outputCredentialsFile';
      const outputBucketLocation = 'fake_outputBucketLocation';
      const outputBucketName = 'fake_outputBucketName';
      const model = 'fake_model';
      const params = {
        _function,
        inputCredentialsFile,
        inputBucketLocation,
        inputBucketName,
        outputCredentialsFile,
        outputBucketLocation,
        outputBucketName,
        model,
      };

      // invoke method
      compareComply.createBatch(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/batches', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'multipart/form-data';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.formData['input_credentials_file'].data).toEqual(inputCredentialsFile);
      expect(options.formData['input_credentials_file'].contentType).toEqual('application/json');
      expect(options.formData['input_bucket_location']).toEqual(inputBucketLocation);
      expect(options.formData['input_bucket_name']).toEqual(inputBucketName);
      expect(options.formData['output_credentials_file'].data).toEqual(outputCredentialsFile);
      expect(options.formData['output_credentials_file'].contentType).toEqual('application/json');
      expect(options.formData['output_bucket_location']).toEqual(outputBucketLocation);
      expect(options.formData['output_bucket_name']).toEqual(outputBucketName);
      expect(options.qs['function']).toEqual(_function);
      expect(options.qs['model']).toEqual(model);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const _function = 'fake__function';
      const inputCredentialsFile = 'fake_inputCredentialsFile';
      const inputBucketLocation = 'fake_inputBucketLocation';
      const inputBucketName = 'fake_inputBucketName';
      const outputCredentialsFile = 'fake_outputCredentialsFile';
      const outputBucketLocation = 'fake_outputBucketLocation';
      const outputBucketName = 'fake_outputBucketName';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        _function,
        inputCredentialsFile,
        inputBucketLocation,
        inputBucketName,
        outputCredentialsFile,
        outputBucketLocation,
        outputBucketName,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.createBatch(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const _function = 'fake__function';
      const inputCredentialsFile = 'fake_inputCredentialsFile';
      const inputBucketLocation = 'fake_inputBucketLocation';
      const inputBucketName = 'fake_inputBucketName';
      const outputCredentialsFile = 'fake_outputCredentialsFile';
      const outputBucketLocation = 'fake_outputBucketLocation';
      const outputBucketName = 'fake_outputBucketName';
      const params = {
        _function,
        inputCredentialsFile,
        inputBucketLocation,
        inputBucketName,
        outputCredentialsFile,
        outputBucketLocation,
        outputBucketName,
      };

      // invoke method
      const createBatchPromise = compareComply.createBatch(params);
      expectToBePromise(createBatchPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.createBatch(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = [
        '_function',
        'inputCredentialsFile',
        'inputBucketLocation',
        'inputBucketName',
        'outputCredentialsFile',
        'outputBucketLocation',
        'outputBucketName',
      ];

      compareComply.createBatch({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = [
        '_function',
        'inputCredentialsFile',
        'inputBucketLocation',
        'inputBucketName',
        'outputCredentialsFile',
        'outputBucketLocation',
        'outputBucketName',
      ];

      const createBatchPromise = compareComply.createBatch();
      expectToBePromise(createBatchPromise);

      createBatchPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('listBatches', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const params = {};

      // invoke method
      compareComply.listBatches(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/batches', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.listBatches(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const params = {};

      // invoke method
      const listBatchesPromise = compareComply.listBatches(params);
      expectToBePromise(listBatchesPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
    test('should not have any problems when no parameters are passed in', () => {
      // invoke the method
      compareComply.listBatches({}, noop);
      checkDefaultSuccessArgs(createRequestMock);
    });

    test('should use argument as callback function if only one is passed in', () => {
      // invoke the method
      compareComply.listBatches(noop);
      checkDefaultSuccessArgs(createRequestMock);
    });
  });
});

describe('getBatch', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const batchId = 'fake_batchId';
      const params = {
        batchId,
      };

      // invoke method
      compareComply.getBatch(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/batches/{batch_id}', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['batch_id']).toEqual(batchId);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const batchId = 'fake_batchId';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        batchId,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.getBatch(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const batchId = 'fake_batchId';
      const params = {
        batchId,
      };

      // invoke method
      const getBatchPromise = compareComply.getBatch(params);
      expectToBePromise(getBatchPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.getBatch(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['batchId'];

      compareComply.getBatch({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['batchId'];

      const getBatchPromise = compareComply.getBatch();
      expectToBePromise(getBatchPromise);

      getBatchPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('updateBatch', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const batchId = 'fake_batchId';
      const action = 'fake_action';
      const model = 'fake_model';
      const params = {
        batchId,
        action,
        model,
      };

      // invoke method
      compareComply.updateBatch(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v1/batches/{batch_id}', 'PUT');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.qs['action']).toEqual(action);
      expect(options.qs['model']).toEqual(model);
      expect(options.path['batch_id']).toEqual(batchId);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const batchId = 'fake_batchId';
      const action = 'fake_action';
      const userAccept = 'fake/header';
      const userContentType = 'fake/header';
      const params = {
        batchId,
        action,
        headers: {
          Accept: userAccept,
          'Content-Type': userContentType,
        },
      };

      compareComply.updateBatch(params, noop);
      checkMediaHeaders(createRequestMock, userAccept, userContentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const batchId = 'fake_batchId';
      const action = 'fake_action';
      const params = {
        batchId,
        action,
      };

      // invoke method
      const updateBatchPromise = compareComply.updateBatch(params);
      expectToBePromise(updateBatchPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      compareComply.updateBatch(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['batchId', 'action'];

      compareComply.updateBatch({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['batchId', 'action'];

      const updateBatchPromise = compareComply.updateBatch();
      expectToBePromise(updateBatchPromise);

      updateBatchPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});
