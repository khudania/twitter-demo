# twitter

## Project setup
```
Step1:- git clone <git repo>

step2:- cd twitter

step3:- yarn install

step4:- yarn serve

It will open project on localhost:8080
```

Project Description:

1. The entire Project is divided into 4 components

    1.1 SideNav
    
    1.2 Tweets

    1.3 Trend for You

    1.4 Who to follow

you can find all the four component inside the component folder.

     i.e twitter > src > components

2. We have Single view that is homepage, which calls all this four components and creates the entire view

    src > views > Home.vue

3. App.vue is the main file wich we can view on the browser, it basically display the router-view.

4. Package.json file contains all the dependencies.


Let's Discuss Each Component one by one:-

``
SideNav.vue
``
1. In this I have defined the Main menu, which is going to be visible on the left side of the screen. 

2. The Nav data like: Home, Explore, Notfications, etc are coming from data function which I have defined below on the same Page.

3. I'm using v-for to loop through so, that it will create dynamic Navbar.

