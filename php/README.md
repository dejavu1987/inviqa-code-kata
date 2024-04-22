# PHP Kata Bootstrap

## Using Workspace
Make sure you have installed Docker and Workspace https://github.com/my127/workspace?tab=readme-ov-file#installation

### Install the project
```
cd php
ws install
```

### Run Tests
```
./vendor/bin/phpunit
```

## Running in the host
```
$ cd php
$ composer install
```

### PHPUnit

Install PHPUnit

```
$ composer require --dev phpunit/phpunit
```

### PHPSpec

```
$ composer require --dev phpspec/phpspec
```
Create your test class:

```
$ ./vendor/bin/phpspec describe "<your first class name>"
```

Run the specs:

```
$ ./vendor/bin/phpspec run
```
