/**
 * [rewrite_local]
 * ^https:\/\/backend\.getdrafts\.com\/api\/v1\/verification\/verify_receipt url script-response-body https://raw.githubusercontent.com/alpha87/QuantumultX-Profiles/master/drafts.js
 * 
 * hostname=backend.getdrafts.com
 */

var obj = JSON.parse($response.body);

obj= {
  "active_expires_at" : "2029-01-01T00:00:00Z",
  "is_subscription_active" : true,
  "active_subscription_type" : "premium",
  "is_blocked" : false
};

$done({body: JSON.stringify(obj)});
