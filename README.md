Manage an app_settings property on a couchdb document. Mainly used to store app settings on a design_doc. See also:

https://github.com/garden20/couchapp-settings for a ui.


Usage
-----

    npm install app_settings -g

Restore
-------

    app_settings restore http://admin:admin@localhost:5984/kujua/_design/kujua-lite

Restore app_settings from the last revision of the doc that had app_settings. Useful when a couchapp has been pushed in development mode, and the app_settings have not been preserved.


Clear
-----

    app_settings clear http://admin:admin@localhost:5984/kujua/_design/kujua-lite

Removes the app_settings from the design doc. They can be restored with the restore command above.


Copy
----

    app_settings copy http://admin:admin@localhost:5984/kujua/_design/kujua-lite http://admin:admin@remote:5984/kujua/_design/kujua-lite


Copy app_settings from one app to another. The second url is the the target design doc to copy to.

