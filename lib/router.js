Router.configure({
    layoutTemplate: 'common'
});

Router.route('/', { template: 'welcome' }); //default page
Router.route('/facebook');
Router.route('/twitter');
Router.route('/instagram');