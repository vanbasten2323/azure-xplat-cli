// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?destination=adlsclifolder01%2Fmovefile.txt&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b0ef9bde-8383-4515-8d36-258cffcb89e6',
  'server-perf': '[b0ef9bde-8383-4515-8d36-258cffcb89e6][ AuthTime::584.222069394975::PostAuthTime::133.438715703684 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:031 ms]%0a[GetFileStatus :: 00:00:031 ms]%0a[FsRename :: 00:00:094 ms]%0a[CleanCacheRename :: 00:00:000 ms]%0a[RENAME :: 00:00:127 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:41 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?destination=adlsclifolder01%2Fmovefile.txt&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b0ef9bde-8383-4515-8d36-258cffcb89e6',
  'server-perf': '[b0ef9bde-8383-4515-8d36-258cffcb89e6][ AuthTime::584.222069394975::PostAuthTime::133.438715703684 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:031 ms]%0a[GetFileStatus :: 00:00:031 ms]%0a[FsRename :: 00:00:094 ms]%0a[CleanCacheRename :: 00:00:000 ms]%0a[RENAME :: 00:00:127 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:41 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868179330,\"modificationTime\":1461868179463,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9f1ea19a-a77c-4f97-a6da-c218d146df59',
  'set-cookie': [ 'UserPrincipalSession=435a34ce-ab5c-49b6-9728-5ca09a4c799d; path=/; secure; HttpOnly' ],
  'server-perf': '[9f1ea19a-a77c-4f97-a6da-c218d146df59][ AuthTime::1311.7398794585::PostAuthTime::30797.8731594155 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:148 ms]%0a[GetFileStatus :: 00:00:149 ms]%0a[GETFILESTATUS :: 00:00:149 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:41 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868179330,\"modificationTime\":1461868179463,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9f1ea19a-a77c-4f97-a6da-c218d146df59',
  'set-cookie': [ 'UserPrincipalSession=435a34ce-ab5c-49b6-9728-5ca09a4c799d; path=/; secure; HttpOnly' ],
  'server-perf': '[9f1ea19a-a77c-4f97-a6da-c218d146df59][ AuthTime::1311.7398794585::PostAuthTime::30797.8731594155 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:148 ms]%0a[GetFileStatus :: 00:00:149 ms]%0a[GETFILESTATUS :: 00:00:149 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:41 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: //adlsclifolder01/concatfile.txt [f7cc726d-c6a2-48e4-aae6-b1c03712bbf4]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f7cc726d-c6a2-48e4-aae6-b1c03712bbf4',
  'server-perf': '[f7cc726d-c6a2-48e4-aae6-b1c03712bbf4][ AuthTime::589.791601264951::PostAuthTime::142.850177536254 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:035 ms]%0a[GetFileStatus :: 00:00:036 ms]%0a[GETFILESTATUS :: 00:00:036 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:42 GMT',
  connection: 'close',
  'content-length': '217' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: //adlsclifolder01/concatfile.txt [f7cc726d-c6a2-48e4-aae6-b1c03712bbf4]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f7cc726d-c6a2-48e4-aae6-b1c03712bbf4',
  'server-perf': '[f7cc726d-c6a2-48e4-aae6-b1c03712bbf4][ AuthTime::589.791601264951::PostAuthTime::142.850177536254 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:035 ms]%0a[GetFileStatus :: 00:00:036 ms]%0a[GETFILESTATUS :: 00:00:036 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:42 GMT',
  connection: 'close',
  'content-length': '217' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?destination=adlsclifolder02&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f41258ee-b955-4bf3-a4d0-8f7b6303e510',
  'set-cookie': [ 'UserPrincipalSession=f7158b89-4d06-4b6c-b0fb-72932693a643; path=/; secure; HttpOnly' ],
  'server-perf': '[f41258ee-b955-4bf3-a4d0-8f7b6303e510][ AuthTime::1404.99837259701::PostAuthTime::31200.3732975889 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:092 ms]%0a[GetFileStatus :: 00:00:092 ms]%0a[FsRename :: 00:00:097 ms]%0a[CleanCacheRename :: 00:00:000 ms]%0a[RENAME :: 00:00:191 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:43 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?destination=adlsclifolder02&op=RENAME&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f41258ee-b955-4bf3-a4d0-8f7b6303e510',
  'set-cookie': [ 'UserPrincipalSession=f7158b89-4d06-4b6c-b0fb-72932693a643; path=/; secure; HttpOnly' ],
  'server-perf': '[f41258ee-b955-4bf3-a4d0-8f7b6303e510][ AuthTime::1404.99837259701::PostAuthTime::31200.3732975889 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:092 ms]%0a[GetFileStatus :: 00:00:092 ms]%0a[FsRename :: 00:00:097 ms]%0a[CleanCacheRename :: 00:00:000 ms]%0a[RENAME :: 00:00:191 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:43 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1461868170111,\"modificationTime\":1461868181861,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd4b2c130-e545-4c73-bffd-c10c550869f9',
  'set-cookie': [ 'UserPrincipalSession=32fbcf8b-522b-4d45-bccb-8cddf13b7c68; path=/; secure; HttpOnly' ],
  'server-perf': '[d4b2c130-e545-4c73-bffd-c10c550869f9][ AuthTime::1454.1616180884::PostAuthTime::31941.5153304989 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:079 ms]%0a[GetFileStatus :: 00:00:080 ms]%0a[GETFILESTATUS :: 00:00:080 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:44 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1461868170111,\"modificationTime\":1461868181861,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd4b2c130-e545-4c73-bffd-c10c550869f9',
  'set-cookie': [ 'UserPrincipalSession=32fbcf8b-522b-4d45-bccb-8cddf13b7c68; path=/; secure; HttpOnly' ],
  'server-perf': '[d4b2c130-e545-4c73-bffd-c10c550869f9][ AuthTime::1454.1616180884::PostAuthTime::31941.5153304989 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:079 ms]%0a[GetFileStatus :: 00:00:080 ms]%0a[GETFILESTATUS :: 00:00:080 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:44 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: //adlsclifolder01 [ae857c25-4e38-4fc0-b58a-66433eea4dbf]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ae857c25-4e38-4fc0-b58a-66433eea4dbf',
  'set-cookie': [ 'UserPrincipalSession=b3b34d48-e206-4155-896e-c70512ccee6f; path=/; secure; HttpOnly' ],
  'server-perf': '[ae857c25-4e38-4fc0-b58a-66433eea4dbf][ AuthTime::1335.26194999568::PostAuthTime::30714.0187107751 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:125 ms]%0a[GetFileStatus :: 00:00:126 ms]%0a[GETFILESTATUS :: 00:00:126 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:44 GMT',
  connection: 'close',
  'content-length': '202' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: //adlsclifolder01 [ae857c25-4e38-4fc0-b58a-66433eea4dbf]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ae857c25-4e38-4fc0-b58a-66433eea4dbf',
  'set-cookie': [ 'UserPrincipalSession=b3b34d48-e206-4155-896e-c70512ccee6f; path=/; secure; HttpOnly' ],
  'server-perf': '[ae857c25-4e38-4fc0-b58a-66433eea4dbf][ AuthTime::1335.26194999568::PostAuthTime::30714.0187107751 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:125 ms]%0a[GetFileStatus :: 00:00:126 ms]%0a[GETFILESTATUS :: 00:00:126 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:44 GMT',
  connection: 'close',
  'content-length': '202' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=MSLISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"importfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868175197,\"modificationTime\":1461868175397,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"},{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868179330,\"modificationTime\":1461868179463,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '90ede247-df5d-4eb5-902d-add23bcb9e10',
  'server-perf': '[90ede247-df5d-4eb5-902d-add23bcb9e10][ AuthTime::562.419352700233::PostAuthTime::128.308597574198 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:042 ms]%0a[GetFileStatus :: 00:00:043 ms]%0a[HdfsListStatus :: 00:00:095 ms]%0a[ListStatus :: 00:00:139 ms]%0a[MSLISTSTATUS :: 00:00:140 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:45 GMT',
  connection: 'close',
  'content-length': '569' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=MSLISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"importfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868175197,\"modificationTime\":1461868175397,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"},{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868179330,\"modificationTime\":1461868179463,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '90ede247-df5d-4eb5-902d-add23bcb9e10',
  'server-perf': '[90ede247-df5d-4eb5-902d-add23bcb9e10][ AuthTime::562.419352700233::PostAuthTime::128.308597574198 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:042 ms]%0a[GetFileStatus :: 00:00:043 ms]%0a[HdfsListStatus :: 00:00:095 ms]%0a[ListStatus :: 00:00:139 ms]%0a[MSLISTSTATUS :: 00:00:140 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:45 GMT',
  connection: 'close',
  'content-length': '569' });
 return result; }]];