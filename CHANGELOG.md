# Change Log

All notable changes to Rhombus software will be documented in this location. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# URL

https://rhombus.space

<a name="1.0.0-beta.12"></a>
# 1.0.0-beta.12 (2021-06-06)

### Features
* Backlog: Added CRUD
* Blog: Added CRUD
* Dynasties: Added CRUD
* Latest News: Added CRUD
* rh-shell: Created Firebase collection for app metadata

### Tasks
* Moved all non-confirmation dialogs to views (About, Contact, Donate, Blog)

### Bug Fixes
* rh-shell: Fixed sidenav collapse bug

<a name="1.0.0-beta.11"></a>
# 1.0.0-beta.11 (2020-12-15)

### Features
* Backlog: Created shareable component
* Blog: Created shareable components for Post(s)
* Dynasties: Created shareable components for Dynasty Mark, Years, Weeks
* Latest News: Created shareable component

### Bug Fixes
* rh-shell: Fixed router-outlet issue

<a name="1.0.0-beta.10"></a>
# 1.0.0-beta.10 (2020-11-09)

### Features
* rh-shell: Added selected state to sidenav
* rh-shell: Added nav toolbar above base router-outlet

### Bug Fixes
* rh-shell: Added 'overflow: hidden' to base router-outlet


### BREAKING CHANGES
* rh-shell: Selectors changed from 'rhombus-shell' to 'rh-shell'
* rh-shell: upgrade to Angular 10

<a name="1.0.0-beta.9"></a>
# 1.0.0-beta.9 (2020-11-01)

### Features
* Template: Added custom gradients for BGR primary/accent/warning
* Donate: Added to Firebase service
* Contact: Added to Firebase service

### Bug Fixes
* rhombus-shell: collapsed sidenav for viewports < XL

<a name="1.0.0-beta.8"></a>
# 1.0.0-beta.8 (2020-04-23)

## Features
* rhombus-app: Began laying framework for rhombus/rhombus-shell views

### Bug Fixes
* rhombus-shell: fixed Home button text issue

<a name="1.0.0-beta.7"></a>
# 1.0.0-beta.7 (2020-04-23)

### Features
* rhombus-app: added breadcrumb to routing
* rhombus-shell: added BreadCrumb feature to wrapper

<a name="1.0.0-beta.6"></a>
# 1.0.0-beta.6 (2020-04-17)

### Features
* rhombus-app: Stubbed out views for Rhombus/Rhombus-Shell
* rhombus-shell: updated sidenav to handle NavGroup as well as NavItem

<a name="1.0.0-beta.5"></a>
# 1.0.0-beta.5 (2020-02-04)

## Bug Fixes

* rhombus-shell: added sidenav collapse to routing

<a name="1.0.0-beta.4"></a>
# 1.0.0-beta.4 (2020-01-08)

## Features

* Created the following npm library:
  - **@dougwilliamson/rhombus**
    - Created application shell to handle the following:
        - List Widget component
        - Grid Widget component
* rhombus-shell: added Donate mat-menu button, dialog and configurable url

<a name="1.0.0-beta.3"></a>
# 1.0.0-beta.3 (2019-12-25)

## Features
* rhombus-shell: moved Theme Mode to Settings view, changed to dropdown

<a name="1.0.0-beta.2"></a>
# 1.0.0-beta.2 (2019-12-20)

### Features
* rhombus-shell: replaced info button with matMenu
* rhombus-shell: added Changelog Url to applicationInfo, button to shell-about dialog
* rhombus-shell: updated Sidenav mode for responsiveness

<a name="1.0.0-beta.1"></a>
# 1.0.0-beta.1 (2019-12-17)

### Features

* rhombus-shell: added Work Sans, Montserrat sans-serif font family to Typography

<a name="1.0.0-beta.0"></a>
# 1.0.0-beta.0 (2019-12-10)

### Features

* Created the following npm library:
  - **@dougwilliamson/rhombus-shell**
    - Created application shell to handle the following:
        - Header
        - Navigation
        - About Dialog
* Created the following application routes/views:
    - Home
    - Library
