angular.module("umbraco").controller("robots.robotsMetaEditorController",
    function ($scope) {
        $scope.listValues = [
            {
                dictionaryKeyForName: "robotsMetaTag_indexFollowName",
                dictionaryKeyForDescription: "robotsMetaTag_indexFollowDescription",
                name: "Index this, and follow links",
                description: "Will allow indexing of this page, and allow the search engine to follow links",
                value: "index,follow,noodp"
            },
            {
                dictionaryKeyForName: "robotsMetaTag_noindexFollowName",
                dictionaryKeyForDescription: "robotsMetaTag_noindexFollowDescription",
                name: "Dont index this, but follow links",
                description: "Will disallow indexing of this page, but will allow the search engine to follow links",
                value: "noindex,follow,noodp"
            },
            {
                dictionaryKeyForName: "robotsMetaTag_noindexNofollowName",
                dictionaryKeyForDescription: "robotsMetaTag_noindexNofollowDescription",
                name: "Index none",
                description: "Will disallow indexing of this page, and disallow it to follow links",
                value: "noindex,nofollow,noodp"
            }
        ];

    });
