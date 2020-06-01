<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'john',
            'email' => 'john@demo.com',
            'password' => Hash::make('123456'),
        ]);
        DB::table('users')->insert([
            'name' => 'Robert',
            'email' => 'Robert@demo.com',
            'password' => Hash::make('123456'),
        ]);
        DB::table('users')->insert([
            'name' => 'Smith',
            'email' => 'Smith@demo.com',
            'password' => Hash::make('123456'),
        ]);
        DB::table('users')->insert([
            'name' => 'Toy',
            'email' => 'Toy@demo.com',
            'password' => Hash::make('123456'),
        ]);
        DB::table('users')->insert([
            'name' => 'Adam',
            'email' => 'Adam@demo.com',
            'password' => Hash::make('123456'),
        ]);
    }
}
