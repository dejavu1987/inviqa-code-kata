# Inviqa Code Kata

Code Kata Bootstrap repository:

## Getting Started

### TypeScript

[README](./typescript/README.MD)

### PHP

```
$ cd php
$ composer install
```

#### PHPUnit

Install PHPUnit

```
$ composer require --dev phpunit/phpunit
```

#### PHPSpec

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

### Python

```
$ cd python
```

Install, create and activate the virtualenv:

```
$ pip3 install virtualenv
$ virtualenv -p python3 venv
$ . venv/bin/activate
```

To activate the virtuaenv on Linux, do:

```
source .venv/bin/activate
```

Install packages:

```
$ pip install -r requirements.txt
```

Run the tests:

```
$ venv/bin/pytest -vvv
```

## Remember to DELETE YOUR CODE!

```
$ git reset --hard
$ git clean -f
```

## Special Challenges

## Meetup finder

Checkout the `meetup-finder` branch.
