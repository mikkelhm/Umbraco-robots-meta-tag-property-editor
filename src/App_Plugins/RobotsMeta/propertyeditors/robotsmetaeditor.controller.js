angular.module("umbraco").controller("robots.robotsMetaEditorController",
    function ($scope) {
        $scope.listValues = [
            {
                name: "Index this, and follow links",
                description: "Will allow indexing of this page, and allow the search engine to follow links",
                value: "index,follow,noopd"
            },
            {
                name: "Dont index this, but follow links",
                description: "Will disallow indexing of this page, but will allow the search engine to follow links",
                value: "noindex,follow,noopd"
            },
            {
                name: "Index none",
                description: "Will disallow indexing of this page, and disallow it to follow links",
                value: "noindex,nofollow,noopd"
            }
        ];

    });