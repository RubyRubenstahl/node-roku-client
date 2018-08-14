# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/bschlenk/node-roku-client/compare/v1.2.3...v2.0.0) (2018-08-14)


### Features

* Make commander typesafe ([bccf13c](https://github.com/bschlenk/node-roku-client/commit/bccf13c))
* Split discover into discoverAll ([bd33c68](https://github.com/bschlenk/node-roku-client/commit/bd33c68))
* Update to typescript ([dea9a61](https://github.com/bschlenk/node-roku-client/commit/dea9a61))


### BREAKING CHANGES

* Removed the wait flag from discover and instead added a
separate method discoverAll which will wait for the given amount of time
for all devices on the network.