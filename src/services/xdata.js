/*
 * Copyright 2018-2025 JDCLOUD.COM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http:#www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * table相关接口
 * API related to XDATA-DW table
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../lib/node_loader')
var JDCloud = require('../lib/core')
var Service = JDCloud.Service
var serviceId = 'xdata'
Service._services[serviceId] = true

/**
 * xdata service.
 * @version 0.1.0
 */

JDCloud.XDATA = class XDATA extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'xdata.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
      *  查询实例列表
      * @param {Object} opts - parameters
      * @param {string} opts.instanceName - 实例名称
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      * @param dwDatabaseInfo data
      */

  listDatabaseInfo (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  listDatabaseInfo"
      )
    }

    opts = opts || {}

    if (opts.instanceName === undefined || opts.instanceName === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceName' when calling listDatabaseInfo"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.instanceName !== undefined && opts.instanceName !== null) {
      queryParams['instanceName'] = opts.instanceName
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call listDatabaseInfo with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwDatabase',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询数据库详情
      * @param {Object} opts - parameters
      * @param {string} opts.databaseName - 数据库名
      * @param {string} opts.instanceName - 实例名称
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      * @param dwDatabase data
      */

  getDatabaseInfo (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getDatabaseInfo"
      )
    }

    opts = opts || {}

    if (opts.databaseName === undefined || opts.databaseName === null) {
      throw new Error(
        "Missing the required parameter 'opts.databaseName' when calling getDatabaseInfo"
      )
    }
    if (opts.instanceName === undefined || opts.instanceName === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceName' when calling getDatabaseInfo"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.instanceName !== undefined && opts.instanceName !== null) {
      queryParams['instanceName'] = opts.instanceName
    }

    let pathParams = {
      regionId: regionId,
      databaseName: opts.databaseName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call getDatabaseInfo with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwDatabase/{databaseName}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  创建数据库
      * @param {Object} opts - parameters
      * @param {string} opts.databaseName - 数据库名
      * @param {string} opts.instanceName - 实例名称
      * @param {string} [opts.description] - 描述信息  optional
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      */

  createDatabase (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createDatabase"
      )
    }

    opts = opts || {}

    if (opts.databaseName === undefined || opts.databaseName === null) {
      throw new Error(
        "Missing the required parameter 'opts.databaseName' when calling createDatabase"
      )
    }
    if (opts.instanceName === undefined || opts.instanceName === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceName' when calling createDatabase"
      )
    }

    let postBody = {}
    if (opts.instanceName !== undefined && opts.instanceName !== null) {
      postBody['instanceName'] = opts.instanceName
    }
    if (opts.description !== undefined && opts.description !== null) {
      postBody['description'] = opts.description
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      databaseName: opts.databaseName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createDatabase with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwDatabase/{databaseName}',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  删除数据库
      * @param {Object} opts - parameters
      * @param {string} opts.databaseName - 数据库名
      * @param {string} opts.instanceName - 实例名称
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      */

  deleteDatabase (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteDatabase"
      )
    }

    opts = opts || {}

    if (opts.databaseName === undefined || opts.databaseName === null) {
      throw new Error(
        "Missing the required parameter 'opts.databaseName' when calling deleteDatabase"
      )
    }
    if (opts.instanceName === undefined || opts.instanceName === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceName' when calling deleteDatabase"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.instanceName !== undefined && opts.instanceName !== null) {
      queryParams['instanceName'] = opts.instanceName
    }

    let pathParams = {
      regionId: regionId,
      databaseName: opts.databaseName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call deleteDatabase with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwDatabase/{databaseName}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询实例列表
      * @param {Object} opts - parameters
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      * @param dwInstance data
      */

  listInstanceInfo (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  listInstanceInfo"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call listInstanceInfo with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwInstance',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询指定数据库下所有数据表
      * @param {Object} opts - parameters
      * @param {string} opts.instanceName - 实例名称
      * @param {string} opts.databaseName - 数据库名称
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      * @param dwTable data
      */

  listTableInfo (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  listTableInfo"
      )
    }

    opts = opts || {}

    if (opts.instanceName === undefined || opts.instanceName === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceName' when calling listTableInfo"
      )
    }
    if (opts.databaseName === undefined || opts.databaseName === null) {
      throw new Error(
        "Missing the required parameter 'opts.databaseName' when calling listTableInfo"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.instanceName !== undefined && opts.instanceName !== null) {
      queryParams['instanceName'] = opts.instanceName
    }
    if (opts.databaseName !== undefined && opts.databaseName !== null) {
      queryParams['databaseName'] = opts.databaseName
    }

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call listTableInfo with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwTable',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  创建数据表
      * @param {Object} opts - parameters
      * @param {string} opts.instanceName - 实例名称
      * @param {dwTableDesc} opts.dbModelDBTable - 数据表描述
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      */

  createTable (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createTable"
      )
    }

    opts = opts || {}

    if (opts.instanceName === undefined || opts.instanceName === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceName' when calling createTable"
      )
    }
    if (opts.dbModelDBTable === undefined || opts.dbModelDBTable === null) {
      throw new Error(
        "Missing the required parameter 'opts.dbModelDBTable' when calling createTable"
      )
    }

    let postBody = {}
    if (opts.instanceName !== undefined && opts.instanceName !== null) {
      postBody['instanceName'] = opts.instanceName
    }
    if (opts.dbModelDBTable !== undefined && opts.dbModelDBTable !== null) {
      postBody['dbModelDBTable'] = opts.dbModelDBTable
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createTable with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwTable',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  查询数据表信息
      * @param {Object} opts - parameters
      * @param {string} opts.tableName - 数据表名
      * @param {string} opts.instanceName - 实例名称
      * @param {string} opts.databaseName - 数据库名称
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      * @param dwTable data
      */

  getTableInfo (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  getTableInfo"
      )
    }

    opts = opts || {}

    if (opts.tableName === undefined || opts.tableName === null) {
      throw new Error(
        "Missing the required parameter 'opts.tableName' when calling getTableInfo"
      )
    }
    if (opts.instanceName === undefined || opts.instanceName === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceName' when calling getTableInfo"
      )
    }
    if (opts.databaseName === undefined || opts.databaseName === null) {
      throw new Error(
        "Missing the required parameter 'opts.databaseName' when calling getTableInfo"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.instanceName !== undefined && opts.instanceName !== null) {
      queryParams['instanceName'] = opts.instanceName
    }
    if (opts.databaseName !== undefined && opts.databaseName !== null) {
      queryParams['databaseName'] = opts.databaseName
    }

    let pathParams = {
      regionId: regionId,
      tableName: opts.tableName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call getTableInfo with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwTable/{tableName}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }

  /**
      *  删除数据表
      * @param {Object} opts - parameters
      * @param {string} opts.tableName - 数据表名
      * @param {string} opts.instanceName - 实例名称
      * @param {string} opts.databaseName - 数据库名称
      * @param {string} regionId - ID of the region
      * @param {string} callback - callback
      @return {Object} result
      * @param boolean status
      * @param string message
      * @param object data
      */

  deleteTable (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteTable"
      )
    }

    opts = opts || {}

    if (opts.tableName === undefined || opts.tableName === null) {
      throw new Error(
        "Missing the required parameter 'opts.tableName' when calling deleteTable"
      )
    }
    if (opts.instanceName === undefined || opts.instanceName === null) {
      throw new Error(
        "Missing the required parameter 'opts.instanceName' when calling deleteTable"
      )
    }
    if (opts.databaseName === undefined || opts.databaseName === null) {
      throw new Error(
        "Missing the required parameter 'opts.databaseName' when calling deleteTable"
      )
    }

    let postBody = null
    let queryParams = {}
    if (opts.instanceName !== undefined && opts.instanceName !== null) {
      queryParams['instanceName'] = opts.instanceName
    }
    if (opts.databaseName !== undefined && opts.databaseName !== null) {
      queryParams['databaseName'] = opts.databaseName
    }

    let pathParams = {
      regionId: regionId,
      tableName: opts.tableName
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  xdata/0.1.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call deleteTable with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/dwTable/{tableName}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = JDCloud.XDATA
