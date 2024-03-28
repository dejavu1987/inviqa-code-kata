<?php

namespace Tests;

use Example;
use Exception;
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    public Example $sut;
    protected function setUp(): void
    {
        $this->sut = new Example();
    }

    public function testFortyTwo()
    {
        $this->assertEquals(42, $this->sut->iKnowFortyTwo());
    }

    public function testRaising()
    {
        $this->expectException(Exception::class);

        throw new Exception("I'm an exception!");
    }
}
