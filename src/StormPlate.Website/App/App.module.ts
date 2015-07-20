module App {
    import StateProvider = angular.ui.IStateProvider;
    import ProvideService = angular.auto.IProvideService;
    export class Routes {

        static $inject = ["$stateProvider", "$urlRouterProvider", "$provide", '$locationProvider'];
        static configureRoutes($stateProvider: StateProvider,
            $urlRouterProvider: angular.ui.IUrlRouterProvider,
            $provide: ProvideService,
            $locationProvider: ng.ILocationProvider) {

            $stateProvider
                .state('App',
                {
                    abstract: true,
                    url: '',
                    views: {
                        'sidebar': {
                            templateUrl: 'html/Shared/SideBar/SideBar.html',
                            controller: "App.Shared.SidebarController"

                        },
                        'topbar': {
                            templateUrl: 'html/Shared/Topbar/Topbar.html'
                        }
                    }
                })
                .state('dashboard',
                {
                    parent: 'App',
                    url: '/',
                    views: {
                        //@ says to targte parent view
                        'content@': {
                            templateUrl: 'html/Dashboard/dashboard.html'
                        }
                    }
                })
                .state('blank',
                {
                    parent: 'App',
                    url: '/blank',
                    views: {
                        'content@': {
                            templateUrl: 'html/Blank/Blank.html'
                        }
                    }
                })
            ;


            $urlRouterProvider.otherwise('/');

           // $locationProvider.html5Mode(true);
        }
    }
}



((): void => {
    var modules = ['ui.router'];//[, 'ngMaterial', 'ngMessages'];

    var app = angular.module("App", modules);
    app.config(App.Routes.configureRoutes);
    // app.run(App.Start.run);
})();