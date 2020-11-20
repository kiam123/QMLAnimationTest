define({
  "name": "UC9020",
  "version": "0.0.0",
  "description": "",
  "title": "APIs User's Guide",
  "header": {
    "title": "Overview",
    "content": "<h1>APIs User Guide (Draft)</h1>\n<h4>This document describes available HTTP APIs.</h4>\n<h2><span id=\"api-example-for-1\">Supported HTTP Request Methods</span></h2>\n<p>The following methods are used to access server for a client's requests.</p>\n<blockquote>\n<p>1 . GET</p>\n<ul>\n<li>List all resources information</li>\n<li>Retrieve one resource data</li>\n</ul>\n</blockquote>\n<blockquote>\n<p>2 . POST</p>\n<ul>\n<li>Create a new entry of resource</li>\n<li>Upload resources</li>\n<li>Perform a specific action provided by resources</li>\n</ul>\n</blockquote>\n<blockquote>\n<p>3 . PATCH</p>\n<ul>\n<li>Update one resource data</li>\n<li>Replace entire resource and it’s elements</li>\n</ul>\n</blockquote>\n<blockquote>\n<p>4 . DELETE</p>\n<ul>\n<li>Delete a specific resource entry</li>\n</ul>\n</blockquote>\n<h2><span id=\"api-example-for-2\">APIs Request Header Authentication</span></h2>\n<p>To access APIs, a credential is required in the http header of each API request.</p>\n<pre><code class=\"language-http\">Authorization: {credential}\n</code></pre>\n<h2><span id=\"api-example-for-3\">APIs Response Status Code Definitions</span></h2>\n<p>The following status codes are used to represent results of a client's requests.</p>\n<blockquote>\n<p>1 . Successful</p>\n<ul>\n<li>200 OK</li>\n<li>201 Created</li>\n<li>202 Accepted</li>\n<li>204 No Content</li>\n</ul>\n</blockquote>\n<blockquote>\n<p>2 . Client Error</p>\n<ul>\n<li>400 Bad Request</li>\n<li>401 Unauthorized</li>\n<li>403 Forbidden</li>\n<li>404 Not Found</li>\n<li>405 Method Not Allowed</li>\n<li>406 Not Acceptable</li>\n<li>408 Request Timeout</li>\n<li>409 Conflict</li>\n</ul>\n</blockquote>\n<blockquote>\n<p>3 . Server Error</p>\n<ul>\n<li>500 Internal Server Error</li>\n<li>501 Not Implemented</li>\n<li>503 Service Unavailable</li>\n</ul>\n</blockquote>\n<h2><span id=\"api-example-for-4\">Error Handling</span></h2>\n<p>When error occured, the error message of the following format will be returned.</p>\n<pre><code class=\"language-json\">{\n    &quot;code&quot;: 40100,\n    &quot;message&quot;: &quot;User account is unauthorized.&quot;\n}\n</code></pre>\n<h2><span id=\"api-example-for-5\">History</span></h2>\n<table>\n<thead>\n<tr>\n<th>Version</th>\n<th>Date</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>0.0.0</td>\n<td>2018-11-06</td>\n<td>Initial Version. <br> <strong>Supported APIs</strong> : <br> <em>Authentication</em>, <em>Audio</em>, <em>Observer</em>, <em>Previewer</em>, <em>Streamer</em>, <em>Source</em>,<br> <em>Asset</em>, <em>Overlay</em>, <em>Layout</em>, <em>Scene</em>, <em>Channel</em>, <em>Codec</em>, <em>Stream</em>, <em>Firmware</em></td>\n</tr>\n</tbody>\n</table>\n"
  },
  "template": {
    "forceLanguage": "en",
    "withCompare": true,
    "withGenerator": false
  },
  "order": [
    "AuthGroup",
    "SystemGroup",
    "DatetimeGroup",
    "NetworkGroup",
    "AudioGroup",
    "ObserverGroup",
    "PreviewerGroup",
    "StreamerGroup",
    "SourceGroup",
    "AssetGroup",
    "OverlayGroup",
    "LayoutGroup",
    "SceneGroup",
    "ChannelGroup",
    "CodecGroup",
    "StreamGroup",
    "ProfileGroup",
    "TransitionGroup",
    "FirmwareGroup"
  ],
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2018-11-07T11:48:28.555Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});
