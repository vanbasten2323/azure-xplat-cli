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
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"folderLevelAclState\":\"Disabled\",\"trustedTenants\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:28:37.5441899Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '662',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '83cab062-de3b-4989-95a7-af9d2be1f43d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'baf127ac-8d70-4328-b9cf-35fc444f3c51',
  'x-ms-routing-request-id': 'WESTUS:20160428T182919Z:baf127ac-8d70-4328-b9cf-35fc444f3c51',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"folderLevelAclState\":\"Disabled\",\"trustedTenants\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:28:37.5441899Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '662',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '83cab062-de3b-4989-95a7-af9d2be1f43d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'baf127ac-8d70-4328-b9cf-35fc444f3c51',
  'x-ms-routing-request-id': 'WESTUS:20160428T182919Z:baf127ac-8d70-4328-b9cf-35fc444f3c51',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"folderLevelAclState\":\"Disabled\",\"trustedTenants\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:28:37.5441899Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '662',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4e82fbde-bb57-4b07-bfe3-73f12338bcfd',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '410ded84-6702-4f10-a115-93964009ec1f',
  'x-ms-routing-request-id': 'WESTUS:20160428T182919Z:410ded84-6702-4f10-a115-93964009ec1f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"folderLevelAclState\":\"Disabled\",\"trustedTenants\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:28:37.5441899Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '662',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4e82fbde-bb57-4b07-bfe3-73f12338bcfd',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '410ded84-6702-4f10-a115-93964009ec1f',
  'x-ms-routing-request-id': 'WESTUS:20160428T182919Z:410ded84-6702-4f10-a115-93964009ec1f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:29:20.8387432Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '633',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '93dd8092-95d1-4f3e-8f13-1ec12f5cb0cb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '411d31f1-2cfc-4d5c-a203-86508893e02b',
  'x-ms-routing-request-id': 'WESTUS:20160428T182923Z:411d31f1-2cfc-4d5c-a203-86508893e02b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:29:20.8387432Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '633',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '93dd8092-95d1-4f3e-8f13-1ec12f5cb0cb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '411d31f1-2cfc-4d5c-a203-86508893e02b',
  'x-ms-routing-request-id': 'WESTUS:20160428T182923Z:411d31f1-2cfc-4d5c-a203-86508893e02b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"folderLevelAclState\":\"Disabled\",\"trustedTenants\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:29:20.8387432Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '686',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '96cf7b1e-aa8d-4e8d-a98c-ba62a29ef12c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'cb8cb881-1157-4492-b959-2410940a7db3',
  'x-ms-routing-request-id': 'WESTUS:20160428T182924Z:cb8cb881-1157-4492-b959-2410940a7db3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"folderLevelAclState\":\"Disabled\",\"trustedTenants\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls206.azuredatalakestore.net\",\"accountId\":\"2ad8ebd0-8eab-4a00-88cb-32afdac5687c\",\"creationTime\":\"2016-04-28T18:28:37.5441899Z\",\"lastModifiedTime\":\"2016-04-28T18:29:20.8387432Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls206\",\"name\":\"xplattestadls206\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '686',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '96cf7b1e-aa8d-4e8d-a98c-ba62a29ef12c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'cb8cb881-1157-4492-b959-2410940a7db3',
  'x-ms-routing-request-id': 'WESTUS:20160428T182924Z:cb8cb881-1157-4492-b959-2410940a7db3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:23 GMT',
  connection: 'close' });
 return result; }]];